module.exports = {
    overrides: [
        {
            files: ["*.{js,ts}"],
            extends: ["./rules/jsdoc.js"],
            plugins: ["jsdoc"]
        }
    ]
}
