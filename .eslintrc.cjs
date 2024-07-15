module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'standard-with-typescript',
        'plugin:vue/vue3-essential',
        '@vue/typescript/recommended',


        'plugin:vue/base',
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        //'plugin:prettier/recommended',
        //'eslint-config-prettier'
    ],
    overrides: [
        {
            files: [
                '.eslintrc.js',
                '.eslintrc.cjs',
            ],
            env: {
                node: true,
            },
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: "vue-eslint-parser",
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        project: './tsconfig.json', // Ruta al archivo tsconfig.json de tu proyecto
        parser: '@typescript-eslint/parser',
    },
    plugins: [
        'vue'
    ],
    rules: {
        //'@typescript-eslint/indent': 'off',
        '@typescript-eslint/indent': ['error', 4, {SwitchCase: 1}],
        '@typescript-eslint/indent': ['error', 'tab'],
        'no-tabs': 0,
        'vue/multi-word-component-names': 'off',
        'vue/no-reserved-component-names': 'off',
        'no-trailing-spaces': 'off',
        'no-restricted-syntax': [
            'error',
            {
                selector: 'ImportNamespaceSpecifier',
                message: 'Se permite el uso de @ para importar módulos.',
            },
        ],
        'vue/no-empty-script': 'off', // Desactiva el error de script vacío
        'vue/no-empty-component-block': 'off', // Desactiva el error de bloque de componente vacío
    },
};
