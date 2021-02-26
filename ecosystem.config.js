const _ = require('pm2')
module.exports = {
  apps : [{
    name: "heeloo56",
    script: "./index.js",
    instances: "1",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
