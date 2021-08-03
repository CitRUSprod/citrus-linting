module.exports = {
    rules: {
        /*
            Best Practices
        */
        "jest/consistent-test-it": [2, { fn: "test" }],
        "jest/expect-expect": [2],
        "jest/lowercase-name": [2, { ignore: ["describe"] }],
        // "jest/max-nested-describe": [2],
        // "jest/no-alias-methods": 2,
        "jest/no-commented-out-tests": 2,
        "jest/no-conditional-expect": 2,
        "jest/no-deprecated-functions": 2,
        "jest/no-disabled-tests": 2,
        "jest/no-done-callback": 2,
        "jest/no-duplicate-hooks": 2,
        "jest/no-export": 2,
        "jest/no-focused-tests": 2,
        // "jest/no-hooks": [2],
        "jest/no-identical-title": 2,
        // "jest/no-if": 2,
        "jest/no-interpolation-in-snapshots": 2,
        "jest/no-jasmine-globals": 2,
        "jest/no-jest-import": 2,
        // "jest/no-large-snapshots": [2],
        "jest/no-mocks-import": 2,
        // "jest/no-restricted-matchers": [2],
        "jest/no-standalone-expect": [2],
        "jest/no-test-prefixes": 2,
        "jest/no-test-return-statement": 2,
        "jest/prefer-called-with": 2,
        // "jest/prefer-expect-assertions": [2],
        "jest/prefer-hooks-on-top": 2,
        "jest/prefer-spy-on": 2,
        "jest/prefer-strict-equal": 2,
        "jest/prefer-to-be-null": 2,
        "jest/prefer-to-be-undefined": 2,
        "jest/prefer-to-contain": 2,
        "jest/prefer-to-have-length": 2,
        "jest/prefer-todo": 2,
        "jest/require-to-throw-message": 2,
        "jest/require-top-level-describe": 2,
        "@typescript-eslint/unbound-method": 0,
        "jest/unbound-method": [2, { ignoreStatic: true }],
        "jest/valid-expect-in-promise": 2,
        "jest/valid-expect": [2, { alwaysAwait: true }],
        "jest/valid-title": [2],

        /*
            Possible Errors
        */
        "jest/valid-describe": 2
    }
}