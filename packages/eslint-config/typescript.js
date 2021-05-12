module.exports = {
    overrides: [
        {
            files: ["*.ts"],
            extends: ["./rules/typescript.js"],
            parser: "@typescript-eslint/parser",
            plugins: ["@typescript-eslint"],
            parserOptions: {
                project: "./tsconfig.json"
            }
        }
    ]
}
