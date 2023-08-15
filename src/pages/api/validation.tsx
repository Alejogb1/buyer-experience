import * as yup from "yup";

export const basicSchema = yup.object().shape({
    sitio: yup.string() 
    .min(2, 'Es muy corto') 
    .max(50, 'Es muy largo')
    .required('Obligatorio'),
    email: yup.string()
    .email("Por favor introduzca un email valido")
    .required('Obligatorio'),
    categoria: yup.string() 
    .min(6, 'Introduzca mas informacion') 
    .max(60, 'Es muy largo')
    .required('Obligatorio'),
})