// @ts-check

/** @type {import('stylelint').Config} */
module.exports = {
    extends: '@gaoding/stylelint-config',
    rules: {
        'declaration-block-no-redundant-longhand-properties': [true, { ignoreShorthands: 'inset' }],
        'media-feature-name-no-unknown': [
            true,
            { ignoreMediaFeatureNames: ['min-device-pixel-ratio'] },
        ],
        'property-no-unknown': [true, { ignoreProperties: ['composes'] }],
        'selector-id-pattern': null,
        'value-keyword-case': ['lower', { ignoreKeywords: ['flexCenter'] }],
    },
};
