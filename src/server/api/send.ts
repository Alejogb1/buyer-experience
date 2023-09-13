import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const SendEmailRequest = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const data = await resend.emails.send({
            from: '<onboarding@audiencia.dev>',
            to: ['marcos@salesforce.com'],
            subject: 'Zenrows',
            react: EmailTemplate({ Name: 'John' }),
        });

        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
};