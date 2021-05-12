# @citrus-linting/eslint-config

ESLint config used by [CitRUS](https://github.com/CitRUSprod).

## Usage

### Built-in

Install dependencies:

```sh
npm add -D eslint @citrus-linting/eslint-config
```

Add `extends` field to your ESLint config:

```jsonc
{
    "extends": ["@citrus-linting"]
    // your rules
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
    // your rules
}
```

### Svelte

Install dependencies:

```sh
npm add -D eslint eslint-plugin-svelte3 @citrus-linting/eslint-config
```

Add `extends` field to your ESLint config:

```jsonc
{
    "extends": ["@citrus-linting", "@citrus-linting/eslint-config/svelte"]
    // your rules
}
```

### Svelte TypeScript

Install dependencies:

```sh
npm add -D eslint eslint-plugin-svelte3 @typescript-eslint/parser @typescript-eslint/eslint-plugin @citrus-linting/eslint-config
```

Add `extends` field to your ESLint config:

```jsonc
{
    "extends": ["@citrus-linting", "@citrus-linting/eslint-config/svelte-typescript"]
    // your rules
}
```
