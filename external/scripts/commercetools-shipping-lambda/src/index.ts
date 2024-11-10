// external/scripts/commercetools-algolia-daily-price-sync-aws-lambda/src/index.ts

import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from "aws-lambda";

// Version 1.0.1
// This version introduces updates to the handler logic.

export const handler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
    console.log("Event:", JSON.stringify(event, null, 2));

    // Example of added functionality in version 1.0.1
    const responseMessage = "Version 4.0.2: Updated Lambda function code has lots of new features available";

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: responseMessage, // New message indicating the version

            event: event,
        }),
    };
};

