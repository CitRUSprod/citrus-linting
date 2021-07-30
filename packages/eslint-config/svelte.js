module.exports = {
    overrides: [
        {
            files: ["*.svelte"],
            extends: ["./rules/svelte.js"],
            parser: "svelte-eslint-parser",
            plugins: ["@ota-meshi/svelte"]
        }
    ]
}
