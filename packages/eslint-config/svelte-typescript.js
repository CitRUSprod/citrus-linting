import typescriptEslint from "typescript-eslint"
import svelteParser from "svelte-eslint-parser"
import svelte from "eslint-plugin-svelte"

import baseRules from "./rules/base.js"
import typescriptRules from "./rules/typescript.js"
import svelteRules from "./rules/svelte.js"

export default [
    {
        files: ["**/*.svelte", "**/*.svelte.ts"],
        plugins: { "@typescript-eslint": typescriptEslint.plugin, svelte },
        languageOptions: {
            parser: svelteParser,
            parserOptions: {
                parser: typescriptEslint.parser,
                project: "./tsconfig.eslint.json",
                extraFileExtensions: [".svelte"]
            }
        },
        rules: {
            ...baseRules,
            ...typescriptRules,
            ...svelteRules
        }
    }
]
