import svelteParser from "svelte-eslint-parser"
import svelte from "eslint-plugin-svelte"

import baseRules from "./rules/base"
import svelteRules from "./rules/svelte"

export default [
    {
        files: ["**/*.svelte", "**/*.svelte.js"],
        plugins: { svelte },
        languageOptions: {
            parser: svelteParser
        },
        rules: {
            ...baseRules,
            ...svelteRules
        }
    }
]
