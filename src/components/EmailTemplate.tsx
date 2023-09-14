import * as React from 'react';

interface EmailTemplateProps {
    Name: string;
    Product: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    Name,
    Product
}) => (
    <div>
        <h1>Hola {Name}!</h1>
        <p>Vimos que estas interesado en comprar {Product}.</p>
        <br />
        <p>Que necesitas saber?</p>
        <p>* Sobre precios y el producto</p>
        <p>* Mejores opciones (alternativas)</p>
        <p>* Como solucionar un problema</p>
        <p>Si surge algun problema, ponte en contacto con nosotros en https://audiencia.co/contacto</p>
        <br />
        <p>Saludos,</p>
        <p>Audiencia - Alejo</p>
    </div>
);
