import svelteParser from "svelte-eslint-parser"
import svelte from "eslint-plugin-svelte"

import baseRules from "./rules/base.js"
import svelteRules from "./rules/svelte.js"

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
