define('baz', ['require', 'exports', 'bar'], function(require, exports, { bar }) {
    'use strict';
    console.log(bar);
    const baz = `${bar()} from baz`;

    exports.baz = baz;
});
