const gaodingPrettierConfig = require('@gaoding/prettier-config');
gaodingPrettierConfig.plugins.shift();

/** @type {import('prettier').Config} */
module.exports = {
    ...gaodingPrettierConfig,
    quoteProps: 'consistent',
    overrides: [
        {
            files: '**/*.vue',
            options: {
                htmlWhitespaceSensitivity: 'ignore',
            },
        },
        {
            files: '.*rc',
            options: { parser: 'json' },
        },
        {
            files: ['**/*.{yml,yaml,md}'],
            options: { tabWidth: 2, embeddedLanguageFormatting: 'off' },
        },
    ],
};
