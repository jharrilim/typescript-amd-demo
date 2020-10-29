define(["require", "exports", "./bar", "./baz"], function (require, exports, bar_1, baz_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function main() {
        console.log(bar_1.bar());
        console.log(baz_1.baz);
    }
    exports.default = main;
});
