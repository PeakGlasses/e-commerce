const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Peaks Sunglasses API Documentation",
        version: "1.0.0",
        description:
            "API documentation for the ecommerce platform, including all endpoints required for products, users, orders, and more.",
        contact: {
            name: "Setu Potnis",
            email: "spotnis.work@gmail.com",
        },
    },
    servers: [
        {
            url: "http://localhost:8000",
            description: "Development server",
        },
    ],
};

export default {
    swaggerDefinition,
    apis: [
        "./src/server/App.ts",
        "./src/server/routes/ProductRoute.ts"
    ], // Paths to files containing OpenAPI annotations
};
