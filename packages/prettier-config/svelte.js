import prettierPluginSvelte from "prettier-plugin-svelte"

export default {
    overrides: [
        {
            files: "*.svelte",
            options: {
                plugins: [prettierPluginSvelte],
                parser: "svelte",
                svelteSortOrder: "options-scripts-markup-styles",
                svelteStrictMode: false,
                svelteAllowShorthand: true,
                svelteIndentScriptAndStyle: true
            }
        }
    ]
}
