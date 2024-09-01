import { __awaiter, __generator, __values } from 'tslib';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import handlebars from 'rollup-plugin-handlebars-compiler';
import { rollup } from 'rollup';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import descriptionHelper from '../samples/modules/descriptionHelper.js';

var filepath = fileURLToPath(import.meta.url);
var __dirname = path.dirname(filepath);
var RollupTestBuilds = {
    'simple': {
        inputOptions: {
            input: path.join(__dirname, '../samples/js/simple.js'),
            plugins: [
                nodeResolve(),
                commonjs(),
                handlebars(),
            ]
        },
        outputOptionsList: [
            {
                dir: 'tests/browser/dom-tests',
                format: 'es', // Just use es to be used by Jest
            }
        ]
    },
    'invalid-syntax-error': {
        ignoreError: true,
        inputOptions: {
            input: path.join(__dirname, '../samples/js/invalid-syntax-error.js'),
            plugins: [
                nodeResolve(),
                commonjs(),
                handlebars(),
            ]
        },
        outputOptionsList: [
            {
                dir: 'tests/browser/dom-tests',
                format: 'es', // Just use es to be used by Jest
            }
        ]
    },
    'invalid-unknown-helpers': {
        ignoreError: true,
        inputOptions: {
            input: path.join(__dirname, '../samples/js/invalid-unknown-helpers.js'),
            plugins: [
                nodeResolve(),
                commonjs(),
                handlebars({
                    knownHelpersOnly: true
                }),
            ]
        },
        outputOptionsList: [
            {
                dir: 'tests/browser/dom-tests',
                format: 'es', // Just use es to be used by Jest
            }
        ]
    },
    'with-known-helpers': {
        inputOptions: {
            input: path.join(__dirname, '../samples/js/with-known-helpers.js'),
            plugins: [
                nodeResolve(),
                commonjs(),
                handlebars({
                    helpers: {
                        someKnownHelper: function () { return 'some known helper'; }
                    },
                    knownHelpers: {
                        someKnownHelper: true
                    },
                    knownHelpersOnly: true
                }),
            ]
        },
        outputOptionsList: [
            {
                dir: 'tests/browser/dom-tests',
                format: 'es', // Just use es to be used by Jest
            }
        ]
    },
    'with-helpers-commonjs': {
        inputOptions: {
            input: path.join(__dirname, '../samples/js/with-helpers-commonjs.js'),
            plugins: [
                nodeResolve(),
                commonjs(),
                handlebars({
                    helpers: {
                        descriptionHelper: descriptionHelper
                    }
                }),
            ]
        },
        outputOptionsList: [
            {
                dir: 'tests/browser/dom-tests',
                format: 'es', // Just use es to be used by Jest
            }
        ]
    },
    'with-block-helpers': {
        inputOptions: {
            input: path.join(__dirname, '../samples/js/with-block-helpers.js'),
            plugins: [
                nodeResolve(),
                commonjs(),
                handlebars({
                    helpers: {
                        list: function (items, options) {
                            var itemsAsHtml = items.map(function (item) { return "<li>" + options.fn(item) + "</li>"; });
                            return "<ul>\n" + itemsAsHtml.join("\n") + "\n</ul>";
                        }
                    }
                }),
            ]
        },
        outputOptionsList: [
            {
                dir: 'tests/browser/dom-tests',
                format: 'es', // Just use es to be used by Jest
            }
        ]
    },
    'with-plugin-partial': {
        inputOptions: {
            input: path.join(__dirname, '../samples/js/with-plugin-partial.js'),
            plugins: [
                nodeResolve(),
                commonjs(),
                handlebars({
                    partials: {
                        otherPartial: fs.readFileSync(path.join(__dirname, '../samples/handlebars/partialDirs/anotherDir/otherPartial.hbs')).toString()
                    }
                }),
            ]
        },
        outputOptionsList: [
            {
                dir: 'tests/browser/dom-tests',
                format: 'es', // Just use es to be used by Jest
            }
        ]
    },
    'with-dir-partials': {
        inputOptions: {
            input: path.join(__dirname, '../samples/js/with-dir-partials.js'),
            plugins: [
                nodeResolve(),
                commonjs(),
                handlebars(),
            ]
        },
        outputOptionsList: [
            {
                dir: 'tests/browser/dom-tests',
                format: 'es', // Just use es to be used by Jest
            }
        ]
    },
    'nested-templates/nested/with-ancestor-dir-partial': {
        inputOptions: {
            input: path.join(__dirname, '../samples/js/nested-templates/nested/with-ancestor-dir-partial.js'),
            plugins: [
                nodeResolve(),
                commonjs(),
                handlebars(),
            ]
        },
        outputOptionsList: [
            {
                dir: 'tests/browser/dom-tests/nested-templates/nested',
                format: 'es', // Just use es to be used by Jest
            }
        ]
    },
    'nested-templates/with-parent-dir-partial': {
        inputOptions: {
            input: path.join(__dirname, '../samples/js/nested-templates/with-parent-dir-partial.js'),
            plugins: [
                nodeResolve(),
                commonjs(),
                handlebars(),
            ]
        },
        outputOptionsList: [
            {
                dir: 'tests/browser/dom-tests/nested-templates',
                format: 'es', // Just use es to be used by Jest
            }
        ]
    },
    'nested-templates/with-cousin-dir-partial': {
        inputOptions: {
            input: path.join(__dirname, '../samples/js/nested-templates/with-cousin-dir-partial.js'),
            plugins: [
                nodeResolve(),
                commonjs(),
                handlebars(),
            ]
        },
        outputOptionsList: [
            {
                dir: 'tests/browser/dom-tests/nested-templates',
                format: 'es', // Just use es to be used by Jest
            }
        ]
    },
    'with-partial-block': {
        inputOptions: {
            input: path.join(__dirname, '../samples/js/with-partial-block.js'),
            plugins: [
                nodeResolve(),
                commonjs(),
                handlebars(),
            ]
        },
        outputOptionsList: [
            {
                dir: 'tests/browser/dom-tests',
                format: 'es', // Just use es to be used by Jest
            }
        ]
    },
    'with-inline-partial': {
        inputOptions: {
            input: path.join(__dirname, '../samples/js/with-inline-partial.js'),
            plugins: [
                nodeResolve(),
                commonjs(),
                handlebars(),
            ]
        },
        outputOptionsList: [
            {
                dir: 'tests/browser/dom-tests',
                format: 'es', // Just use es to be used by Jest
            }
        ]
    },
};
function generateBundle(buildData) {
    return __awaiter(this, void 0, void 0, function () {
        var inputOptions, bundle, error, inputOptionsValue, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    inputOptions = buildData.inputOptions;
                    error = null;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    inputOptionsValue = inputOptions;
                    if (!(typeof inputOptions === 'function')) return [3 /*break*/, 3];
                    return [4 /*yield*/, inputOptions()];
                case 2:
                    inputOptionsValue = (_a.sent());
                    _a.label = 3;
                case 3: return [4 /*yield*/, rollup(inputOptionsValue)];
                case 4:
                    bundle = _a.sent();
                    return [3 /*break*/, 6];
                case 5:
                    e_1 = _a.sent();
                    error = e_1;
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/, { bundle: bundle, error: error }];
            }
        });
    });
}
function writeBundles(bundle, buildData) {
    return __awaiter(this, void 0, void 0, function () {
        var outputOptionsList, outputOptionsList_2, outputOptionsList_2_1, outputOptions, e_5_1;
        var e_5, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    outputOptionsList = buildData.outputOptionsList;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, 7, 8]);
                    outputOptionsList_2 = __values(outputOptionsList), outputOptionsList_2_1 = outputOptionsList_2.next();
                    _b.label = 2;
                case 2:
                    if (!!outputOptionsList_2_1.done) return [3 /*break*/, 5];
                    outputOptions = outputOptionsList_2_1.value;
                    return [4 /*yield*/, writeBundle(bundle, buildData, outputOptions)];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4:
                    outputOptionsList_2_1 = outputOptionsList_2.next();
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 8];
                case 6:
                    e_5_1 = _b.sent();
                    e_5 = { error: e_5_1 };
                    return [3 /*break*/, 8];
                case 7:
                    try {
                        if (outputOptionsList_2_1 && !outputOptionsList_2_1.done && (_a = outputOptionsList_2.return)) _a.call(outputOptionsList_2);
                    }
                    finally { if (e_5) throw e_5.error; }
                    return [7 /*endfinally*/];
                case 8:
                    if (bundle) {
                        bundle.close();
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function writeBundle(bundle, buildData, outputOptions) {
    return __awaiter(this, void 0, void 0, function () {
        var inputOptionsValue, inputName, basename, outputFile;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    inputOptionsValue = buildData.inputOptions;
                    if (!(typeof buildData.inputOptions === 'function')) return [3 /*break*/, 2];
                    return [4 /*yield*/, buildData.inputOptions()];
                case 1:
                    inputOptionsValue = (_a.sent());
                    _a.label = 2;
                case 2:
                    inputName = inputOptionsValue.input;
                    basename = path.basename(inputName);
                    outputFile = outputOptions.dir;
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, bundle.write(outputOptions)];
                case 4:
                    _a.sent();
                    console.log('\x1b[36mGenerated', "".concat(path.join(outputFile, basename), "\u001B[0m"));
                    return [3 /*break*/, 6];
                case 5:
                    _a.sent();
                    console.error('Could not write', outputFile);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}

export { RollupTestBuilds, generateBundle, writeBundle, writeBundles };
