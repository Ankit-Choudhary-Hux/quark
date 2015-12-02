var _qrt = require("datawire-quark-core");
var slack = require('./slack');
exports.slack = slack;
var pkg = require('./pkg');
exports.pkg = pkg;


function main() {
    var cli = new slack.Client(null, "fake-token", new pkg.Handler());
    (cli).onWSMessage(null, "{\"type\": \"hello\"}");
    (cli).onWSMessage(null, "{\"type\": \"message\", \"user\": \"uid-1\", \"channel\": \"chanel-1\"}");
}
exports.main = main;

main();