module.exports = {
    apps: [{
      name: 'landing_page',
      script: 'index.html',
      watch: '.',
      watch: false,
      error_file: './log/errLog/err.log',
      out_file: './log/outLog/out.log',
    }]
  }