module.exports = {
    overrides: [
        {
            files: ["*.ts"],
            extends: ["./rules/typescript.js"],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                project: "./tsconfig.json"
            },
            plugins: ["@typescript-eslint"]
        }
    ]
}
