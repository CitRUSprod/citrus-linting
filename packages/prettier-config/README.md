# @citrus-linting/prettier-config

Prettier config used by [CitRUS](https://github.com/CitRUSprod).

## Usage

### Built-in

Install dependencies:

```sh
npm add -D prettier @citrus-linting/prettier-config
```

Add `extends` field to your Prettier config:

```javascript
module.exports = {
    ...require("@citrus-linting/prettier-config")
    // your rules
}
```

### Svelte

Install dependencies:

```sh
npm add -D prettier prettier-plugin-svelte @citrus-linting/prettier-config
```

Add `extends` field to your Prettier config:

```javascript
module.exports = {
    ...require("@citrus-linting/prettier-config"),
    ...require("@citrus-linting/prettier-config/svelte")
    // your rules
}
```
