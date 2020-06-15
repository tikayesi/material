import bunyan from "bunyan";

export const log = bunyan.createLogger({
    name: 'hello-world-db',
    streams: [
        {
            level: 'info',
            stream: process.stdout
        },
        {
            level: 'error',
            path: '/Users/edwardsuwirya/Downloads/myapp-error.log'
        }
    ],
    level: 'info'
});