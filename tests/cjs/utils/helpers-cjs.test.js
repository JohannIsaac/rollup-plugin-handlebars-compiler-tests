'use strict';

var path = require('path');
require('fs');
var url = require('url');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
var filepath = url.fileURLToPath((typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.src || new URL('utils/helpers-cjs.test.js', document.baseURI).href)));
path.dirname(filepath);
var ws = "[\\n\\r\\s]*";
var q = "[\"']";
function lookupPartialRegistration(partialName, code) {
    var searchRegex = new RegExp("Handlebars".concat(ws, "\\.registerPartial").concat(ws, "\\(").concat(ws).concat(q).concat(partialName).concat(ws).concat(q));
    var result = searchRegex.test(code);
    return result;
}
function lookupHelperRegistration(helperName, code) {
    var searchRegex = new RegExp("Handlebars".concat(ws, "\\.registerHelper").concat(ws, "\\(").concat(ws).concat(q).concat(helperName).concat(ws).concat(q));
    var result = searchRegex.test(code);
    if (helperName === 'description') {
        console.log(result, searchRegex);
        console.log(code);
    }
    return result;
}

exports.lookupHelperRegistration = lookupHelperRegistration;
exports.lookupPartialRegistration = lookupPartialRegistration;
