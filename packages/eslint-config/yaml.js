module.exports = {
    overrides: [
        {
            files: ["*.yaml", "*.yml"],
            extends: ["./rules/yaml.js"],
            parser: "yaml-eslint-parser",
            plugins: ["yml"]
        }
    ]
}
