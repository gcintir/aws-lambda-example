const lambda = async (event) => {
    console.log(`Received event ${JSON.stringify(event)}`);
    try {
        const min = 1;
        const max = 100;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        const response = `Generated number ${randomNumber}`;

        return response;
    } catch (error) {
        console.error(error);
    }
}

exports.lambda = lambda;