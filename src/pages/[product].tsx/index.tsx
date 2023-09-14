import { useFormik } from "formik"
import { basicSchema } from "~/pages/api/validation";
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

const onSubmit = () => {
  console.log("enviado");
};


const Product = () => {
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
    <div className="flex justify-center pt-20">
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="mx-auto max-w-8xl gap-x-8 gap-y-16 lg:max-w-none">
            <div className="max-w-4xl lg:max-w-4xl">
              <h2 className="text-8xl font-bold tracking-tight text-black sm:text-6xl">Existe una mejor solución que Zenrows?</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600 font-semibold">
                Te explicamos de que va Zenrows, consigue un mejor precio, y las mejores alternativas que pudimos encontrar para vos.
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-black/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Ingresa tu email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-normal text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Subscribirse
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;