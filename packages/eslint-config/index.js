const globals = require("globals")

const baseRules = require("./rules/base")

module.exports = [
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
