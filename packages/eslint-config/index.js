import globals from "globals"
import stylistic from "@stylistic/eslint-plugin"
import importPlugin from "eslint-plugin-import-x"

import baseRules from "./rules/base.js"

export default [
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es6
            }
        },
        plugins: {
            "@stylistic": stylistic,
            import: importPlugin
        }
    },
    {
        files: ["**/*.?([cm])js"],
        rules: {
            ...baseRules
        }
    }
]
