# rollup-plugin-handlebars-compiler-tests
Rollup unit tests for testing ``rollup-plugin-handlebars-compiler`` es and cjs modules.

# Installation
1. Install [rollup-plugin-handlebars-compiler](https://github.com/JohannIsaac/rollup-plugin-handlebars-compiler) locally
    - Clone repo
    ```
    git clone https://github.com/JohannIsaac/rollup-plugin-handlebars-compiler.git
    ```
    - Install dependencies
    ```
    npm ci
    ```
    - Create local npm link for this project to use
    ```
    npm link
    ```
2. Install `rollup-plugin-handlebars-compiler-tests`
    - Clone repo
    ```
    git clone https://github.com/JohannIsaac/rollup-plugin-handlebars-compiler-tests.git
    ```
    - Install dependencies
    ```
    npm ci
    ```
    - Use local `rollup-plugin-handlebars-compiler` package
    ```
    npm link rollup-plugin-handlebars-compiler-tests
    ```

## Usage
```
npm run test
```
