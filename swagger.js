'use strict';
import dotenv from 'dotenv';
dotenv.config();    

import swaggerUi from 'swagger-ui-express'; 
import swaggerJsdoc from 'swagger-jsdoc';

const setupSwagger = (app, serverPort) => {
    const options = {
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'Social Login Project API',
                version: '1.0.0',
                description: 'A simple API for Social Login Project',
            },
            servers: [
                {
                    url: `http://localhost:${serverPort}/socialLoginProject/api/v1`
                }
            ],
        },
        apis: ['./lib/*.js'],
    };

    const specs = swaggerJsdoc(options);
    app.use('/socialLoginProject/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}

export { setupSwagger };