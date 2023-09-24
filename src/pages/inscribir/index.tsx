import { api } from '~/utils/api';
import { z } from 'zod';
import { useRouter } from 'next/router'
import { Form, SubmitButton, useZodForm } from '~/components/Form';

// validation schema is used by api mutation and client
export const validationSchemaProvider = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    site_url: z.string().url(),
});

export default function Inscribir() {
    const router = useRouter()
    const utils = api.useContext().form;
    const mutation = api.form.addProvider.useMutation({
        onSuccess: async () => {
            await utils.invalidate();
            router.push('/')
        },
    });

    const form = useZodForm({
        schema: validationSchemaProvider,
        defaultValues: {
            name: '',
            email: '',
            site_url: '',
        },
    });

    return (
        <>
            <Form
                form={form}
                handleSubmit={async (values) => {
                    await mutation.mutateAsync(values);
                    form.reset();
                }}
                className="space-y-2 max-w-sm mx-auto mt-10"
            >
                <div className="px-4 sm:px-0">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">Inscribe a tu producto (gratis)</h3>
                    <p className="max-w-2xl text-sm leading-6 text-gray-500">Registra tu software para que tu audiencia potencial lo encuentre.</p>
                </div>
                <div className="">
                    <label className="block mb-2 text-xs font-medium text-gray-900 ">
                        Nombre
                        <br />
                        <input {...form.register('name')} className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1" placeholder="" required />

                    </label>
                    {form.formState.errors.name?.message && (
                        <p className="text-red-500 text-xs">
                            {form.formState.errors.name?.message}
                        </p>
                    )}
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-xs font-medium text-gray-900 ">
                        Email <span className='text-gray-600'>(empresa)</span>
                        <br />
                        <input {...form.register('email')} className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1" placeholder="marcos@salesforce.com" required />
                    </label>
                    {form.formState.errors.email?.message && (
                        <p className="text-red-500 text-xs">
                            {form.formState.errors.email?.message}
                        </p>
                    )}
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-xs font-medium text-gray-900 ">
                        Sitio web
                        <br />
                        <input {...form.register('site_url')} placeholder="https://www.salesforce.com" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1" required />
                    </label>
                    {form.formState.errors.site_url?.message && (
                        <p className="text-red-500 text-xs">
                            {form.formState.errors.site_url?.message}
                        </p>
                    )}
                </div>
                <SubmitButton
                    form={form} // If you place the submit button outside of the form, you need to specify the form to submit
                    className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-md text-xs w-full sm:w-auto px-3 py-1.5 text-center :bg-black :hover:bg-black :focus:ring-black"
                >
                    Enviar
                </SubmitButton>
            </Form>
        </>
    );
}
