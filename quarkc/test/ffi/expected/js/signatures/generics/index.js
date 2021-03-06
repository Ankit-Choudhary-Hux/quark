var _qrt = require("quark/quark_runtime.js");
_qrt.plugImports("generics");
var quark = require('quark').quark;
exports.quark = quark;
var constructors = require('./constructors/index.js');
exports.constructors = constructors;
var pkg = require('./pkg/index.js');
exports.pkg = pkg;
var ccc = require('./ccc/index.js');
exports.ccc = ccc;



// CLASS Box
function Box() {
    this.__init_fields__();
}
exports.Box = Box;

function Box__init_fields__() {
    this.contents = null;
}
Box.prototype.__init_fields__ = Box__init_fields__;

function Box_set(contents) {}
Box.prototype.set = Box_set;

function Box_get() {
    return _qrt.cast(null, function () { return T; });
}
Box.prototype.get = Box_get;

function Box__getClass() {
    return "generics.Box<quark.Object>";
}
Box.prototype._getClass = Box__getClass;

function Box__getField(name) {
    if (_qrt.equals((name), ("contents"))) {
        return (this).contents;
    }
    return null;
}
Box.prototype._getField = Box__getField;

function Box__setField(name, value) {
    if (_qrt.equals((name), ("contents"))) {
        (this).contents = _qrt.cast(value, function () { return T; });
    }
}
Box.prototype._setField = Box__setField;

// CLASS Crate
function Crate() {
    this.__init_fields__();
}
exports.Crate = Crate;

function Crate__init_fields__() {
    this.box = null;
    this.ibox = null;
}
Crate.prototype.__init_fields__ = Crate__init_fields__;
_qrt.lazyStatic(function(){Crate.generics_Box_quark_Object__ref = null;});
_qrt.lazyStatic(function(){Crate.generics_Box_quark_int__ref = null;});
_qrt.lazyStatic(function(){Crate.generics_Crate_quark_Object__ref = null;});
function Crate_set(stuff) {}
Crate.prototype.set = Crate_set;

function Crate_get() {
    return _qrt.cast(null, function () { return T; });
}
Crate.prototype.get = Crate_get;

function Crate__getClass() {
    return "generics.Crate<quark.Object>";
}
Crate.prototype._getClass = Crate__getClass;

function Crate__getField(name) {
    if (_qrt.equals((name), ("box"))) {
        return (this).box;
    }
    if (_qrt.equals((name), ("ibox"))) {
        return (this).ibox;
    }
    return null;
}
Crate.prototype._getField = Crate__getField;

function Crate__setField(name, value) {
    if (_qrt.equals((name), ("box"))) {
        (this).box = _qrt.cast(value, function () { return Box; });
    }
    if (_qrt.equals((name), ("ibox"))) {
        (this).ibox = _qrt.cast(value, function () { return Box; });
    }
}
Crate.prototype._setField = Crate__setField;

// CLASS Sack
function Sack() {
    this.__init_fields__();
}
exports.Sack = Sack;

function Sack__init_fields__() {
    this.ints = null;
}
Sack.prototype.__init_fields__ = Sack__init_fields__;
_qrt.lazyStatic(function(){Sack.generics_Sack_ref = null;});
function Sack__getClass() {
    return "generics.Sack";
}
Sack.prototype._getClass = Sack__getClass;

function Sack__getField(name) {
    if (_qrt.equals((name), ("ints"))) {
        return (this).ints;
    }
    return null;
}
Sack.prototype._getField = Sack__getField;

function Sack__setField(name, value) {
    if (_qrt.equals((name), ("ints"))) {
        (this).ints = _qrt.cast(value, function () { return Box; });
    }
}
Sack.prototype._setField = Sack__setField;

// CLASS Matrix

function Matrix(width, height) {
    this.__init_fields__();
}
exports.Matrix = Matrix;

function Matrix__init_fields__() {
    this.width = null;
    this.height = null;
    this.columns = null;
}
Matrix.prototype.__init_fields__ = Matrix__init_fields__;
_qrt.lazyStatic(function(){Matrix.generics_Matrix_quark_Object__ref = null;});
_qrt.lazyStatic(function(){Matrix.quark_List_quark_List_quark_Object___ref = null;});
_qrt.lazyStatic(function(){Matrix.quark_List_quark_Object__ref = null;});
function Matrix___get__(i, j) {
    return _qrt.cast(null, function () { return T; });
}
Matrix.prototype.__get__ = Matrix___get__;

function Matrix___set__(i, j, value) {}
Matrix.prototype.__set__ = Matrix___set__;

function Matrix__getClass() {
    return "generics.Matrix<quark.Object>";
}
Matrix.prototype._getClass = Matrix__getClass;

function Matrix__getField(name) {
    if (_qrt.equals((name), ("width"))) {
        return (this).width;
    }
    if (_qrt.equals((name), ("height"))) {
        return (this).height;
    }
    if (_qrt.equals((name), ("columns"))) {
        return (this).columns;
    }
    return null;
}
Matrix.prototype._getField = Matrix__getField;

function Matrix__setField(name, value) {
    if (_qrt.equals((name), ("width"))) {
        (this).width = _qrt.cast(value, function () { return Number; });
    }
    if (_qrt.equals((name), ("height"))) {
        (this).height = _qrt.cast(value, function () { return Number; });
    }
    if (_qrt.equals((name), ("columns"))) {
        (this).columns = _qrt.cast(value, function () { return Array; });
    }
}
Matrix.prototype._setField = Matrix__setField;

var quark_ffi_signatures_md; _qrt.lazyImport('../quark_ffi_signatures_md/index.js', function(){
    quark_ffi_signatures_md = require('../quark_ffi_signatures_md/index.js');
    exports.quark_ffi_signatures_md = quark_ffi_signatures_md;
});



_qrt.pumpImports("generics");
