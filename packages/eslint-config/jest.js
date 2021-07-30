module.exports = {
    overrides: [
        {
            files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
            extends: ["./rules/jest.js"],
            plugins: ["jest"],
            env: {
                jest: true
            }
        }
    ]
}
