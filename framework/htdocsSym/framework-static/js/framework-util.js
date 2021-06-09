var FrameworkUtil = FrameworkUtil || {};
(function(window, $, exports, undefined) {
    'use strict';

    exports.DEBUG = false;

    exports.log = function(obj) {
        if (exports.DEBUG && window.console) {
            console.log(obj);
        }
    };

    exports.logd = function(obj) {
        if (exports.DEBUG && window.console) {
            console.log('[DEBUG] ' + obj);
        }
    };

})(window, jQuery, FrameworkUtil);