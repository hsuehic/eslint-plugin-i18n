# eslint-plugin-i18n

Eslint for i18n, Auto fix for i18n.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-i18n`:

```
$ npm install eslint-plugin-i18n --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-i18n` globally.

## Usage

Add `i18n` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "i18n"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "i18n/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





