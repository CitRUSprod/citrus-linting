module.exports = {
    overrides: [
        {
            files: "*.svelte",
            options: {
                plugins: [require("prettier-plugin-svelte")],
                parser: "svelte",
                svelteSortOrder: "options-scripts-markup-styles",
                svelteStrictMode: false,
                svelteAllowShorthand: true,
                svelteIndentScriptAndStyle: true
            }
        }
    ]
}
