import { __awaiter, __generator, __spreadArray, __read, __values } from 'tslib';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import handlebars from 'rollup-plugin-handlebars-compiler';
import { rollup } from 'rollup';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import descriptionHelper from '../samples/modules/descriptionHelper-es.test.js';

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
function generateOutput(bundle, outputOptions) {
    return __awaiter(this, void 0, void 0, function () {
        var outputs, output, output_1, output_1_1, chunkOrAsset, code;
        var e_2, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    outputs = [];
                    return [4 /*yield*/, bundle.generate(outputOptions)];
                case 1:
                    output = (_b.sent()).output;
                    try {
                        for (output_1 = __values(output), output_1_1 = output_1.next(); !output_1_1.done; output_1_1 = output_1.next()) {
                            chunkOrAsset = output_1_1.value;
                            code = chunkOrAsset.code;
                            outputs.push(code);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (output_1_1 && !output_1_1.done && (_a = output_1.return)) _a.call(output_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    return [2 /*return*/, outputs];
            }
        });
    });
}
function generateOutputs(bundle, buildData) {
    return __awaiter(this, void 0, void 0, function () {
        var outputOptionsList, outputs, error, outputOptionsList_1, outputOptionsList_1_1, outputOptions, currentOutputs, e_3, e_4_1;
        var e_4, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    outputOptionsList = buildData.outputOptionsList;
                    outputs = [];
                    error = null;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 8, 9, 10]);
                    outputOptionsList_1 = __values(outputOptionsList), outputOptionsList_1_1 = outputOptionsList_1.next();
                    _b.label = 2;
                case 2:
                    if (!!outputOptionsList_1_1.done) return [3 /*break*/, 7];
                    outputOptions = outputOptionsList_1_1.value;
                    _b.label = 3;
                case 3:
                    _b.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, generateOutput(bundle, outputOptions)];
                case 4:
                    currentOutputs = _b.sent();
                    Array.isArray(currentOutputs) && outputs.push.apply(outputs, __spreadArray([], __read(currentOutputs), false));
                    return [3 /*break*/, 6];
                case 5:
                    e_3 = _b.sent();
                    error = e_3;
                    return [3 /*break*/, 6];
                case 6:
                    outputOptionsList_1_1 = outputOptionsList_1.next();
                    return [3 /*break*/, 2];
                case 7: return [3 /*break*/, 10];
                case 8:
                    e_4_1 = _b.sent();
                    e_4 = { error: e_4_1 };
                    return [3 /*break*/, 10];
                case 9:
                    try {
                        if (outputOptionsList_1_1 && !outputOptionsList_1_1.done && (_a = outputOptionsList_1.return)) _a.call(outputOptionsList_1);
                    }
                    finally { if (e_4) throw e_4.error; }
                    return [7 /*endfinally*/];
                case 10:
                    if (bundle) {
                        bundle.close();
                    }
                    return [2 /*return*/, { outputs: outputs, error: error }];
            }
        });
    });
}

export { RollupTestBuilds, generateBundle, generateOutput, generateOutputs };
