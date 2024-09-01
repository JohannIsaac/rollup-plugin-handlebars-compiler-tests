'use strict';

var tslib = require('tslib');
var index = require('./utils/index-cjs.test.js');
var helpers = require('./utils/helpers-cjs.test.js');

describe('Handlebars Plugin', function () {
    it('should bundle simple handlebars templates', function () { return tslib.__awaiter(void 0, void 0, void 0, function () {
        var _a, bundle, error, generated, output, catchOutput1, catchOutput2;
        return tslib.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, index.generateBundle(index.RollupTestBuilds['simple'])];
                case 1:
                    _a = _b.sent(), bundle = _a.bundle, error = _a.error;
                    if (!bundle || error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('No bundle generated');
                    }
                    return [4 /*yield*/, index.generateOutputs(bundle, index.RollupTestBuilds['simple'])];
                case 2:
                    generated = _b.sent();
                    if (generated.error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('Could not generate outputs');
                    }
                    output = generated.outputs.length && generated.outputs[0];
                    catchOutput1 = output.includes("Title");
                    catchOutput2 = output.includes("A simple template");
                    expect(bundle).toHaveProperty('generate');
                    expect(catchOutput1 && catchOutput2).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('properly catches errors in template syntax', function () { return tslib.__awaiter(void 0, void 0, void 0, function () {
        var _a, error, catchError;
        return tslib.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, index.generateBundle(index.RollupTestBuilds['invalid-syntax-error'])];
                case 1:
                    _a = _b.sent(), _a.bundle, error = _a.error;
                    catchError = error === null || error === void 0 ? void 0 : error.message.includes("Parse error");
                    expect(catchError).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('properly catches errors when unknown helper found', function () { return tslib.__awaiter(void 0, void 0, void 0, function () {
        var _a, error, catchError;
        return tslib.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, index.generateBundle(index.RollupTestBuilds['invalid-unknown-helpers'])];
                case 1:
                    _a = _b.sent(), _a.bundle, error = _a.error;
                    catchError = error === null || error === void 0 ? void 0 : error.message.includes("You specified knownHelpersOnly");
                    expect(catchError).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('allows specifying known helpers', function () { return tslib.__awaiter(void 0, void 0, void 0, function () {
        var _a, bundle, error, generated, output, catchResult;
        return tslib.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, index.generateBundle(index.RollupTestBuilds['with-known-helpers'])];
                case 1:
                    _a = _b.sent(), bundle = _a.bundle, error = _a.error;
                    if (!bundle || error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('No bundle generated');
                    }
                    return [4 /*yield*/, index.generateOutputs(bundle, index.RollupTestBuilds['with-known-helpers'])];
                case 2:
                    generated = _b.sent();
                    if (generated.error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('Could not generate outputs');
                    }
                    output = generated.outputs.length && generated.outputs[0];
                    catchResult = helpers.lookupHelperRegistration('someKnownHelper', output);
                    expect(catchResult).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should be able to use commonJS helpers', function () { return tslib.__awaiter(void 0, void 0, void 0, function () {
        var _a, bundle, error, generated, output, catchOutput;
        return tslib.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, index.generateBundle(index.RollupTestBuilds['with-helpers-commonjs'])];
                case 1:
                    _a = _b.sent(), bundle = _a.bundle, error = _a.error;
                    if (!bundle || error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('No bundle generated');
                    }
                    return [4 /*yield*/, index.generateOutputs(bundle, index.RollupTestBuilds['with-helpers-commonjs'])];
                case 2:
                    generated = _b.sent();
                    if (generated.error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('Could not generate outputs');
                    }
                    output = generated.outputs.length && generated.outputs[0];
                    catchOutput = helpers.lookupHelperRegistration('descriptionHelper', output);
                    expect(catchOutput).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should be able to use block helpers', function () { return tslib.__awaiter(void 0, void 0, void 0, function () {
        var _a, bundle, error, generated, output, catchOutput;
        return tslib.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, index.generateBundle(index.RollupTestBuilds['with-block-helpers'])];
                case 1:
                    _a = _b.sent(), bundle = _a.bundle, error = _a.error;
                    if (!bundle || error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('No bundle generated');
                    }
                    return [4 /*yield*/, index.generateOutputs(bundle, index.RollupTestBuilds['with-block-helpers'])];
                case 2:
                    generated = _b.sent();
                    if (generated.error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('Could not generate outputs');
                    }
                    output = generated.outputs.length && generated.outputs[0];
                    catchOutput = helpers.lookupHelperRegistration('list', output);
                    expect(catchOutput).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should allow partials to be passed through the plugin options', function () { return tslib.__awaiter(void 0, void 0, void 0, function () {
        var _a, bundle, error, generated, output, catchOutput;
        return tslib.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, index.generateBundle(index.RollupTestBuilds['with-plugin-partial'])];
                case 1:
                    _a = _b.sent(), bundle = _a.bundle, error = _a.error;
                    if (!bundle || error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('No bundle generated');
                    }
                    return [4 /*yield*/, index.generateOutputs(bundle, index.RollupTestBuilds['with-plugin-partial'])];
                case 2:
                    generated = _b.sent();
                    if (generated.error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('Could not generate outputs');
                    }
                    output = generated.outputs.length && generated.outputs[0];
                    catchOutput = helpers.lookupPartialRegistration('otherPartial', output);
                    expect(catchOutput).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should allow partials to find multiple paths', function () { return tslib.__awaiter(void 0, void 0, void 0, function () {
        var _a, bundle, error, generated, output, catchOutput1, catchOutput2;
        return tslib.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, index.generateBundle(index.RollupTestBuilds['with-dir-partials'])];
                case 1:
                    _a = _b.sent(), bundle = _a.bundle, error = _a.error;
                    if (!bundle || error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('No bundle generated');
                    }
                    return [4 /*yield*/, index.generateOutputs(bundle, index.RollupTestBuilds['with-dir-partials'])];
                case 2:
                    generated = _b.sent();
                    if (generated.error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('Could not generate outputs');
                    }
                    output = generated.outputs.length && generated.outputs[0];
                    catchOutput1 = helpers.lookupPartialRegistration('partialDirs/otherPartial', output);
                    catchOutput2 = helpers.lookupPartialRegistration('partialDirs/anotherDir/otherPartial', output);
                    expect(catchOutput1 && catchOutput2).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should allow partials from ancestor directory', function () { return tslib.__awaiter(void 0, void 0, void 0, function () {
        var _a, bundle, error, generated, output, catchOutput;
        return tslib.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, index.generateBundle(index.RollupTestBuilds['nested-templates/nested/with-ancestor-dir-partial'])];
                case 1:
                    _a = _b.sent(), bundle = _a.bundle, error = _a.error;
                    if (!bundle || error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('No bundle generated');
                    }
                    return [4 /*yield*/, index.generateOutputs(bundle, index.RollupTestBuilds['nested-templates/nested/with-ancestor-dir-partial'])];
                case 2:
                    generated = _b.sent();
                    if (generated.error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('Could not generate outputs');
                    }
                    output = generated.outputs.length && generated.outputs[0];
                    catchOutput = helpers.lookupPartialRegistration('../../some-partial', output);
                    expect(catchOutput).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should allow partials from parent directory', function () { return tslib.__awaiter(void 0, void 0, void 0, function () {
        var _a, bundle, error, generated, output, catchOutput;
        return tslib.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, index.generateBundle(index.RollupTestBuilds['nested-templates/with-parent-dir-partial'])];
                case 1:
                    _a = _b.sent(), bundle = _a.bundle, error = _a.error;
                    if (!bundle || error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('No bundle generated');
                    }
                    return [4 /*yield*/, index.generateOutputs(bundle, index.RollupTestBuilds['nested-templates/with-parent-dir-partial'])];
                case 2:
                    generated = _b.sent();
                    if (generated.error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('Could not generate outputs');
                    }
                    output = generated.outputs.length && generated.outputs[0];
                    catchOutput = helpers.lookupPartialRegistration('../some-partial', output);
                    expect(catchOutput).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should allow partials from cousin directory', function () { return tslib.__awaiter(void 0, void 0, void 0, function () {
        var _a, bundle, error, generated, output, catchOutput;
        return tslib.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, index.generateBundle(index.RollupTestBuilds['nested-templates/with-cousin-dir-partial'])];
                case 1:
                    _a = _b.sent(), bundle = _a.bundle, error = _a.error;
                    if (!bundle || error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('No bundle generated');
                    }
                    return [4 /*yield*/, index.generateOutputs(bundle, index.RollupTestBuilds['nested-templates/with-cousin-dir-partial'])];
                case 2:
                    generated = _b.sent();
                    if (generated.error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('Could not generate outputs');
                    }
                    output = generated.outputs.length && generated.outputs[0];
                    catchOutput = helpers.lookupPartialRegistration('../partialDirs/anotherDir/otherPartial', output);
                    expect(catchOutput).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should use failover content of the partial block if it refers to non-existent partial', function () { return tslib.__awaiter(void 0, void 0, void 0, function () {
        var _a, bundle, error, generated, output, catchOutput;
        return tslib.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, index.generateBundle(index.RollupTestBuilds['with-partial-block'])];
                case 1:
                    _a = _b.sent(), bundle = _a.bundle, error = _a.error;
                    if (!bundle || error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('No bundle generated');
                    }
                    return [4 /*yield*/, index.generateOutputs(bundle, index.RollupTestBuilds['with-partial-block'])];
                case 2:
                    generated = _b.sent();
                    if (generated.error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('Could not generate outputs');
                    }
                    output = generated.outputs.length && generated.outputs[0];
                    catchOutput = output.includes("<div>Failover</div>");
                    expect(catchOutput).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should recognize and render inline partials', function () { return tslib.__awaiter(void 0, void 0, void 0, function () {
        var _a, bundle, error, generated, output, catchOutput;
        return tslib.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, index.generateBundle(index.RollupTestBuilds['with-inline-partial'])];
                case 1:
                    _a = _b.sent(), bundle = _a.bundle, error = _a.error;
                    if (!bundle || error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('No bundle generated');
                    }
                    return [4 /*yield*/, index.generateOutputs(bundle, index.RollupTestBuilds['with-inline-partial'])];
                case 2:
                    generated = _b.sent();
                    if (generated.error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('Could not generate outputs');
                    }
                    output = generated.outputs.length && generated.outputs[0];
                    catchOutput = output.includes("printFoo");
                    expect(catchOutput).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
});
