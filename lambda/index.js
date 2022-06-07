const lambda = async (event, context) => {
    try {
        // logging info about received event, context and environment variables
        logReceivedEvent(event);
        logCurrentContext(context);
        logEnvironmentVariables();

        const min = 1;
        const max = 100;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        const response = `Generated number ${randomNumber}`;

        console.log('Remaining time: ', context.getRemainingTimeInMillis());
        return response;
    } catch (error) {
        console.error(error);
    }
}

const logReceivedEvent = (receivedEvent) => {
    console.log(`Received event ${JSON.stringify(receivedEvent)}`);
};

const logCurrentContext = (currentContext) => {
    console.log(`Current context ${JSON.stringify(currentContext)}`);
}

const logEnvironmentVariables = () => {
    console.log(`Current environment variables ${JSON.stringify(process.env)}`);
}

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

exports.lambda = lambda;