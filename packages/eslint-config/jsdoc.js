module.exports = {
    overrides: [
        {
            files: ["*.[jt]s?(x)"],
            extends: ["./rules/jsdoc"],
            plugins: ["jsdoc"]
        }
    ]
}
