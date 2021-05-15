# @citrus-linting/stylelint-config

Stylelint config used by [CitRUS](https://github.com/CitRUSprod).

## Usage

### CSS

Install dependencies:

```sh
npm add -D stylelint @citrus-linting/stylelint-config
```

Add `extends` field to your Stylelint config:

```jsonc
{
    "extends": ["@citrus-linting/stylelint-config"]
    // your options
}
```

### SCSS

Install dependencies:

```sh
npm add -D stylelint stylelint-scss @citrus-linting/stylelint-config
```

Add `extends` field to your Stylelint config:

```jsonc
{
    "extends": ["@citrus-linting/stylelint-config", "@citrus-linting/stylelint-config/scss"]
    // your options
}
```
