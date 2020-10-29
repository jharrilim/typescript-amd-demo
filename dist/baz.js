"use strict";
define('baz', ['require', 'exports', 'bar'], function (require, exports, _a) {
    'use strict';
    var bar = _a.bar;
    console.log(bar);
    var baz = bar() + " from baz";
    exports.baz = baz;
});
