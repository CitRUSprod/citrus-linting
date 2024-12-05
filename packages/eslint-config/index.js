import globals from "globals"

import baseRules from "./rules/base.js"

export default [
    {
        languageOptions: {
            ecmaVersion: 2024,
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es6
            }
        }
    },
    {
        files: ["**/*.?([cm])js"],
        rules: {
            ...baseRules
        }
    }
]
