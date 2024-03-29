module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                targets: {
                    browsers: [
                        "last 2 versions",
                        "ie >= 11"
                    ]
                }
            }
        ]
    ],
    plugins: [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-transform-runtime"
    ]
};
