var _qrt = require("datawire-quark-core");
var test = require('./test');
exports.test = test;
var test = require('./test');
exports.test = test;


function main() {
    test.go();
    test.test.go();
    var t1 = new test.Test();
    var t2 = new test.test.Test();
    (t1).go();
    (t2).go();
}
exports.main = main;

main();