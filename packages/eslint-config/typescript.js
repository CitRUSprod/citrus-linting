module.exports = {
    overrides: [
        {
            files: ["*.ts"],
            extends: ["./rules/typescript.cjs"],
            parser: "@typescript-eslint/parser",
            plugins: ["@typescript-eslint"],
            parserOptions: {
                project: "./tsconfig.json"
            }
        }
    ]
}
