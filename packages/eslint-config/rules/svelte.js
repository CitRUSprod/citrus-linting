module.exports = {
    rules: {
        /*
            Possible Errors
        */
        "svelte/no-dom-manipulating": 2,
        "svelte/no-dupe-else-if-blocks": 2,
        "svelte/no-dupe-style-properties": 2,
        "svelte/no-dynamic-slot-name": 2,
        "svelte/no-export-load-in-svelte-module-in-kit-pages": 2,
        "svelte/no-not-function-handler": 2,
        "svelte/no-object-in-text-mustaches": 2,
        "svelte/no-shorthand-style-property-overrides": 2,
        "svelte/no-store-async": 2,
        "svelte/no-unknown-style-directive-property": [2],
        "svelte/require-store-callbacks-use-set-param": 2,
        "svelte/require-store-reactive-access": 2,
        "svelte/valid-compile": [2],
        "svelte/valid-prop-names-in-kit-pages": 2,

        /*
            Security Vulnerability
        */
        "svelte/no-at-html-tags": 2,
        "svelte/no-target-blank": [2],

        /*
            Best Practices
        */
        // "svelte/button-has-type": [2],
        "svelte/no-at-debug-tags": 2,
        "svelte/no-reactive-functions": 2,
        "svelte/no-reactive-literals": 2,
        "svelte/no-unused-svelte-ignore": 2,
        "svelte/no-useless-mustaches": [2],
        // "svelte/prefer-destructured-store-props": 2,
        "svelte/require-optimized-style-attribute": 2,
        "svelte/require-stores-init": 2,

        /*
            Stylistic Issues
        */
        "svelte/derived-has-same-inputs-outputs": 2,
        "svelte/first-attribute-linebreak": [2],
        "svelte/html-closing-bracket-spacing": [2],
        "svelte/html-quotes": [2],
        "svelte/html-self-closing": [2],
        indent: 0,
        "svelte/indent": [
            2,
            {
                indent: 4
            }
        ],
        // "svelte/max-attributes-per-line": [2],
        "svelte/mustache-spacing": [2],
        "svelte/no-extra-reactive-curlies": 2,
        "svelte/no-spaces-around-equal-signs-in-attribute": 2,
        "svelte/prefer-class-directive": 2,
        "svelte/prefer-style-directive": 2,
        "svelte/shorthand-attribute": [2],
        "svelte/shorthand-directive": [2],
        "svelte/sort-attributes": [2],
        "svelte/spaced-html-comment": [2],

        /*
            Extension Rules
        */
        // "svelte/no-inner-declarations": [2],
        "svelte/no-trailing-spaces": [2],

        /*
            System
        */
        "svelte/comment-directive": 2,
        "svelte/system": 2,

        /*
            [other]
        */
        "no-self-assign": 0,
        "no-undef-init": 0
    }
}
