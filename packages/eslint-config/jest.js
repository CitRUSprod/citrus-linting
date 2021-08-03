module.exports = {
    overrides: [
        {
            files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
            extends: ["./rules/jest"],
            plugins: ["jest"],
            env: {
                jest: true
            }
        }
    ]
}
