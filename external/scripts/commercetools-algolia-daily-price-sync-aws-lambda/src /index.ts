// external/scripts/commercetools-algolia-daily-price-sync-aws-lambda/src/index.ts

import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from "aws-lambda";

export const handler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
    console.log("Event:", JSON.stringify(event, null, 2));

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello from Lambda!",
            event: event,
        }),
    };
};
