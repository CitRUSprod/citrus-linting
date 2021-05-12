module.exports = {
    root: true,
    extends: ["./rules/javascript.cjs"],
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 2020
    },
    env: {
        browser: true,
        node: true
    }
}
