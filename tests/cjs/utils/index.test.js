'use strict';

var tslib = require('tslib');
var commonjs = require('@rollup/plugin-commonjs');
var nodeResolve = require('@rollup/plugin-node-resolve');
var handlebars = require('rollup-plugin-handlebars-compiler');
var rollup = require('rollup');
var path = require('path');
var url = require('url');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
var filepath = url.fileURLToPath((typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.src || new URL('utils/index.test.js', document.baseURI).href)));
var __dirname$1 = path.dirname(filepath);
var RollupTestBuilds = {
    'simple': {
        inputOptions: {
            input: path.join(__dirname$1, '../samples/js/simple.js'),
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
    return tslib.__awaiter(this, void 0, void 0, function () {
        var inputOptions, bundle, error, e_1;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    inputOptions = buildData.inputOptions;
                    error = null;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, rollup.rollup(inputOptions)];
                case 2:
                    bundle = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    error = e_1;
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/, { bundle: bundle, error: error }];
            }
        });
    });
}
function generateOutputs(bundle, buildData) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var outputOptionsList, outputs, outputOptionsList_1, outputOptionsList_1_1, outputOptions, output, output_1, output_1_1, chunkOrAsset, code, e_2_1;
        var e_2, _a, e_3, _b;
        return tslib.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    outputOptionsList = buildData.outputOptionsList;
                    outputs = [];
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 7, 8, 9]);
                    outputOptionsList_1 = tslib.__values(outputOptionsList), outputOptionsList_1_1 = outputOptionsList_1.next();
                    _c.label = 2;
                case 2:
                    if (!!outputOptionsList_1_1.done) return [3 /*break*/, 6];
                    outputOptions = outputOptionsList_1_1.value;
                    return [4 /*yield*/, bundle.generate(outputOptions)];
                case 3:
                    output = (_c.sent()).output;
                    try {
                        for (output_1 = (e_3 = void 0, tslib.__values(output)), output_1_1 = output_1.next(); !output_1_1.done; output_1_1 = output_1.next()) {
                            chunkOrAsset = output_1_1.value;
                            code = chunkOrAsset.code;
                            outputs.push(code);
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (output_1_1 && !output_1_1.done && (_b = output_1.return)) _b.call(output_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                    return [4 /*yield*/, writeBundle(bundle, buildData, outputOptions)];
                case 4:
                    _c.sent();
                    _c.label = 5;
                case 5:
                    outputOptionsList_1_1 = outputOptionsList_1.next();
                    return [3 /*break*/, 2];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_2_1 = _c.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (outputOptionsList_1_1 && !outputOptionsList_1_1.done && (_a = outputOptionsList_1.return)) _a.call(outputOptionsList_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7 /*endfinally*/];
                case 9:
                    if (bundle) {
                        bundle.close();
                    }
                    return [2 /*return*/, outputs];
            }
        });
    });
}
function writeBundle(bundle, buildData, outputOptions) {
    return tslib.__awaiter(this, void 0, void 0, function () {
        var inputName, basename, outputFile;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    inputName = buildData.inputOptions.input;
                    basename = path.basename(inputName);
                    outputFile = outputOptions.dir;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, bundle.write(outputOptions)];
                case 2:
                    _a.sent();
                    console.log('\x1b[36mGenerated', "".concat(path.join(outputFile, basename), "\u001B[0m"));
                    return [3 /*break*/, 4];
                case 3:
                    _a.sent();
                    console.error('Could not write', outputFile);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}

exports.RollupTestBuilds = RollupTestBuilds;
exports.generateBundle = generateBundle;
exports.generateOutputs = generateOutputs;
exports.writeBundle = writeBundle;
