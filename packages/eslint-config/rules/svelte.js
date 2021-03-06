module.exports = {
    rules: {
        /*
            Possible Errors
        */
        "@ota-meshi/svelte/no-dupe-else-if-blocks": 2,
        "@ota-meshi/svelte/no-dupe-style-properties": 2,
        "@ota-meshi/svelte/no-dynamic-slot-name": 2,
        "@ota-meshi/svelte/no-not-function-handler": 2,
        "@ota-meshi/svelte/no-object-in-text-mustaches": 2,
        "@ota-meshi/svelte/no-shorthand-style-property-overrides": 2,
        "@ota-meshi/svelte/no-unknown-style-directive-property": [2],
        "@ota-meshi/svelte/valid-compile": [2],

        /*
            Security Vulnerability
        */
        "@ota-meshi/svelte/no-at-html-tags": 2,
        "@ota-meshi/svelte/no-target-blank": [2],

        /*
            Best Practices
        */
        // "@ota-meshi/svelte/button-has-type": [2],
        "@ota-meshi/svelte/no-at-debug-tags": 2,
        "@ota-meshi/svelte/no-unused-svelte-ignore": 2,
        "@ota-meshi/svelte/no-useless-mustaches": [2],
        "@ota-meshi/svelte/require-optimized-style-attribute": 2,

        /*
            Stylistic Issues
        */
        "@ota-meshi/svelte/first-attribute-linebreak": [2],
        "@ota-meshi/svelte/html-quotes": [2],
        indent: 0,
        "@ota-meshi/svelte/indent": [
            2,
            {
                indent: 4
            }
        ],
        // "@ota-meshi/svelte/max-attributes-per-line": [2],
        "@ota-meshi/svelte/mustache-spacing": [2],
        "@ota-meshi/svelte/prefer-class-directive": 2,
        "@ota-meshi/svelte/prefer-style-directive": 2,
        "@ota-meshi/svelte/shorthand-attribute": [2],
        "@ota-meshi/svelte/shorthand-directive": [2],
        "@ota-meshi/svelte/spaced-html-comment": [2],

        /*
            Extension Rules
        */
        // "@ota-meshi/svelte/no-inner-declarations": [2],

        /*
            System
        */
        "@ota-meshi/svelte/comment-directive": 2,
        "@ota-meshi/svelte/system": 2,

        /*
            [other]
        */
        "no-self-assign": 0,
        "no-undef-init": 0
    }
}
