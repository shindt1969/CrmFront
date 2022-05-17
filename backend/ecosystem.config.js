module.exports = {
    apps: [
        {
            name: "server",
            script: "server.js",
            merge_logs: true,
            max_restarts: 20,
            instances: 2,
            max_memory_restart: "2G",
            // cwd: "/CRMV2/backend/",
            env: {
                NODE_ENV: "development",
            },
            env_production: {
                NODE_ENV: "production",
            },
        },
    ],
};
