module.exports = {
    overrides: [
        {
            files: ["*.svelte"],
            processor: "svelte3/svelte3",
            plugins: ["svelte3"],
            settings: {
                "svelte3/ignore-styles": () => true
            },
            rules: {
                "no-multiple-empty-lines": [2, { max: 1, maxBOF: 2 }],
                "no-undef-init": 0,
                "no-use-before-define": 0
            }
        }
    ]
}
