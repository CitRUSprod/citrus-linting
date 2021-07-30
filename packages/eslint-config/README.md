# @citrus-linting/eslint-config

ESLint config used by [CitRUS](https://github.com/CitRUSprod).

## Usage

### JavaScript

Install dependencies:

```sh
npm add -D eslint @citrus-linting/eslint-config
```

Add `extends` field to your ESLint config:

```jsonc
{
    "extends": ["@citrus-linting"]
    // your options
}
```

### TypeScript

Install dependencies:

```sh
npm add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin @citrus-linting/eslint-config
```

Add `extends` field to your ESLint config:

```jsonc
{
    "extends": ["@citrus-linting", "@citrus-linting/eslint-config/typescript"]
    // your options
}
```

### Svelte

Install dependencies:

```sh
npm add -D eslint svelte-eslint-parser @ota-meshi/eslint-plugin-svelte @citrus-linting/eslint-config
```

Add `extends` field to your ESLint config:

```jsonc
{
    "extends": ["@citrus-linting", "@citrus-linting/eslint-config/svelte"]
    // your options
}
```

### Svelte TypeScript

Install dependencies:

```sh
npm add -D eslint svelte-eslint-parser @ota-meshi/eslint-plugin-svelte @typescript-eslint/parser @typescript-eslint/eslint-plugin @citrus-linting/eslint-config
```

Add `extends` field to your ESLint config:

```jsonc
{
    "extends": ["@citrus-linting", "@citrus-linting/eslint-config/svelte-typescript"]
    // your options
}
```

### JSON

Install dependencies:

```sh
npm add -D eslint jsonc-eslint-parser eslint-plugin-jsonc @citrus-linting/eslint-config
```

Add `extends` field to your ESLint config:

```jsonc
{
    "extends": ["@citrus-linting", "@citrus-linting/eslint-config/json"]
    // your options
}
```

### YAML

Install dependencies:

```sh
npm add -D eslint yaml-eslint-parser eslint-plugin-yml @citrus-linting/eslint-config
```

Add `extends` field to your ESLint config:

```jsonc
{
    "extends": ["@citrus-linting", "@citrus-linting/eslint-config/yaml"]
    // your options
}
```

### Jest

Install dependencies:

```sh
npm add -D eslint eslint-plugin-jest @citrus-linting/eslint-config
```

Add `extends` field to your ESLint config:

```jsonc
{
    "extends": ["@citrus-linting", "@citrus-linting/eslint-config/jest"]
    // your options
}
```
