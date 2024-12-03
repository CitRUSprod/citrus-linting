const typescriptEslint = require("typescript-eslint")
const svelteParser = require("svelte-eslint-parser")
const svelte = require("eslint-plugin-svelte")

const baseRules = require("./rules/base")
const typescriptRules = require("./rules/typescript")
const svelteRules = require("./rules/svelte")

module.exports = [
    {
        files: ["**/*.svelte"],
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
