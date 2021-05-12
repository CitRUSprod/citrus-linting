module.exports = {
    extends: ["./rules/javascript.js"],
    root: true,
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 2020
    },
    env: {
        browser: true,
        node: true
    }
}
