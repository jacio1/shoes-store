export const corsOptions = {
    origin: ['http://localhost:4000'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'Authorization',
    ],
    credentials: true,
    optionSuccessStatus: 200,
};
//# sourceMappingURL=cors-options.config.js.map