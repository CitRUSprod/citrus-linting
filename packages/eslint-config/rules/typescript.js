module.exports = {
    "@typescript-eslint/adjacent-overload-signatures": 2,
    "@typescript-eslint/array-type": [2, { default: "generic" }],
    "@typescript-eslint/await-thenable": 2,
    "@typescript-eslint/ban-ts-comment": 2,
    "@typescript-eslint/ban-tslint-comment": 2,
    "@typescript-eslint/class-literal-property-style": 2,
    "class-methods-use-this": 0,
    "@typescript-eslint/class-methods-use-this": 0,
    "@typescript-eslint/consistent-generic-constructors": 2,
    "@typescript-eslint/consistent-indexed-object-style": 2,
    "consistent-return": 0,
    "@typescript-eslint/consistent-return": 2,
    "@typescript-eslint/consistent-type-assertions": 2,
    "@typescript-eslint/consistent-type-definitions": 2,
    "@typescript-eslint/consistent-type-exports": [
        2,
        { fixMixedExportsWithInlineTypeSpecifier: true }
    ],
    "@typescript-eslint/consistent-type-imports": 0,
    "default-param-last": 0,
    "@typescript-eslint/default-param-last": 2,
    "dot-notation": 0,
    "@typescript-eslint/dot-notation": 2,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-member-accessibility": 2,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "init-declarations": 0,
    "@typescript-eslint/init-declarations": 0,
    "max-params": 0,
    "@typescript-eslint/max-params": 0,
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
    "@typescript-eslint/method-signature-style": [2, "method"],
    "@typescript-eslint/naming-convention": [
        2,
        { selector: "default", format: ["camelCase"] },
        {
            selector: "memberLike",
            modifiers: ["private"],
            format: null,
            leadingUnderscore: "require"
        },
        {
            selector: "memberLike",
            modifiers: ["protected"],
            format: null,
            leadingUnderscore: "require"
        },
        { selector: ["enumMember", "typeLike"], format: ["PascalCase"] },
        { selector: "import", modifiers: ["default"], format: ["camelCase", "PascalCase"] },
        { selector: ["objectLiteralProperty", "typeProperty"], format: null }
    ],
    "no-array-constructor": 0,
    "@typescript-eslint/no-array-constructor": 2,
    "@typescript-eslint/no-array-delete": 2,
    "@typescript-eslint/no-base-to-string": 2,
    "@typescript-eslint/no-confusing-non-null-assertion": 2,
    "@typescript-eslint/no-confusing-void-expression": [2, { ignoreArrowShorthand: true }],
    "@typescript-eslint/no-deprecated": 2,
    "no-dupe-class-members": 0,
    "@typescript-eslint/no-dupe-class-members": 2,
    "@typescript-eslint/no-duplicate-enum-values": 2,
    "@typescript-eslint/no-duplicate-type-constituents": 2,
    "@typescript-eslint/no-dynamic-delete": 0,
    "no-empty-function": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-empty-object-type": 2,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-extra-non-null-assertion": 2,
    "@typescript-eslint/no-extra-semi": 0,
    "@typescript-eslint/no-extraneous-class": 2,
    "@typescript-eslint/no-floating-promises": 0,
    "@typescript-eslint/no-for-in-array": 2,
    "no-implied-eval": 0,
    "@typescript-eslint/no-implied-eval": 2,
    "@typescript-eslint/no-import-type-side-effects": 2,
    "@typescript-eslint/no-inferrable-types": 2,
    "no-invalid-this": 0,
    "@typescript-eslint/no-invalid-this": 2,
    "@typescript-eslint/no-invalid-void-type": [2, { allowAsThisParameter: true }],
    "no-loop-func": 0,
    "@typescript-eslint/no-loop-func": 2,
    "no-magic-numbers": 0,
    "@typescript-eslint/no-magic-numbers": 0,
    "@typescript-eslint/no-meaningless-void-operator": 2,
    "@typescript-eslint/no-misused-new": 2,
    "@typescript-eslint/no-misused-promises": 2,
    "@typescript-eslint/no-mixed-enums": 2,
    "@typescript-eslint/no-namespace": 0,
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": 2,
    "@typescript-eslint/no-non-null-asserted-optional-chain": 2,
    "@typescript-eslint/no-non-null-assertion": 0,
    "no-redeclare": 0,
    "@typescript-eslint/no-redeclare": 0,
    "@typescript-eslint/no-redundant-type-constituents": 2,
    "@typescript-eslint/no-require-imports": 2,
    "no-restricted-imports": 0,
    "@typescript-eslint/no-restricted-imports": 0,
    "@typescript-eslint/no-restricted-types": 0,
    "no-shadow": 0,
    "@typescript-eslint/no-shadow": [
        2,
        {
            builtinGlobals: true,
            hoist: "never",
            allow: ["name", "status", "length", "open", "close"]
        }
    ],
    "@typescript-eslint/no-this-alias": 0,
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": 2,
    "@typescript-eslint/no-unnecessary-condition": [2, { allowConstantLoopConditions: true }],
    "@typescript-eslint/no-unnecessary-parameter-property-assignment": 2,
    "@typescript-eslint/no-unnecessary-qualifier": 2,
    "@typescript-eslint/no-unnecessary-template-expression": 2,
    "@typescript-eslint/no-unnecessary-type-arguments": 2,
    "@typescript-eslint/no-unnecessary-type-assertion": 2,
    "@typescript-eslint/no-unnecessary-type-constraint": 2,
    "@typescript-eslint/no-unnecessary-type-parameters": 2,
    "@typescript-eslint/no-unsafe-argument": 0,
    "@typescript-eslint/no-unsafe-assignment": 0,
    "@typescript-eslint/no-unsafe-call": 0,
    "@typescript-eslint/no-unsafe-declaration-merging": 2,
    "@typescript-eslint/no-unsafe-enum-comparison": 2,
    "@typescript-eslint/no-unsafe-function-type": 2,
    "@typescript-eslint/no-unsafe-member-access": 0,
    "@typescript-eslint/no-unsafe-return": 0,
    "@typescript-eslint/no-unsafe-type-assertion": 0,
    "@typescript-eslint/no-unsafe-unary-minus": 2,
    "no-unused-expressions": 0,
    "@typescript-eslint/no-unused-expressions": 2,
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": [2, { ignoreRestSiblings: true, caughtErrors: "all" }],
    "no-use-before-define": 0,
    "@typescript-eslint/no-use-before-define": 2,
    "no-useless-constructor": 0,
    "@typescript-eslint/no-useless-constructor": 2,
    "@typescript-eslint/no-useless-empty-export": 2,
    "@typescript-eslint/no-wrapper-object-types": 2,
    "@typescript-eslint/non-nullable-type-assertion-style": 2,
    "no-throw-literal": 0,
    "@typescript-eslint/only-throw-error": 2,
    "@typescript-eslint/parameter-properties": 0,
    "@typescript-eslint/prefer-as-const": 2,
    "prefer-destructuring": 0,
    "@typescript-eslint/prefer-destructuring": [
        2,
        {
            VariableDeclarator: { object: true, array: false },
            AssignmentExpression: { object: false, array: false }
        }
    ],
    "@typescript-eslint/prefer-enum-initializers": 2,
    "@typescript-eslint/prefer-find": 2,
    "@typescript-eslint/prefer-for-of": 2,
    "@typescript-eslint/prefer-function-type": 2,
    "@typescript-eslint/prefer-includes": 2,
    "@typescript-eslint/prefer-literal-enum-member": 0,
    "@typescript-eslint/prefer-namespace-keyword": 0,
    "@typescript-eslint/prefer-nullish-coalescing": 2,
    "@typescript-eslint/prefer-optional-chain": 2,
    "prefer-promise-reject-errors": 0,
    "@typescript-eslint/prefer-promise-reject-errors": 2,
    "@typescript-eslint/prefer-readonly": 2,
    "@typescript-eslint/prefer-readonly-parameter-types": 0,
    "@typescript-eslint/prefer-reduce-type-parameter": 2,
    "@typescript-eslint/prefer-regexp-exec": 2,
    "@typescript-eslint/prefer-return-this-type": 2,
    "@typescript-eslint/prefer-string-starts-ends-with": 2,
    "@typescript-eslint/promise-function-async": 0,
    "@typescript-eslint/related-getter-setter-pairs": 2,
    "@typescript-eslint/require-array-sort-compare": 0,
    "require-await": 0,
    "@typescript-eslint/require-await": 0,
    "@typescript-eslint/restrict-plus-operands": [
        2,
        {
            allowAny: false,
            allowBoolean: false,
            allowNullish: false,
            allowNumberAndString: false,
            allowRegExp: false
        }
    ],
    "@typescript-eslint/restrict-template-expressions": [
        2,
        { allowAny: false, allowRegExp: false }
    ],
    "no-return-await": 0,
    "@typescript-eslint/return-await": [2, "never"],
    "@typescript-eslint/strict-boolean-expressions": 0,
    "@typescript-eslint/switch-exhaustiveness-check": 0,
    "@typescript-eslint/triple-slash-reference": [2, { types: "prefer-import" }],
    "@typescript-eslint/typedef": 0,
    "@typescript-eslint/unbound-method": [2, { ignoreStatic: true }],
    "@typescript-eslint/unified-signatures": 0,
    "@typescript-eslint/use-unknown-in-catch-callback-variable": 2
}
