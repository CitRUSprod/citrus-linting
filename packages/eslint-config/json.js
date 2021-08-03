module.exports = {
    overrides: [
        {
            files: ["*.json"],
            extends: ["./rules/json"],
            parser: "jsonc-eslint-parser",
            plugins: ["jsonc"]
        }
    ]
}
