const mock = '';
module.exports = {
  '/api': {
    target: mock,
    pathRewrite: {
      '^/api': '',
    },
  },

};
