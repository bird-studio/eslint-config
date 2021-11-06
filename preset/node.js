/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["plugin:@typescript-eslint/recommended", "plugin:jest/recommended"],
  rules: {
    complexity: ["error", 10],
  },
  overrides: [
    {
      files: [".eslintrc.js", "*.config.js"],
      rules: {
        "no-undef": "off",
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["*.test.ts"],
      rules: {
        "@typescript-eslint/ban-ts-comment": "off",
      },
    },
  ],
};
