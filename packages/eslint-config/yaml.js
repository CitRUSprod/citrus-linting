module.exports = {
    overrides: [
        {
            files: ["*.y?(a)ml"],
            extends: ["./rules/yaml"],
            parser: "yaml-eslint-parser",
            plugins: ["yml"]
        }
    ]
}
