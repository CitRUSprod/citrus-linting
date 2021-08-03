module.exports = {
    overrides: [
        {
            files: ["*.yaml", "*.yml"],
            extends: ["./rules/yaml"],
            parser: "yaml-eslint-parser",
            plugins: ["yml"]
        }
    ]
}
