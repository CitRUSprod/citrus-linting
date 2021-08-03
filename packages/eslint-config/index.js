module.exports = {
    extends: ["./rules/base"],
    root: true,
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 2020
    },
    env: {
        browser: true,
        node: true,
        es6: true
    }
}
