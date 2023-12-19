import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";
import { BigQuery } from"@google-cloud/bigquery"
import keyjsonPath from "../../../utils/key.json"

export const BigQueryRouter = createTRPCRouter({
    
    getDomains: publicProcedure
        .query(async () => {
            const query = `
            SELECT * FROM \`modular-hulling-286301.salesmeetings_index.197_competitors\` LIMIT 1000
        `;
        const options = {
            keyFilename: "/Users/alejo/Documents/GitHub/buyer-experience/src/utils/key.json",
            query: query,
            projectId: process.env.PROJECT_ID,
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
            console.log( `-----BEGIN PRIVATE KEY-----${process.env.GOOGLE_PRIVATE_KEY}-----END PRIVATE KEY-----`)
            const options = {
                projectId: process.env.PROJECT_ID,
                credentials : {
                    client_email: process.env.GOOGLE_CLIENT_EMAIL,
                    private_key: process.env.GOOGLE_PRIVATE_KEY
                },
/*                     keyFilename: "/Users/alejo/Documents/GitHub/buyer-experience/src/utils/key.json",
 */                query: query,
            };
            console.log(1)
            const bigquery = new BigQuery(options);
            console.log(2)
            const [job] = await bigquery.createQueryJob(options);
            console.log(3)
            const [rows] = await job.getQueryResults();
    
            console.log("rows: ", rows)
    
            const data = rows.map((row:any) => row.fieldname);
    
            return rows
        })
})