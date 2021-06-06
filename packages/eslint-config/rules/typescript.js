module.exports = {
    rules: {
        /*
            Best Practices
        */
        "@typescript-eslint/adjacent-overload-signatures": 2,
        "@typescript-eslint/await-thenable": 2,
        "@typescript-eslint/ban-ts-comment": [2],
        "@typescript-eslint/ban-types": [2],
        "@typescript-eslint/class-literal-property-style": [2],
        "@typescript-eslint/consistent-type-assertions": [2],
        "default-param-last": 0,
        "@typescript-eslint/default-param-last": 2,
        "dot-notation": 0,
        "@typescript-eslint/dot-notation": [2],
        "@typescript-eslint/method-signature-style": [2, "method"],
        "@typescript-eslint/no-base-to-string": [2],
        "@typescript-eslint/no-confusing-void-expression": [2, { ignoreArrowShorthand: true }],
        "no-duplicate-imports": 0,
        "@typescript-eslint/no-duplicate-imports": [2, { includeExports: true }],
        // "@typescript-eslint/no-dynamic-delete": 2,
        // "no-empty-function": 0,
        // "@typescript-eslint/no-empty-function": [2],
        "@typescript-eslint/no-empty-interface": [2],
        // "@typescript-eslint/no-explicit-any": [2],
        "@typescript-eslint/no-extraneous-class": [2],
        // "@typescript-eslint/no-floating-promises": [2],
        "@typescript-eslint/no-for-in-array": 2,
        "@typescript-eslint/no-implicit-any-catch": [2, { allowExplicitAny: true }],
        "no-implied-eval": 0,
        "@typescript-eslint/no-implied-eval": 2,
        "@typescript-eslint/no-inferrable-types": [2],
        "no-invalid-this": 0,
        "@typescript-eslint/no-invalid-this": [2],
        "@typescript-eslint/no-invalid-void-type": [2, { allowAsThisParameter: true }],
        "no-loop-func": 0,
        "@typescript-eslint/no-loop-func": 2,
        // "no-magic-numbers": 0,
        // "@typescript-eslint/no-magic-numbers": [2],
        "@typescript-eslint/no-misused-new": 2,
        "@typescript-eslint/no-misused-promises": [2],
        // "@typescript-eslint/no-namespace": [2],
        // "no-redeclare": 0,
        // "@typescript-eslint/no-redeclare": [2],
        "@typescript-eslint/no-require-imports": 2,
        // "@typescript-eslint/no-this-alias": [2],
        "no-throw-literal": 0,
        "@typescript-eslint/no-throw-literal": 2,
        "@typescript-eslint/no-unnecessary-condition": [2, { allowConstantLoopConditions: true }],
        "@typescript-eslint/no-unnecessary-qualifier": 2,
        "@typescript-eslint/no-unnecessary-type-arguments": 2,
        "@typescript-eslint/no-unnecessary-type-assertion": [2],
        "@typescript-eslint/no-unnecessary-type-constraint": 2,
        "no-unused-expressions": 0,
        "@typescript-eslint/no-unused-expressions": [2],
        "no-useless-constructor": 0,
        "@typescript-eslint/no-useless-constructor": 2,
        "@typescript-eslint/no-var-requires": 2,
        "@typescript-eslint/non-nullable-type-assertion-style": 2,
        "@typescript-eslint/prefer-as-const": 2,
        // "@typescript-eslint/prefer-enum-initializers": 2,
        "@typescript-eslint/prefer-function-type": 2,
        "@typescript-eslint/prefer-includes": 2,
        "@typescript-eslint/prefer-literal-enum-member": 2,
        // "@typescript-eslint/prefer-namespace-keyword": 2,
        "@typescript-eslint/prefer-nullish-coalescing": [2],
        "@typescript-eslint/prefer-optional-chain": 2,
        "@typescript-eslint/prefer-readonly": [2],
        "@typescript-eslint/prefer-reduce-type-parameter": 2,
        "@typescript-eslint/prefer-regexp-exec": 2,
        "@typescript-eslint/prefer-string-starts-ends-with": 2,
        // "@typescript-eslint/prefer-ts-expect-error": 2,
        // "@typescript-eslint/promise-function-async": [2],
        // "@typescript-eslint/require-array-sort-compare": [2],
        // "require-await": 0,
        // "@typescript-eslint/require-await": 2,
        "@typescript-eslint/restrict-plus-operands": [2, { checkCompoundAssignments: true }],
        "@typescript-eslint/restrict-template-expressions": [
            2,
            {
                allowNumber: true,
                allowBoolean: true,
                allowNullable: true
            }
        ],
        "no-return-await": 0,
        "@typescript-eslint/return-await": [2, "never"],
        // "@typescript-eslint/strict-boolean-expressions": [2],
        // "@typescript-eslint/switch-exhaustiveness-check": 2,
        "@typescript-eslint/triple-slash-reference": [2, { types: "prefer-import" }],
        "@typescript-eslint/unbound-method": [2, { ignoreStatic: true }],

        /*
            Possible Errors
        */
        "no-dupe-class-members": 0,
        "@typescript-eslint/no-dupe-class-members": 2,
        "no-extra-parens": 0,
        "@typescript-eslint/no-extra-parens": [2],
        // "no-extra-semi": 0,
        // "@typescript-eslint/no-extra-semi": 2,
        "no-loss-of-precision": 0,
        "@typescript-eslint/no-loss-of-precision": 2,
        "@typescript-eslint/no-non-null-asserted-optional-chain": 2,
        // "@typescript-eslint/no-unsafe-argument": 2,
        // "@typescript-eslint/no-unsafe-assignment": 2,
        // "@typescript-eslint/no-unsafe-call": 2,
        // "@typescript-eslint/no-unsafe-member-access": 2,
        "@typescript-eslint/no-unsafe-return": 2,
        // "@typescript-eslint/prefer-readonly-parameter-types": [2],

        /*
            Stylistic Issues
        */
        "@typescript-eslint/array-type": [2, { default: "generic" }],
        "@typescript-eslint/ban-tslint-comment": 2,
        "brace-style": 0,
        "@typescript-eslint/brace-style": [2],
        "comma-dangle": 0,
        "@typescript-eslint/comma-dangle": [2],
        "comma-spacing": 0,
        "@typescript-eslint/comma-spacing": [2],
        "@typescript-eslint/consistent-indexed-object-style": [2],
        "@typescript-eslint/consistent-type-definitions": [2],
        // "@typescript-eslint/consistent-type-imports": [2],
        // "@typescript-eslint/explicit-function-return-type": [2],
        "@typescript-eslint/explicit-member-accessibility": [2],
        // "@typescript-eslint/explicit-module-boundary-types": [2],
        "func-call-spacing": 0,
        "@typescript-eslint/func-call-spacing": [2],
        indent: 0,
        "@typescript-eslint/indent": [2, 4, { SwitchCase: 1 }],
        "keyword-spacing": 0,
        "@typescript-eslint/keyword-spacing": [2],
        "lines-between-class-members": 0,
        "@typescript-eslint/lines-between-class-members": [
            2,
            "always",
            { exceptAfterSingleLine: true }
        ],
        "@typescript-eslint/member-delimiter-style": [
            2,
            {
                multiline: {
                    delimiter: "none"
                },
                singleline: {
                    delimiter: "comma"
                }
            }
        ],
        "@typescript-eslint/member-ordering": [
            2,
            {
                default: [
                    "private-field",
                    "protected-field",
                    "public-field",
                    "constructor",
                    "private-method",
                    "protected-method",
                    "public-method"
                ]
            }
        ],
        "no-array-constructor": 0,
        "@typescript-eslint/no-array-constructor": 2,
        "@typescript-eslint/no-confusing-non-null-assertion": 2,
        "@typescript-eslint/no-extra-non-null-assertion": 2,
        // "@typescript-eslint/no-non-null-assertion": 2,
        "@typescript-eslint/no-parameter-properties": [2],
        // "@typescript-eslint/no-type-alias": [2],
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": [2],
        "object-curly-spacing": 0,
        "@typescript-eslint/object-curly-spacing": [2, "always"],
        "@typescript-eslint/prefer-for-of": 2,
        quotes: 0,
        "@typescript-eslint/quotes": [2, "double", { allowTemplateLiterals: true }],
        semi: 0,
        "@typescript-eslint/semi": [2, "never"],
        // "@typescript-eslint/sort-type-union-intersection-members": [2],
        "space-before-function-paren": 0,
        "@typescript-eslint/space-before-function-paren": [
            2,
            { anonymous: "never", named: "never", asyncArrow: "always" }
        ],
        "space-infix-ops": 0,
        "@typescript-eslint/space-infix-ops": [2],
        "@typescript-eslint/type-annotation-spacing": [2],
        // "@typescript-eslint/typedef": [2],

        /*
            Variables
        */
        // "init-declarations": 0,
        // "@typescript-eslint/init-declarations": [2],
        camelcase: 0,
        "no-underscore-dangle": 0,
        "@typescript-eslint/naming-convention": [
            2,
            {
                selector: "default",
                format: ["camelCase"]
            },
            {
                selector: "memberLike",
                modifiers: ["private"],
                format: ["camelCase"],
                leadingUnderscore: "require"
            },
            {
                selector: "memberLike",
                modifiers: ["protected"],
                format: ["camelCase"],
                leadingUnderscore: "require"
            },
            {
                selector: "typeLike",
                format: ["PascalCase"]
            },
            {
                selector: "enumMember",
                format: ["PascalCase"]
            }
        ],
        "no-shadow": 0,
        "@typescript-eslint/no-shadow": [
            2,
            {
                builtinGlobals: true,
                hoist: "never",
                allow: ["name", "status", "length", "open", "close"]
            }
        ],
        "no-unused-vars": 0,
        "@typescript-eslint/no-unused-vars": [2, { ignoreRestSiblings: true }],
        "no-use-before-define": 0,
        "@typescript-eslint/no-use-before-define": [2]
        // "@typescript-eslint/unified-signatures": 2
    }
}
