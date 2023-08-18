import { useFormik } from "formik"
import { basicSchema } from "~/pages/api/validation";
 
const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise ((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
};


const Advertise = () => {
    const { values, errors, handleBlur, touched, isSubmitting, handleChange, handleSubmit } = useFormik({
        initialValues: {
            sitio: "",
            email: "",
            categoria: "",
        },
        validationSchema: basicSchema,
        onSubmit,
    });

    return (
        <div className="font-inter flex items-center justify-center h-screen">
        <form className="w-1/3 m-8 p-3" onSubmit={handleSubmit} autoComplete="off">
            <h1 className="text-4xl font-bold mb-10">Publicita tu sitio aqui</h1>
            <label className="block mb-4 text-xl font-medium text-gray-900" htmlFor="sitio">Sitio Web</label>
            <input
            value={values.sitio}
            onChange={handleChange}
            id="sitio"
            type="text"
            onBlur={handleBlur}
            className={`${
                errors.sitio && touched.sitio ? "border-red-500 " : ""
              }mb-6 bg-gray-200 border border-gray-500 text-gray-900 text-lg rounded-lg focus:ring-blue-700 focus:border-blue-500 block w-full p-2.5`}
            />
            {errors.sitio && touched.sitio && <p className="text-red-500 error">{errors.sitio}</p>}
            <label className="block mb-4 text-xl font-medium text-gray-900" htmlFor="email">Email</label>
            <input
            value={values.email}
            onChange={handleChange}
            id="email"
            type="email"
            onBlur={handleBlur}
            className={`${
                errors.email && touched.email ? "border-red-500 " : ""
              }mb-6 bg-gray-200 border border-gray-500 text-gray-900 text-lg rounded-lg focus:ring-blue-700 focus:border-blue-500 block w-full p-2.5`}
            />
            {errors.email && touched.email && <p className="text-red-500 error">{errors.email}</p>}
            <label className="block mb-4 text-xl font-medium text-gray-900" htmlFor="categoria">Categoria</label>
            <input
            value={values.categoria}
            onChange={handleChange}
            id="categoria"
            type="text"
            onBlur={handleBlur}
            className={`${
                errors.categoria && touched.categoria ? "border-red-500 " : ""
              }mb-6 bg-gray-200 border border-gray-500 text-gray-900 text-lg rounded-lg focus:ring-blue-700 focus:border-blue-500 block w-full p-2.5`}
            />
            {errors.categoria && touched.categoria && <p className="text-red-500 error">{errors.categoria}</p>}
            <button disabled={isSubmitting} className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white text-lg rounded-lg py-3 mt-6 w-full" type="submit">Enviar</button>
        </form>
        </div>
    );
};

export default Advertise;