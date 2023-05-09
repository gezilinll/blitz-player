// @ts-check

const off = 0;
const warn = 1;
const error = 2;

/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    env: {
        browser: true,
        'vue/setup-compiler-macros': true,
    },
    plugins: ['html', 'unused-imports', 'require-extensions'],
    extends: [
        'plugin:compat/recommended',
        'plugin:json-schema-validator/recommended',
        'plugin:jsonc/recommended-with-jsonc',
        'plugin:jsonc/prettier',
        'plugin:unicorn/recommended',
    ],
    overrides: [
        {
            files: ['*.html'],
            rules: {
                'vue/comment-directive': off,
            },
        },
        {
            files: ['*.json', '*.jsonc'],
            parser: 'jsonc-eslint-parser',
            rules: {
                // 这几条规则不应该校验 json，而且都挺耗时
                'unused-imports/no-unused-imports': off,
                'unused-imports/no-unused-vars': off,
                'vue/component-tags-order': off,
                'unicorn/new-for-builtins': off,

                'json-schema-validator/no-invalid': [
                    error,
                    {
                        schemas: [
                            {
                                fileMatch: ['package.json'],
                                schema: {
                                    type: 'object',
                                    properties: {
                                        pnpm: {
                                            type: 'object',
                                            properties: {
                                                overrides: {
                                                    type: 'object',
                                                    additionalProperties: {
                                                        type: 'string',
                                                        pattern: '^[^\\^].+',
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        ],
                    },
                ],
            },
        },
        {
            files: ['package.json', 'web-module.json'],
            parser: 'jsonc-eslint-parser',
            rules: {
                'jsonc/sort-keys': [
                    error,
                    {
                        pathPattern: '^pnpm.(overrides|packageExtensions)$',
                        order: { type: 'asc' },
                    },
                    {
                        pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
                        order: { type: 'asc' },
                    },
                    {
                        pathPattern: '^exports.*$',
                        order: ['types', 'import', 'require'],
                    },
                ],
                'jsonc/sort-array-values': [
                    error,
                    {
                        pathPattern: '^pnpm.neverBuiltDependencies$',
                        order: { type: 'asc' },
                    },
                ],
            },
        },
        {
            files: ['*.spec.js', '*.spec.ts'],
            globals: {
                cy: 'readonly',
            },
            rules: {
                '@typescript-eslint/no-unused-expressions': off,
            },
        },
        {
            files: ['*.d.ts'],
            rules: {
                '@typescript-eslint/consistent-type-imports': off,
            },
        },
        {
            files: ['scripts/**/*'],
            rules: {
                'unicorn/no-process-exit': off,
                'unicorn/prefer-module': error,
                // 因为是 tsx 执行，所以不需要 .js 后缀
                'import/extensions': [error, 'never', { json: 'always' }],
            },
        },
        {
            files: ['tools/**/*.ts', '*.mjs', 'apps/**/vite.config.ts'],
            rules: {
                'import/extensions': off,
                'unicorn/prefer-module': error,
                // tsc 编译，node esm 需要 .js 后缀
                'require-extensions/require-extensions': error,
            },
        },
    ],
    rules: {
        'no-debugger': [warn],
        // 会用 void 的场景基本上都必须用
        'no-void': off,
        'prefer-const': [error, { destructuring: 'all' }],
        quotes: [error, 'single', { avoidEscape: true, allowTemplateLiterals: false }],

        'json-schema-validator/no-invalid': off,

        // 暂时禁用，后面专项优化 turbo 时统一处理
        'turbo/no-undeclared-env-vars': off,

        // vscode 保存和 pre-commit hook 时都会自动格式化
        'prettier/prettier': off,
        '@typescript-eslint/consistent-type-imports': error,

        // 目前驼峰和中划线的风格都有，不做强制要求
        'vue/custom-event-name-casing': off,
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'always',
                    normal: 'any',
                    component: 'always',
                },
                svg: 'any',
                math: 'any',
            },
        ],
        // 这个规则只适用 vue3
        'vue/no-deprecated-v-bind-sync': off,
        'vue/no-ref-as-operand': error,
        'vue/script-setup-uses-vars': error,

        'import/extensions': [error, 'ignorePackages', { js: 'never', ts: 'never', tsx: 'never' }],
        'import/newline-after-import': error,
        'import/no-duplicates': error,
        'import/order': [
            error,
            {
                alphabetize: { order: 'asc', caseInsensitive: true },
                // https://github.com/import-js/eslint-plugin-import/issues/2685#issuecomment-1407718066
                // 2.27 有 bug: 'parent', 'sibling' 顺序会反掉，暂时先锁定 eslint-plugin-import 版本到 2.26
                groups: ['builtin', 'external', ['parent', 'sibling', 'index']],
                'newlines-between': 'always',
            },
        ],

        '@typescript-eslint/no-empty-interface': off,
        '@typescript-eslint/no-unused-vars': off,
        'unused-imports/no-unused-imports': error,
        'unused-imports/no-unused-vars': [
            error,
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],

        'unicorn/consistent-destructuring': off,
        'unicorn/consistent-function-scoping': off,
        // 不支持校验图片，文件夹等
        'unicorn/filename-case': off,
        'unicorn/import-style': off,
        'unicorn/no-array-callback-reference': off,
        'unicorn/no-array-for-each': off,
        'unicorn/no-array-reduce': off,
        'unicorn/no-await-expression-member': off,
        'unicorn/no-negated-condition': off,
        'unicorn/no-null': off,
        'unicorn/numeric-separators-style': off,
        'unicorn/prefer-export-from': [error, { ignoreUsedVariables: true }],
        'unicorn/prefer-module': off,
        'unicorn/prefer-spread': off,
        'unicorn/prefer-ternary': off,
        'unicorn/prefer-top-level-await': off,
        'unicorn/prevent-abbreviations': off,
        'unicorn/switch-case-braces': off,
        // NPromise.map 会出现误报
        'unicorn/no-array-method-this-argument': off,
        'unicorn/better-regex': off,
        // 会影响表格文本的换行符
        'unicorn/prefer-dom-node-text-content': off,
    },
    settings: {
        polyfills: [
            // Example of marking entire API and all methods and properties as polyfilled
            // 'Array.prototype.push',
            // 'document.fullscreenElement',
            'Promise.allSettled',
            'Object.fromEntries',
            'WeakRef',
            'ResizeObserverEntry',
            // 'Array.prototype.flatMap',
            // 'Array.prototype.flat',
            // 'Array.prototype.at',
            // 'String.prototype.matchAll',
            'Array.flatMap',
            'Array.flat',
            'Array.at',
            'String.matchAll',
            'String.replaceAll',
        ],
    },
};
