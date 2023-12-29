import { Form } from "./Form";
import { useRouter } from "next/router";
import { api } from "~/utils/api";
import { useZodForm } from "./Form";
import { z } from 'zod';
import { SubmitButton } from "./Form";
const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);
  
  
// validation schema is used by api mutation and client
export const validationSchemaDemo = z.object({
    name: z.string().min(2),
    business_email: z.string().email(),
    phone_number: z.string().regex(phoneRegex, 'Invalid Number!'),
    job_title: z.string(),
});

export default function DemoForm () {
    const router = useRouter()
    const utils = api.useContext().form;
    const mutation = api.form.addDemoLead.useMutation({
        onSuccess: async () => {
            await utils.invalidate();
            router.push('/')
        },
    });

    const form = useZodForm({
        schema: validationSchemaDemo,
        defaultValues: {
            name: '',
            business_email: '',
            phone_number: '',
            job_title: '',
        },
    });

    return (<>
                <Form
                form={form}
                handleSubmit={async (values) => {
                    await mutation.mutateAsync(values);
                    form.reset();
                }}
                className="space-y-2 max-w-sm mx-auto mt-10"
            >
                  <div className="mb-5">  
                    <label className="block mb-2 text-sm font-medium text-gray-900 text-white">Nombre completo
                        <br/>
                        <input {...form.register('name')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required/>
                    </label>
                    {form.formState.errors.name?.message && (
                            <p className="text-red-500 text-xs">
                                {form.formState.errors.name?.message}
                            </p>
                    )}
                  </div>
                  <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 text-white">Email de empresa
                            <br/>
                            <input {...form.register('business_email')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required/>
                        </label>
                        {form.formState.errors.business_email?.message && (
                                <p className="text-red-500 text-xs">
                                    {form.formState.errors.business_email?.message}
                        </p>
                        )}
                  </div>
                  <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 text-white">Número de teléfono
                            <br/>
                            <input {...form.register('phone_number')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required/>
                        </label>
                        {form.formState.errors.phone_number?.message && (
                                <p className="text-red-500 text-xs">
                                    {form.formState.errors.phone_number?.message}
                                </p>
                        )}
                  </div>
                  <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 text-white">Posición de trabajo
                            <br/>
                            <input {...form.register('job_title')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required/>
                        </label>
                        {form.formState.errors.job_title?.message && (
                                <p className="text-red-500 text-xs">
                                    {form.formState.errors.job_title?.message}
                                </p>
                        )}
                  </div>  

                <SubmitButton
                    form={form} // If you place the submit button outside of the form, you need to specify the form to submit
                    className="text-white bg-black hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                >
                    Enviar
                </SubmitButton>
                <p className='text-xs text-gray-700 py-2'>Al enviar este formulario, acepta la Política de privacidad y los Términos de servicio de Audiencia.</p>

            </Form>

    </>)
} 
