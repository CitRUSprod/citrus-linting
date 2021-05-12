const config = require("./packages/prettier-config")

module.exports = {
    plugins: ["./node_modules/prettier-plugin-packagejson"],
    ...config
}
