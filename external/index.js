const config = require('./config.json');

exports.handler = async (event) => {
    console.log("Environment:", config.environment);
    console.log("Running Lambda function...");

    // Example response
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello from AWS Lambda!",
            environment: config.environment,
            timestamp: new Date().toISOString()
        }),
    };
    return response;
};
