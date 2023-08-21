import { useFormik } from "formik"
import { basicSchema } from "~/pages/api/validation";

const onSubmit = () => {
    console.log("enviado");
};


const Review = () => {
    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues: {
            sitio: "",
            email: "",
            categoria: "",
        },
        validationSchema: basicSchema,
        onSubmit,
    });

    return (
        <div className="flex items-center justify-center h-screen">
            <form>
                <div className="space-y-12 p-10">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-6xl font-bold pb-5 leading-7 text-black-900">Opinar</h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600 pb-5">Usa una dirección habitual en la que puedas recibir correo.</p>
                        <div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
                                <div className="mt-2">
                                    <input type="text" name="first-name" id="first-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Apellido</label>
                                <div className="mt-2">
                                    <input type="text" name="last-name" id="last-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                                <div className="mt-2">
                                    <input type="text" name="street-address" id="street-address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {errors.email && touched.email && <p className="error">{errors.email}</p>}
                <div className="mt-6 flex items-center justify-end gap-x-6 pb-10 pr-10">
                    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enviar</button>
                </div>
            </form>
        </div>
    );
};

export default Review;