module.exports = {
    overrides: [
        {
            files: ["*.{js,ts}"],
            extends: ["./rules/jsdoc"],
            plugins: ["jsdoc"]
        }
    ]
}
