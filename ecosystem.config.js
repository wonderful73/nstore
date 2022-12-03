
module.exports = {
  apps: [
    {
      name: 'store',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}
