import typescriptEslint from "typescript-eslint"

import baseRules from "./rules/base.js"
import typescriptRules from "./rules/typescript.js"

export default [
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
