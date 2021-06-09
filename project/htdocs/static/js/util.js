var Util = Util || {};
(function(window, $, exports, undefined) {
    'use strict';

    exports.DEBUG = false; // default value for production. do not touch. is overwritten in header.tpl if in debug mode (see config.inc.php to change the debug mode)

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

})(window, jQuery, Util);