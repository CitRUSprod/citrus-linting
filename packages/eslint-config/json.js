module.exports = {
    overrides: [
        {
            files: ["*json?([c5])"],
            extends: ["./rules/json"],
            parser: "jsonc-eslint-parser",
            plugins: ["jsonc"]
        }
    ]
}
