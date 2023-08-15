import { useFormik } from "formik"
import { basicSchema } from "~/pages/api/validation";
 
const onSubmit = () => {
    console.log("enviado");
};


const Advertise = () => {
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
        <form className="w-1/4 m-6 p-5 bg-gray-100 rounded-lg" onSubmit={handleSubmit} autoComplete="off">
            <h1 className="text-2xl font-bold mb-4">Publicita tu sitio aqui</h1>
            <label className="block mb-2 text-m font-medium text-gray-900" htmlFor="sitio">Sitio Web</label>
            <input
            value={values.sitio}
            onChange={handleChange}
            id="sitio"
            type="text"
            onBlur={handleBlur}
            className={`${
                errors.sitio && touched.sitio ? "input-error " : ""
              }`}
            />
            {errors.sitio && touched.sitio && <p className="error">{errors.sitio}</p>}
            <label className="block mb-2 text-m font-medium text-gray-900" htmlFor="email">Email</label>
            <input
            value={values.email}
            onChange={handleChange}
            id="email"
            type="email"
            onBlur={handleBlur}
            className={`${
                errors.email && touched.email ? "input-error " : ""
              }bg-gray-200 border border-gray-500 text-gray-900 text-m rounded-lg focus:ring-blue-700 focus:border-blue-500 block w-full p-2.5`}
            />
            {errors.email && touched.email && <p className="error">{errors.email}</p>}
            <label className="block mb-2 text-m font-medium text-gray-900" htmlFor="categoria">Categoria</label>
            <input
            value={values.categoria}
            onChange={handleChange}
            id="categoria"
            type="text"
            onBlur={handleBlur}
            className={`${
                errors.categoria && touched.categoria ? "input-error " : ""
              }bg-gray-200 border border-gray-500 text-gray-900 text-m rounded-lg focus:ring-blue-700 focus:border-blue-500 block w-full p-2.5`}
            />
            {errors.categoria && touched.categoria && <p className="error">{errors.categoria}</p>}
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-20 p-3 m-2 text-center" type="submit">Enviar</button>
        </form>
        </div>
    );
};

export default Advertise;