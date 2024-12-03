const svelteParser = require("svelte-eslint-parser")
const svelte = require("eslint-plugin-svelte")

const baseRules = require("./rules/base")
const svelteRules = require("./rules/svelte")

module.exports = [
    {
        files: ["**/*.svelte"],
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
