module.exports = {
    overrides: [
        {
            files: "*.svelte",
            options: {
                plugins: ["./node_modules/prettier-plugin-svelte"],
                parser: "svelte",
                svelteSortOrder: "options-scripts-markup-styles",
                svelteStrictMode: false,
                svelteAllowShorthand: true,
                svelteIndentScriptAndStyle: true
            }
        }
    ]
}
