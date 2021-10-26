module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  ignorePatterns: [".next/**"],
  rules: {
    "react/jsx-props-no-spreading": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-filename-extension": 0,
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,
    "linebreak-style": ["error", "windows"],
    "prettier/prettier": "error",
    quotes: ["error", "single"],
  },
};
