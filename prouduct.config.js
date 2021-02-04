module.exports = {
    apps: [
        {
            name: 'stick-admin',
            // package.json에 정의된 npm run start를 실행하게 해서 PM2로 관리하게 한다.
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
            // 배포 환경에서 적용될 설정
            // pm2 start server.config.js --env production
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
