import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const helloWorldHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    let response: APIGatewayProxyResult = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello World..!',
        }),
    };;

    return response;
};
