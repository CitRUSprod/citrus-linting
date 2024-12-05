import typescriptEslint from "typescript-eslint"
import svelteParser from "svelte-eslint-parser"
import svelte from "eslint-plugin-svelte"

import baseRules from "./rules/base"
import typescriptRules from "./rules/typescript"
import svelteRules from "./rules/svelte"

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
