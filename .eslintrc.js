module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
    "react/require-default-props": "off",
    "no-param-reassign": [2, { props: false }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  globals: {
    JSX: "readonly",
  },
};
