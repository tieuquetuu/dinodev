module.exports = {
    apps: [
        {
            name: 'dinoserver',
            script: './bin/www', // --------------- our node start script here like index.js

            // ------------------------------------ watch options - begin
            watch: ['../'],
            watch_delay: 1000,
            ignore_watch: ['node_modules','src','.next'],
            watch_options: {
                followSymlinks: false,
            },
            // ------------------------------------ watch options - end

            env: {
                NODE_ENV: 'development',
                PORT: 3001,
                DEBUG: 'api:*',
                // MONGODB_URI:
                //     'mongodb://localhost:27017/collection1?readPreference=primary&ssl=false',
            },
            env_production: {
                NODE_ENV: 'production',
            },
        },
    ],
    deploy: {
        production: {
            // user: "SSH_USERNAME",
            // host: "SSH_HOSTMACHINE",
        },
    },
};