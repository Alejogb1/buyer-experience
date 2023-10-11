import { api } from '~/utils/api';
import { z } from 'zod';
import { useRouter } from 'next/router'
import { Form, SubmitButton, useZodForm } from '~/components/Form';
import Head from 'next/head';
import Link from 'next/link';
// validation schema is used by api mutation and client
export const validationSchemaLead = z.object({
  email: z.string().email(),
  productName: z.string(),
});
import capitalizeFirstLetters from "~/utils/capitalize";

type Props = {
  slug: String
}

const Product = () => {

  const router = useRouter()

  const name = router.query.product

  const productName: string = name as string // Ensure productName is a string

  const utils = api.useContext().form;
  const mutation = api.form.addLead.useMutation({
    onSuccess: async () => {
      await utils.invalidate();
      router.push('/')
    },
  });

  const form = useZodForm({
    schema: validationSchemaLead,
    defaultValues: {
      email: '',
      productName: '',
      // Aca quise poner el productName pero me da error / no funca
    },
  });

  return (
    <div className="">
      <Head>
        <title> Que es {productName ? productName : "no"}? Audiencia</title>
        <meta
          name="description"
          content="Te explicamos de que va, consigue un mejor precio, y las mejores alternativas que pudimos encontrar solo para vos."
        />
      </Head>
      <div className="">
        <Link href="/" className="hover:underline font-semilight text-sm cursor-pointer">Home</Link>
        <span className="font-thin"> / </span>
        <span className="font-semilight text-sm">{name}</span>
      </div>
      <div className="pt-20">
        <div className="overflow-hidden">
          <div className="max-w-8xl">
            <div className="max-w-8xl gap-x-8 gap-y-16 lg:max-w-none">
              <div className="max-w-4xl lg:max-w-4xl">
                <h2 className="text-4xl lg:text-8xl font-bold tracking-tight text-black sm:text-6xl">{name}</h2>
                <p className="mt-4 text-lg leading-8 text-gray-600 font-light">
                  Te explicamos de que va {name}, consigue un mejor precio, y las mejores alternativas que pudimos encontrar solo para vos y tu equipo.
                </p>
                <Form form={form}
                  handleSubmit={async (values) => {
                    if (!productName) return
                    await mutation.mutateAsync({
                      email: values.email,
                      productName,
                    })
                    form.reset();
                  }}
                  className="mt-6 flex flex-column max-w-md gap-x-4">
                  <label htmlFor="email-address" className="sr-only">

                  </label>
                  <input
                    id="email-address"
                    type="email"
                    autoComplete="email"
                    required
                    {...form.register('email')}
                    className="min-w-0 flex-auto rounded-md border-0 bg-black/5 px-3.5 py-2 text-black shadow-xs ring-1 ring-inset ring-black/10 focus:ring-black sm:text-sm sm:leading-6"
                    placeholder="Email"
                  />
                  {form.formState.errors.email?.message && (
                    <p className="text-red-500 text-xs">
                      {form.formState.errors.email?.message}
                    </p>
                  )}
                  <SubmitButton
                    form={form} // If you place the submit button outside of the form, you need to specify the form to submit
                    className="flex-none rounded-md bg-black px-3.5 py-2.5 text-sm font-normal text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Obtener más información
                  </SubmitButton>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};



export default Product;