/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "next/core-web-vitals",
    "plugin:import/typescript",
    "prettier",
  ],
  plugins: ["use-encapsulation", "import"],
  rules: {
    complexity: ["error", 10],
  },
  overrides: [
    {
      files: ["*.tsx"],
      rules: {
        "use-encapsulation/prefer-custom-hooks": ["error"],
      },
    },
    {
      files: ["*.stories.tsx"],
      rules: {
        "use-encapsulation/prefer-custom-hooks": ["off"],
      },
    },
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
