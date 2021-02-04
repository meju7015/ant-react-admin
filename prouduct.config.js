module.exports = {
    apps: [
        {
            name: 'stick-admin',
            script: 'yarn',
            args: 'start',
            instances: 2,
            autorestart: true,
            watch: false,
            max_memory_restart: '1G',
            // 개발 환경에서 적용될 설정
            // pm2 start server.config.js
            env: {
                HOST: '0.0.0.0',
                PORT: 5000,
                NODE_ENV: 'development'
            },
            env_production: {
                HOST: '0.0.0.0',
                PORT: 5000,
                NODE_ENV: 'production'
            },
            output: './logs/console.log',
            error: './logs/consoleError.log'
        }
    ]
}
