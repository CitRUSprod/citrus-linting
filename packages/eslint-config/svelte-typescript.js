module.exports = {
    overrides: [
        {
            files: ["*.svelte"],
            extends: ["./rules/typescript", "./rules/svelte"],
            parser: "svelte-eslint-parser",
            parserOptions: {
                parser: "@typescript-eslint/parser",
                project: "./tsconfig.eslint.json",
                extraFileExtensions: [".svelte"]
            },
            plugins: ["@typescript-eslint", "svelte"]
        }
    ]
}
