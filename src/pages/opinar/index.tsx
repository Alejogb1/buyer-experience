import { api } from '~/utils/api';
import { z } from 'zod';
import { useRouter } from 'next/router'
import { Form, SubmitButton, useZodForm } from '~/components/Form';

// validation schema is used by api mutation and client
export const validationSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    review_message: z.string().min(5),
    product_name: z.string(),
    rating: z.string(),
});

export default function Opinar() {
    const router = useRouter()
    const utils = api.useContext().form;
    const mutation = api.form.add.useMutation({
        onSuccess: async () => {
            await utils.invalidate();
            router.push('/')
        },
    });

    const form = useZodForm({
        schema: validationSchema,
        defaultValues: {
            name: '',
            email: '',
            review_message: '',
            product_name: '',
            rating: '',
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
                className="space-y-2 max-w-sm mx-auto"
            >
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
                        Email
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
                        Producto
                        <br />
                        <input {...form.register('product_name')} placeholder="Por ejemplo: Hubspot" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1" required />
                    </label>
                    {form.formState.errors.product_name?.message && (
                        <p className="text-red-500 text-xs">
                            {form.formState.errors.product_name?.message}
                        </p>
                    )}
                </div>

                <div className="sm:col-span-2">
                    <label className="block mb-2 text-xs font-bold text-gray-900">
                        Reseña
                        <br />
                        <textarea {...form.register('review_message')} className="block p-1 w-full text-xs font-medium text-gray-900 bg-gray-50 rounded-md shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 :border-gray-600 :placeholder-gray-400  :focus:ring-primary-500 :focus:border-primary-500" placeholder="Deja tu reseña..."></textarea>
                    </label>
                    {form.formState.errors.review_message?.message && (
                        <p className="text-red-500 text-xs">
                            {form.formState.errors.review_message?.message}
                        </p>
                    )}
                </div>
                <div className="sm:col-span-2 mb-10">
                    <label className="block mb-2 text-xs font-medium text-gray-900">Puntaje</label>
                    <div className="flex">
                        <div className="flex items-center mr-4">
                            <input id="inline-radio" type="radio" value="1" {...form.register('rating')} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  :ring-offset-gray-800 focus:ring-2 :border-gray-600" />
                            <label className="ml-2 text-xs font-light text-gray-900 :text-gray-300">1</label>
                        </div>
                        <div className="flex items-center mr-4">
                            <input id="inline-2-radio" type="radio" value="2" {...form.register('rating')} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  :ring-offset-gray-800 focus:ring-2 :border-gray-600" />
                            <label className="ml-2 text-xs font-medium text-gray-900 :text-gray-300">2</label>
                        </div>
                        <div className="flex items-center mr-4">
                            <input id="inline-2-radio" type="radio" value="3" {...form.register('rating')} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  :ring-offset-gray-800 focus:ring-2 :border-gray-600" />
                            <label className="ml-2 text-xs font-medium text-gray-900 :text-gray-300">3</label>
                        </div>
                        <div className="flex items-center mr-4">
                            <input id="inline-2-radio" type="radio" value="4" {...form.register('rating')} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  :ring-offset-gray-800 focus:ring-2 :border-gray-600" />
                            <label className="ml-2 text-xs font-medium text-gray-900 :text-gray-300">4</label>
                        </div>
                        <div className="flex items-center mr-4">
                            <input id="inline-2-radio" type="radio" value="5" {...form.register('rating')} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  :ring-offset-gray-800 focus:ring-2 :border-gray-600" />
                            <label className="ml-2 text-xs font-medium text-gray-900 :text-gray-300">5</label>
                        </div>
                    </div>
                    {form.formState.errors.rating?.message && (
                        <p className="text-red-700">
                            {form.formState.errors.rating?.message}
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
