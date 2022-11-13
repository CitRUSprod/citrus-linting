module.exports = {
    overrides: [
        {
            files: ["*.svelte"],
            extends: ["./rules/svelte"],
            parser: "svelte-eslint-parser",
            plugins: ["svelte"]
        }
    ]
}
