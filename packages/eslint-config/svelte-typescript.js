module.exports = {
    overrides: [
        {
            files: ["*.svelte"],
            extends: ["./rules/svelte", "./rules/typescript"],
            parser: "svelte-eslint-parser",
            parserOptions: {
                parser: "@typescript-eslint/parser",
                project: "./tsconfig.json",
                extraFileExtensions: [".svelte"]
            },
            plugins: ["@ota-meshi/svelte", "@typescript-eslint"]
        }
    ]
}
