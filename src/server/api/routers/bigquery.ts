import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";
import { BigQuery } from"@google-cloud/bigquery"
import keyjsonPath from "../../../utils/key.json"
import { Processor } from "postcss";

export const BigQueryRouter = createTRPCRouter({
    
    getDomains: publicProcedure
        .query(async () => {
            const query = `
            SELECT * FROM \`modular-hulling-286301.salesmeetings_index.197_competitors\` LIMIT 1000
        `;
        const options = {
            projectId: process.env.PROJECT_ID,
            credentials : {
                client_id: process.env.GOOGLE_CLIENT_ID,
                client_email: "my-bigquery-sa@modular-hulling-286301.iam.gserviceaccount.com",    
                private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCPZ+ol7EBJac3I\nexAqOXzr8NDsBl7G5+9ckMT9FH0kf3KllROn1fB0/DgwnocwYezZvN7rU1FvrbNc\nkrMpoCOZM72KBYOpkBS/KIhcaC8QZsfqjT5vlYiT8aWk2vl7yvKLS7+kQvlyRcYk\n2c/9tliCGkUN50RSeSNjt4SSPVFiomao250XovF8tgce6ov+/0mn0D9i1aHIs8H3\nG3K1gQOvUvWQljvXkK/0aYWmYdTrpsunT3clm/vjjPOeKNpwFK0qH2EyCKNpaVES\n4nZENBD0kk7lQcPNcMTIccG9mRO51wS0+fW0jkTmpBExrWKQGUjNWPeV3G6/fqIr\nO1m9Aa6XAgMBAAECggEAEo9ebJ4RC+9XpNTYmL5r/pViVMnWRmQKRK6v8BlQwQKF\nsgyDSLuVrW5fT1uVH5vs7ZlWOJrF9XBDwH10FrUVJmTd6RkhmzZ8mOkEDQGm5baH\ntUGmjQaLcKpbx+RXWcBAd+rL2NSaOEHzjR1rn+iTt/LycQQ3gX0QKX28+Lha6irt\nCUhCVSteSve3rKRBg/L+W1I97sLrXc+dMdyTNUlRnR9UHTudNh8XD5WnVXTBqTev\nUYbHZtPdJ0/8yg+hWbVyp+osE0/Ohd9loaVtD+t6Y0InaAGXJBd3ntxgliPya4wd\n2jEXJur2b1T/g2f8pK/TRCLHRjm6y5+2/crRCHYfMQKBgQDBQCi9Dca3wrufJ1ho\ns8P3VI9ppZSAKBN6/08NHh+5oO1dYhj1dN1rV7q5g9F3bLdT7MefESYAlnVRzgPI\n3Z9PkHwKwfJmiRh2uRK89MC4mWVbKb1Sehn8Gt5/EeQpLga6JMPJ87QQSmsoAhMY\nsQEeQh4ldHVTaFobIYBQ7pbWLQKBgQC9+HHQuTlhzCWqxzjbJ1xUuvBktZAFqEM6\nL9KFhxDrNmOgIfEoom9Dcd0g6WW3E1PlT77Oje8CoUOxr+XyUu6vOvazDOnvrnVT\nxRrqOWbXN5r5V2e8Tl7xDRHby904ysGUrhAaAZ5YRqT+54tRJ7J0q8OfF+U8Ixgi\nbXTOo1f2UwKBgBfO2bYA3nyBJzBCXqf3jasI5eo0Fgl75np+vbR2A56Q7u1USpLi\n5Ox2kHCOht3ZrPRP9X/pUu87mhSL9vdmJlxdBoskvcJYHYVy45YX6S5U56HFkKd6\nl3zxqnupLpzMKNQB94UH2yUupej16HhgRiz+JEyk/ldaQc+Z3v8Zhce5AoGBAJdh\nY1DwSMml5F4yYxxAQVNDpEycYigf7XJwqVG+T70fmkQAyCuZRRB5q7yOQH+i5zfU\nVDhE4jE2ULtHb/WqIImCcxQ7Ni/I1bXrW4dKNqlJpjULcZ6c1QtBXvnHeoHHEHtq\nOWp/3654nQKDgIErIQnX1grw/7rsPE8y6eHASFgBAoGBAKrtAu4surS1TpPBneWo\ncyjFqko6jlIvkDfM7iChtUXOqHKk4/dhGzBYAKm2iPFKuxWT/fbrjxJ92OKAKmdz\nDMqurZlK2jcg4iwyatfOb7GU3tFWt5XP6o2ioYcMGpKFOxxl6PKXQVuPktxOJfB4\n16JOTxfumHRn6kaLxz7m1TPg\n-----END PRIVATE KEY-----\n",
            },            
            query: query,
        };
        console.log(1)
        const bigquery = new BigQuery(options);
        console.log(2)
        const [job] = await bigquery.createQueryJob(options);
        console.log(3)
        const [rows] = await job.getQueryResults();

        console.log("rows: ", rows)

        const data = rows.map((row:any) => row.fieldname);

        console.log(data)
        return rows
        }),
    getKeywords: publicProcedure
        .input(z.object({ slug: z.string() }))
        
        .query(async ({ctx, input}) =>  {
            const query = `
            SELECT * FROM \`modular-hulling-286301.salesmeetings.${input.slug}\` LIMIT 1000
            `;
            const options = {
                projectId: process.env.PROJECT_ID,
                credentials : {
                    client_id: process.env.GOOGLE_CLIENT_ID,
                    client_email: "my-bigquery-sa@modular-hulling-286301.iam.gserviceaccount.com",    
                    private_key: process.env.GOOGLE_PRIVATE_KEY,
                },
                query: query,
            };
            console.log(1)
            const bigquery = new BigQuery(options);
            console.log(2)
            const [job] = await bigquery.createQueryJob(options);
            console.log(3)
            const [rows] = await job.getQueryResults();
        
            const data = rows.map((row:any) => row.fieldname);
    
            return rows
        })
})