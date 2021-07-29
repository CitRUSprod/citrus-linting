module.exports = {
    overrides: [
        {
            files: ["*.json"],
            extends: ["./rules/json.js"],
            parser: "jsonc-eslint-parser",
            plugins: ["jsonc"]
        }
    ]
}
