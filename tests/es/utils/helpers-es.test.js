import path from 'path';
import 'fs';
import { fileURLToPath } from 'url';

var filepath = fileURLToPath(import.meta.url);
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

export { lookupHelperRegistration, lookupPartialRegistration };
