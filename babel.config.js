module.exports = {
    presets : [
        ["@babel/preset-env", { targets : { node: "cureent"}}],
        ["@babel/preset-react", { runtime: "automatic"}],
    ],
};