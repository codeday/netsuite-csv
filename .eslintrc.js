module.exports = {
  extends: '@codeday',

  rules: {
    'import/no-missing-require': ['off'],
    'import/no-unresolved': ['off'],
    'require-jsdoc': ['off'],
    'import/prefer-default-export': ['off'],
  },

  overrides: [
    {
      files: [
        "test/*.test.js",
      ],
      env: {
        jest: true
      }
    }
  ]
};
