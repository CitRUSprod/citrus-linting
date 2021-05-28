module.exports = {
    plugins: ["stylelint-scss"],
    rules: {
        "scss/at-each-key-value-single-line": true,
        "scss/at-else-closing-brace-newline-after": "always-last-in-chain",
        "scss/at-else-closing-brace-space-after": "always-intermediate",
        "scss/at-else-empty-line-before": "never",
        "scss/at-else-if-parentheses-space-before": "always",
        "scss/at-extend-no-missing-placeholder": true,
        "scss/at-function-named-arguments": "never",
        "scss/at-function-parentheses-space-before": "never",
        // "scss/at-function-pattern": "",
        "scss/at-if-closing-brace-newline-after": "always-last-in-chain",
        "scss/at-if-closing-brace-space-after": "always-intermediate",
        "scss/at-if-no-null": true,
        "scss/at-import-no-partial-leading-underscore": true,
        "scss/at-import-partial-extension": "never",
        // "scss/at-import-partial-extension-blacklist": [],
        // "scss/at-import-partial-extension-whitelist": [],
        "scss/at-mixin-argumentless-call-parentheses": "always",
        "scss/at-mixin-named-arguments": "never",
        "scss/at-mixin-parentheses-space-before": "never",
        // "scss/at-mixin-pattern": "",
        "scss/at-rule-conditional-no-parentheses": true,
        "at-rule-no-unknown": null,
        "scss/at-rule-no-unknown": true,
        "scss/dollar-variable-colon-newline-after": "always-multi-line",
        "scss/dollar-variable-colon-space-after": "always",
        "scss/dollar-variable-colon-space-before": "never",
        // "scss/dollar-variable-default": true,
        "scss/dollar-variable-empty-line-after": [
            "always",
            { except: ["last-nested", "before-dollar-variable"] }
        ],
        "scss/dollar-variable-empty-line-before": [
            "always",
            { except: ["first-nested", "after-dollar-variable"] }
        ],
        // "scss/dollar-variable-first-in-block": true,
        // "scss/dollar-variable-no-missing-interpolation": true,
        // "scss/dollar-variable-pattern": "",
        // "scss/percent-placeholder-pattern": "",
        // "scss/double-slash-comment-empty-line-before": "always",
        // "scss/double-slash-comment-inline": "always",
        "scss/double-slash-comment-whitespace-inside": "always",
        "scss/comment-no-empty": true,
        // "scss/comment-no-loud": true,
        "scss/declaration-nested-properties": "never",
        // "scss/declaration-nested-properties-no-divided-groups": true,
        // "scss/dimension-no-non-numeric-values": true,
        // "scss/function-color-relative": true,
        "scss/function-quote-no-quoted-strings-inside": true,
        "scss/function-unquote-no-unquoted-strings-inside": true,
        // "scss/map-keys-quotes": "always",
        // "scss/media-feature-value-dollar-variable": "always",
        "scss/operator-no-newline-after": true,
        // "scss/operator-no-newline-before": true,
        "scss/operator-no-unspaced": true,
        // "scss/partial-no-import": true,
        // "scss/selector-nest-combinators": "always",
        "scss/selector-no-redundant-nesting-selector": true,
        "scss/selector-no-union-class-name": true,
        // "scss/no-dollar-variables": true,
        "scss/no-duplicate-dollar-variables": true,
        "scss/no-duplicate-mixins": true
        // "scss/no-global-function-names": true,
    }
}
