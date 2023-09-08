import { useState } from "react";
import { useFormik, Field, Form, Formik } from 'formik';
import Select from 'react-select';


export const Formulario: React.FC<{}> = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  const initialValues: MyFormValues = {
    nombre: '',
    email: '',
    categoria: '',
    review: ''
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => { }}
    >
      <Form>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label htmlFor="nombre" className="block text-sm font-medium leading-6 text-gray-900">
              Nombre
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="nombre"
                id="nombre"
                autoComplete="nombre"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Correo electronico
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="categoria" className="block text-sm font-medium leading-6 text-gray-900">
            Categoria
          </label>
          <div className="mt-2">
            <Select
              // id="categoria"
              // name="categoria"
              // autoComplete="categoria"
              // className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"

              options={options}
            />
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="opinion" className="block text-sm font-medium leading-6 text-gray-900">
            Opinion
          </label>
          <div className="mt-2">
            <textarea
              id="opinion"
              name="opinion"
              rows={3}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={''}
            />
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-600">Exprese su opinion a los demas.</p>
        </div>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Enviar
        </button>

      </Form>
    </Formik>
  );
};
