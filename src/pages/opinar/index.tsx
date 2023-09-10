import { api } from '~/utils/api';
import { z } from 'zod';

import { Form, SubmitButton, useZodForm } from '~/components/Form';

// validation schema is used by api mutation and client
export const validationSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    review_message: z.string().min(5),
    product_name: z.string()
});

export default function Opinar() {
    const utils = api.useContext().form;
    const mutation = api.form.add.useMutation({
        onSuccess: async () => {
            await utils.invalidate();
        },
    });

    const form = useZodForm({
        schema: validationSchema,
        defaultValues: {
            name: '',
            email: '',
            review_message: '',
            product_name: ''
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
                    <label for="email" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Nombre</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                </div>
                <div className="mb-6">
                    <label for="email" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="marcos@salesforce.com" required />
                </div>
                <div className="mb-6">
                    <label for="password" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Producto</label>
                    <input type="password" id="password" placeholder="Por ejemplo: Hubspot" className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>

                <div className="sm:col-span-2">
                    <label for="message" className="block mb-2 text-xs font-bold text-gray-900 dark:text-gray-400">Reseña</label>
                    <textarea id="message" rows="6" className="block p-1 w-full text-xs text-gray-900 bg-gray-50 rounded-md shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Deja tu reseña..."></textarea>
                </div>
                <div className="sm:col-span-2 mb-10">
                    <label for="message" className="block mb-2 text-xs font-medium text-gray-900 dark:text-gray-400">Puntaje</label>
                    <div className="flex">
                        <div className="flex items-center mr-4">
                            <input id="inline-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="inline-radio" className="ml-2 text-xs font-light text-gray-900 dark:text-gray-300">1</label>
                        </div>
                        <div className="flex items-center mr-4">
                            <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="inline-2-radio" className="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">2</label>
                        </div>
                        <div className="flex items-center mr-4">
                            <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="inline-2-radio" className="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">3</label>
                        </div>
                        <div className="flex items-center mr-4">
                            <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="inline-2-radio" className="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">4</label>
                        </div>
                        <div className="flex items-center mr-4">
                            <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="inline-2-radio" className="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300">5</label>
                        </div>
                    </div>
                </div>
                <SubmitButton
                    form={form} // If you place the submit button outside of the form, you need to specify the form to submit
                    className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-md text-xs w-full sm:w-auto px-3 py-1.5 text-center dark:bg-black dark:hover:bg-black dark:focus:ring-black"
                >
                    Enviar
                </SubmitButton>
            </Form>
        </>
    );
}
