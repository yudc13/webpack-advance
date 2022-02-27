module.exports = {
  // 当前运行的环境
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    "semi": ["off"],
    "quotes": ["warn", "single"]
  }
}
