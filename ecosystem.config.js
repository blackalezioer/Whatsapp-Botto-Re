const _ = require('pm2')
module.exports = {
  apps : [{
    name: "heeloo56",
    script: "./index.js",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
