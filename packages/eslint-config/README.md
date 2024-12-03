# @citrus-linting/eslint-config

ESLint config used by [CitRUS](https://github.com/CitRUSprod).

## Config list

1. [JavaScript](#javascript)
2. [TypeScript](#typescript)
3. [Svelte](#svelte)
4. [Svelte TypeScript](#svelte-typescript)

## Usage

### JavaScript

Install dependencies:

```sh
npm add -D globals @citrus-linting/eslint-config
```

Add `extends` field to your ESLint config (eslint.config.js):

```javascript
import baseConfig from "@citrus-linting/eslint-config"

export default [
    ...baseConfig
    // your configs
]
```

or only rules:

```javascript
import baseRules from "@citrus-linting/eslint-config/rules/base"

export default [
    {
        files: ["**/*.js"],
        rules: {
            ...baseRules
            // your rules
        }
    }
]
```

### TypeScript

Install dependencies:

```sh
npm add -D globals typescript-eslint @citrus-linting/eslint-config
```

Add `extends` field to your ESLint config (eslint.config.js):

```javascript
import baseConfig from "@citrus-linting/eslint-config"
import typescriptConfig from "@citrus-linting/eslint-config/typescript"

export default [
    ...baseConfig,
    ...typescriptConfig
    // your configs
]
```

or only rules:

```javascript
import baseRules from "@citrus-linting/eslint-config/rules/base"
import typescriptRules from "@citrus-linting/eslint-config/rules/typescript"

export default [
    {
        files: ["**/*.ts"],
        rules: {
            ...baseRules,
            ...typescriptRules
            // your rules
        }
    }
]
```

### Svelte

Install dependencies:

```sh
npm add -D globals svelte-eslint-parser eslint-plugin-svelte @citrus-linting/eslint-config
```

Add `extends` field to your ESLint config (eslint.config.js):

```javascript
import baseConfig from "@citrus-linting/eslint-config"
import svelteConfig from "@citrus-linting/eslint-config/svelte"

export default [
    ...baseConfig,
    ...svelteConfig
    // your configs
]
```

or only rules:

```javascript
import baseRules from "@citrus-linting/eslint-config/rules/base"
import svelteRules from "@citrus-linting/eslint-config/rules/svelte"

export default [
    {
        files: ["**/*.svelte"],
        rules: {
            ...baseRules,
            ...svelteRules
            // your rules
        }
    }
]
```

### Svelte TypeScript

Install dependencies:

```sh
npm add -D globals svelte-eslint-parser eslint-plugin-svelte typescript-eslint @citrus-linting/eslint-config
```

Add `extends` field to your ESLint config (eslint.config.js):

> **NOTE:** Need tsconfig.eslint.json file.

```javascript
import baseConfig from "@citrus-linting/eslint-config"
import svelteTypescriptConfig from "@citrus-linting/eslint-config/svelte-typescript"

export default [
    ...baseConfig,
    ...svelteTypescriptConfig
    // your configs
]
```

or only rules:

```javascript
import baseRules from "@citrus-linting/eslint-config/rules/base"
import typescriptRules from "@citrus-linting/eslint-config/rules/typescript"
import svelteRules from "@citrus-linting/eslint-config/rules/svelte"

export default [
    {
        files: ["**/*.svelte"],
        rules: {
            ...baseRules,
            ...typescriptRules,
            ...svelteRules
            // your rules
        }
    }
]
```
