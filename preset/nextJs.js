/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "next/core-web-vitals",
    "prettier",
  ],
  plugins: ["use-encapsulation"],
  rules: {
    complexity: ["error", 10],
    "use-encapsulation/prefer-custom-hooks": ["error"],
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
    {
      files: ["*.stories.tsx"],
      rules: {
        "use-encapsulation/prefer-custom-hooks": ["off"],
      },
    },
  ],
};
