# @citrus-linting/eslint-config

ESLint config used by [CitRUS](https://github.com/CitRUSprod).

## Config list

1. [JavaScript](#javascript)
2. [TypeScript](#typescript)
3. [Svelte](#svelte)
4. [Svelte TypeScript](#svelte-typescript)
5. [JSON](#json)
6. [YAML](#yaml)
7. [Jest](#jest)
8. [JSDoc](#jsdoc)

## Usage

### JavaScript

Install dependencies:

```sh
npm add -D @citrus-linting/eslint-config
```

Add `extends` field to your ESLint config:

```jsonc
{
    "extends": ["@citrus-linting"]
    // your options
}

// or only rules
{
    "extends": ["@citrus-linting/eslint-config/rules/base"]
    // your options
}
```

### TypeScript

Install dependencies:

```sh
npm add -D @typescript-eslint/parser @typescript-eslint/eslint-plugin @citrus-linting/eslint-config
```

Add `extends` field to your ESLint config:

```jsonc
{
    "extends": ["@citrus-linting", "@citrus-linting/eslint-config/typescript"]
    // your options
}

// or only rules
{
    "extends": [
        "@citrus-linting/eslint-config/rules/base",
        "@citrus-linting/eslint-config/rules/typescript"
    ]
    // your options
}
```

### Svelte

Install dependencies:

```sh
npm add -D svelte-eslint-parser @ota-meshi/eslint-plugin-svelte @citrus-linting/eslint-config
```

Add `extends` field to your ESLint config:

```jsonc
{
    "extends": ["@citrus-linting", "@citrus-linting/eslint-config/svelte"]
    // your options
}

// or only rules
{
    "extends": [
        "@citrus-linting/eslint-config/rules/base",
        "@citrus-linting/eslint-config/rules/svelte"
    ]
    // your options
}
```

### Svelte TypeScript

Install dependencies:

```sh
npm add -D svelte-eslint-parser @ota-meshi/eslint-plugin-svelte @typescript-eslint/parser @typescript-eslint/eslint-plugin @citrus-linting/eslint-config
```

Add `extends` field to your ESLint config:

```jsonc
{
    "extends": ["@citrus-linting", "@citrus-linting/eslint-config/svelte-typescript"]
    // your options
}

// or only rules
{
    "extends": [
        "@citrus-linting/eslint-config/rules/base",
        "@citrus-linting/eslint-config/rules/typescript",
        "@citrus-linting/eslint-config/rules/svelte"
    ]
    // your options
}
```

### JSON

Install dependencies:

```sh
npm add -D jsonc-eslint-parser eslint-plugin-jsonc @citrus-linting/eslint-config
```

Add `extends` field to your ESLint config:

```jsonc
{
    "extends": ["@citrus-linting", "@citrus-linting/eslint-config/json"]
    // your options
}

// or only rules
{
    "extends": [
        "@citrus-linting/eslint-config/rules/base",
        "@citrus-linting/eslint-config/rules/json"
    ]
    // your options
}
```

### YAML

Install dependencies:

```sh
npm add -D yaml-eslint-parser eslint-plugin-yml @citrus-linting/eslint-config
```

Add `extends` field to your ESLint config:

```jsonc
{
    "extends": ["@citrus-linting", "@citrus-linting/eslint-config/yaml"]
    // your options
}

// or only rules
{
    "extends": [
        "@citrus-linting/eslint-config/rules/base",
        "@citrus-linting/eslint-config/rules/yaml"
    ]
    // your options
}
```

### Jest

Install dependencies:

```sh
npm add -D eslint-plugin-jest @citrus-linting/eslint-config
```

Add `extends` field to your ESLint config:

```jsonc
{
    "extends": ["@citrus-linting", "@citrus-linting/eslint-config/jest"]
    // your options
}

// or only rules
{
    "extends": [
        "@citrus-linting/eslint-config/rules/base",
        "@citrus-linting/eslint-config/rules/jest"
    ]
    // your options
}
```

### JSDoc

Install dependencies:

```sh
npm add -D eslint-plugin-jsdoc @citrus-linting/eslint-config
```

Add `extends` field to your ESLint config:

```jsonc
{
    "extends": ["@citrus-linting", "@citrus-linting/eslint-config/jsdoc"]
    // your options
}

// or only rules
{
    "extends": [
        "@citrus-linting/eslint-config/rules/base",
        "@citrus-linting/eslint-config/rules/jsdoc"
    ]
    // your options
}
```
