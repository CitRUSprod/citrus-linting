const typescriptEslint = require("typescript-eslint")

const baseRules = require("./rules/base")
const typescriptRules = require("./rules/typescript")

module.exports = [
    {
        files: ["**/*.ts"],
        plugins: { "@typescript-eslint": typescriptEslint.plugin },
        languageOptions: {
            parser: typescriptEslint.parser,
            parserOptions: {
                project: ["./tsconfig.json", "./{apps,packages}/*/tsconfig.json"]
            }
        },
        rules: {
            ...baseRules,
            ...typescriptRules
        }
    }
]
