module.exports = {
    overrides: [
        {
            files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
            extends: ["./rules/jest"],
            plugins: ["jest"],
            env: {
                jest: true
            }
        }
    ]
}
