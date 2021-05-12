module.exports = {
    overrides: [
        {
            files: ["*.svelte"],
            extends: ["./rules/typescript.cjs"],
            processor: "svelte3/svelte3",
            parser: "@typescript-eslint/parser",
            parserOptions: {
                project: ["./tsconfig.json"],
                extraFileExtensions: [".svelte"]
            },
            plugins: ["svelte3", "@typescript-eslint"],
            settings: {
                "svelte3/ignore-styles": () => true,
                "svelte3/typescript": () => require("typescript")
            },
            rules: {
                "no-multiple-empty-lines": [2, { max: 1, maxBOF: 2 }]
            }
        }
    ]
}
