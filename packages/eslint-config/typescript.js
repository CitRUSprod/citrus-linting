module.exports = {
    overrides: [
        {
            files: ["*.ts?(x)"],
            extends: ["./rules/typescript"],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                project: "./tsconfig.json"
            },
            plugins: ["@typescript-eslint"]
        }
    ]
}
