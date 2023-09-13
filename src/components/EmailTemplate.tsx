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
        <p>Creemos que es una herramienta espectacular que deberias intentar usarla.</p>
        <p>Que te gustaría saber?</p>
        <p>Saludos,</p>
        <p>Audiencia - Alejo</p>
    </div>
);
