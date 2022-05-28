module.exports = {
    rules: {
        /*
            Best Practices
        */
        "accessor-pairs": [2],
        "array-callback-return": [2, { allowImplicit: true, checkForEach: true }],
        // "block-scoped-var": 2,
        // "class-methods-use-this": [2],
        // complexity: [2],
        // "consistent-return": [2],
        curly: [2],
        // "default-case": [2],
        "default-case-last": 2,
        "default-param-last": 2,
        "dot-location": [2, "property"],
        "dot-notation": [2],
        eqeqeq: [2],
        "grouped-accessor-pairs": [2, "getBeforeSet"],
        "guard-for-in": 2,
        // "max-classes-per-file": [2],
        "no-alert": 2,
        "no-caller": 2,
        "no-case-declarations": 2,
        "no-constructor-return": 2,
        "no-div-regex": 2,
        // "no-else-return": [2],
        // "no-empty-function": [2],
        "no-empty-pattern": 2,
        // "no-eq-null": 2,
        "no-eval": [2],
        "no-extend-native": [2],
        "no-extra-bind": 2,
        // "no-extra-label": 2,
        "no-fallthrough": [2],
        "no-floating-decimal": 2,
        "no-global-assign": [2],
        // "no-implicit-coercion": [2],
        // "no-implicit-globals": [2],
        "no-implied-eval": 2,
        "no-invalid-this": [2],
        "no-iterator": 2,
        "no-labels": [2],
        "no-lone-blocks": 2,
        "no-loop-func": 2,
        // "no-magic-numbers": [2],
        "no-multi-spaces": [2],
        "no-multi-str": 2,
        "no-new": 2,
        "no-new-func": 2,
        "no-new-wrappers": 2,
        "no-nonoctal-decimal-escape": 2,
        "no-octal": 2,
        "no-octal-escape": 2,
        "no-param-reassign": [2],
        "no-proto": 2,
        // "no-redeclare": [2],
        // "no-restricted-properties": [2],
        "no-return-assign": [2],
        "no-return-await": 2,
        "no-script-url": 2,
        "no-self-assign": [2],
        "no-self-compare": 2,
        "no-sequences": [2],
        "no-throw-literal": 2,
        "no-unmodified-loop-condition": 2,
        "no-unused-expressions": [2],
        // "no-unused-labels": 2,
        "no-useless-call": 2,
        "no-useless-catch": 2,
        "no-useless-concat": 2,
        "no-useless-escape": 2,
        "no-useless-return": 2,
        "no-void": [2],
        "no-warning-comments": [2],
        "no-with": 2,
        // "prefer-named-capture-group": 2,
        "prefer-promise-reject-errors": [2],
        "prefer-regex-literals": [2, { disallowRedundantWrapping: true }],
        radix: [2, "as-needed"],
        // "require-await": 2,
        // "require-unicode-regexp": 2,
        // "vars-on-top": 2,
        "wrap-iife": [2, "inside", { functionPrototypeMethods: true }],
        yoda: [2, "never", { exceptRange: true }],

        /*
            ECMAScript 6
        */
        "arrow-body-style": [2],
        "arrow-parens": [2, "as-needed"],
        "arrow-spacing": [2],
        "constructor-super": 2,
        "generator-star-spacing": [2, { named: "after", anonymous: "neither", method: "before" }],
        "no-class-assign": 2,
        // "no-confusing-arrow": [2],
        "no-const-assign": 2,
        "no-dupe-class-members": 2,
        "no-duplicate-imports": [2, { includeExports: true }],
        "no-new-symbol": 2,
        // "no-restricted-exports": [2],
        // "no-restricted-imports": [2],
        "no-this-before-super": 2,
        "no-useless-computed-key": [2, { enforceForClassMembers: true }],
        "no-useless-constructor": 2,
        "no-useless-rename": [2],
        "no-var": 2,
        "object-shorthand": [2, "always", { avoidExplicitReturnArrows: true }],
        "prefer-arrow-callback": [2],
        "prefer-const": [2, { destructuring: "all" }],
        "prefer-destructuring": [
            2,
            {
                VariableDeclarator: { object: true, array: false },
                AssignmentExpression: { object: false, array: false }
            }
        ],
        "prefer-numeric-literals": 2,
        "prefer-rest-params": 2,
        "prefer-spread": 2,
        "prefer-template": 2,
        "require-yield": 2,
        "rest-spread-spacing": [2],
        // "sort-imports": [2],
        "symbol-description": 2,
        "template-curly-spacing": [2],
        "yield-star-spacing": [2],

        /*
            Possible Errors
        */
        "for-direction": 2,
        "getter-return": [2, { allowImplicit: true }],
        "no-async-promise-executor": 2,
        // "no-await-in-loop": 2,
        "no-compare-neg-zero": 2,
        "no-cond-assign": [2, "always"],
        // "no-console": [2],
        "no-constant-condition": [2, { checkLoops: false }],
        "no-control-regex": 2,
        "no-debugger": 2,
        "no-dupe-args": 2,
        "no-dupe-else-if": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-empty": [2, { allowEmptyCatch: true }],
        "no-empty-character-class": 2,
        "no-ex-assign": 2,
        "no-extra-boolean-cast": [2, { enforceForLogicalOperands: true }],
        "no-extra-parens": [2],
        // "no-extra-semi": 2,
        "no-func-assign": 2,
        "no-import-assign": 2,
        // "no-inner-declarations": [2],
        "no-invalid-regexp": [2],
        "no-irregular-whitespace": [2],
        "no-loss-of-precision": 2,
        "no-misleading-character-class": 2,
        "no-obj-calls": 2,
        "no-promise-executor-return": 2,
        "no-prototype-builtins": 2,
        "no-regex-spaces": 2,
        "no-setter-return": 2,
        "no-sparse-arrays": 2,
        "no-template-curly-in-string": 2,
        "no-unexpected-multiline": 2,
        "no-unreachable": 2,
        "no-unreachable-loop": [2],
        "no-unsafe-finally": 2,
        "no-unsafe-negation": [2, { enforceForOrderingRelations: true }],
        "no-unsafe-optional-chaining": [2, { disallowArithmeticOperators: true }],
        "no-useless-backreference": 2,
        // "require-atomic-updates": 2,
        "use-isnan": [2, { enforceForIndexOf: true }],
        "valid-typeof": [2, { requireStringLiterals: true }],

        /*
            Strict Mode
        */
        strict: [2],

        /*
            Stylistic Issues
        */
        "array-bracket-newline": [2, "consistent"],
        "array-bracket-spacing": [2],
        "array-element-newline": [2, "consistent"],
        "block-spacing": [2],
        "brace-style": [2],
        camelcase: [2, { properties: "never" }],
        // "capitalized-comments": [2],
        "comma-dangle": [2],
        "comma-spacing": [2],
        "comma-style": [2],
        "computed-property-spacing": [2],
        // "consistent-this": [2],
        "eol-last": [2],
        "func-call-spacing": [2],
        // "func-name-matching": [2],
        "func-names": [2, "never"],
        "func-style": [2, "declaration", { allowArrowFunctions: true }],
        "function-call-argument-newline": [2, "consistent"],
        "function-paren-newline": [2],
        // "id-denylist": [2],
        // "id-length": [2],
        // "id-match": [2],
        "implicit-arrow-linebreak": [2],
        indent: [2, 4, { SwitchCase: 1 }],
        "jsx-quotes": [2],
        "key-spacing": [2],
        "keyword-spacing": [2],
        // "line-comment-position": [2],
        "linebreak-style": [2],
        // "lines-around-comment": [2],
        "lines-between-class-members": [2, "always", { exceptAfterSingleLine: true }],
        // "max-depth": [2],
        "max-len": [2, { code: 100 }],
        // "max-lines": [2],
        // "max-lines-per-function": [2],
        // "max-nested-callbacks": [2],
        // "max-params": [2],
        // "max-statements": [2],
        // "max-statements-per-line": [2],
        // "multiline-comment-style": [2],
        "multiline-ternary": [2, "always-multiline"],
        "new-cap": [2],
        "new-parens": [2],
        "newline-per-chained-call": [2],
        "no-array-constructor": 2,
        "no-bitwise": [2],
        // "no-continue": 2,
        // "no-inline-comments": [2],
        // "no-lonely-if": 2,
        // "no-mixed-operators": [2],
        "no-mixed-spaces-and-tabs": [2],
        "no-multi-assign": [2],
        "no-multiple-empty-lines": [2, { max: 1 }],
        "no-negated-condition": 2,
        "no-nested-ternary": 2,
        "no-new-object": 2,
        // "no-plusplus": [2],
        // "no-restricted-syntax": [2],
        "no-tabs": [2],
        // "no-ternary": 2,
        "no-trailing-spaces": [2],
        "no-underscore-dangle": [2, { allowAfterThis: true, allowFunctionParams: false }],
        "no-unneeded-ternary": [2],
        "no-whitespace-before-property": 2,
        // "nonblock-statement-body-position": [2],
        "object-curly-newline": [2],
        "object-curly-spacing": [2, "always"],
        // "object-property-newline": [2],
        "one-var": [2, "never"],
        // "one-var-declaration-per-line": [2],
        "operator-assignment": [2],
        "operator-linebreak": [2, "none"],
        "padded-blocks": [2, "never"],
        "padding-line-between-statements": [
            2,
            { blankLine: "always", prev: "cjs-import", next: "*" },
            { blankLine: "always", prev: "*", next: "cjs-import" },
            { blankLine: "any", prev: "cjs-import", next: "cjs-import" },
            { blankLine: "always", prev: "cjs-export", next: "*" },
            { blankLine: "always", prev: "*", next: "cjs-export" },
            { blankLine: "any", prev: "cjs-export", next: "cjs-export" },
            { blankLine: "always", prev: "import", next: "*" },
            { blankLine: "always", prev: "*", next: "import" },
            { blankLine: "any", prev: "import", next: "import" },
            { blankLine: "always", prev: "export", next: "*" },
            { blankLine: "always", prev: "*", next: "export" },
            { blankLine: "any", prev: "export", next: "export" },
            { blankLine: "always", prev: "multiline-block-like", next: "*" },
            { blankLine: "always", prev: "*", next: "multiline-block-like" }
        ],
        "prefer-exponentiation-operator": 2,
        "prefer-object-spread": 2,
        "quote-props": [2, "as-needed"],
        quotes: [2, "double", { allowTemplateLiterals: true }],
        semi: [2, "never"],
        "semi-spacing": [2],
        // "semi-style": [2],
        // "sort-keys": [2],
        // "sort-vars": [2],
        "space-before-blocks": [2],
        "space-before-function-paren": [
            2,
            { anonymous: "never", named: "never", asyncArrow: "always" }
        ],
        "space-in-parens": [2],
        "space-infix-ops": [2],
        "space-unary-ops": [2],
        "spaced-comment": [2, "always", { markers: ["/"] }],
        "switch-colon-spacing": [2],
        "template-tag-spacing": [2],
        "unicode-bom": [2],
        // "wrap-regex": 2,

        /*
            Variables
        */
        // "init-declarations": [2],
        "no-delete-var": 2,
        // "no-label-var": 2,
        // "no-restricted-globals": [2],
        "no-shadow": [
            2,
            {
                builtinGlobals: true,
                hoist: "never",
                allow: ["name", "status", "length", "open", "close"]
            }
        ],
        "no-shadow-restricted-names": 2,
        "no-undef": [2, { typeof: true }],
        "no-undef-init": 2,
        // "no-undefined": 2,
        "no-unused-vars": [2, { ignoreRestSiblings: true, caughtErrors: "all" }],
        "no-use-before-define": [2]
    }
}
