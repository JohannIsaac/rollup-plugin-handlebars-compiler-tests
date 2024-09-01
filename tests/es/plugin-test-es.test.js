import { __awaiter, __generator } from 'tslib';
import { generateOutputs, generateBundle, RollupTestBuilds } from './utils/index-es.test.js';
import { lookupHelperRegistration, lookupPartialRegistration } from './utils/helpers-es.test.js';

describe('Handlebars Plugin', function () {
    it('should bundle simple handlebars templates', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, bundle, error, generated, output, catchOutput1, catchOutput2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, generateBundle(RollupTestBuilds['simple'])];
                case 1:
                    _a = _b.sent(), bundle = _a.bundle, error = _a.error;
                    if (!bundle || error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('No bundle generated');
                    }
                    return [4 /*yield*/, generateOutputs(bundle, RollupTestBuilds['simple'])];
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
    it('properly catches errors in template syntax', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, error, catchError;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, generateBundle(RollupTestBuilds['invalid-syntax-error'])];
                case 1:
                    _a = _b.sent(), _a.bundle, error = _a.error;
                    catchError = error === null || error === void 0 ? void 0 : error.message.includes("Parse error");
                    expect(catchError).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('properly catches errors when unknown helper found', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, error, catchError;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, generateBundle(RollupTestBuilds['invalid-unknown-helpers'])];
                case 1:
                    _a = _b.sent(), _a.bundle, error = _a.error;
                    catchError = error === null || error === void 0 ? void 0 : error.message.includes("You specified knownHelpersOnly");
                    expect(catchError).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('allows specifying known helpers', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, bundle, error, generated, output, catchResult;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, generateBundle(RollupTestBuilds['with-known-helpers'])];
                case 1:
                    _a = _b.sent(), bundle = _a.bundle, error = _a.error;
                    if (!bundle || error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('No bundle generated');
                    }
                    return [4 /*yield*/, generateOutputs(bundle, RollupTestBuilds['with-known-helpers'])];
                case 2:
                    generated = _b.sent();
                    if (generated.error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('Could not generate outputs');
                    }
                    output = generated.outputs.length && generated.outputs[0];
                    catchResult = lookupHelperRegistration('someKnownHelper', output);
                    expect(catchResult).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should be able to use commonJS helpers', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, bundle, error, generated, output, catchOutput;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, generateBundle(RollupTestBuilds['with-helpers-commonjs'])];
                case 1:
                    _a = _b.sent(), bundle = _a.bundle, error = _a.error;
                    if (!bundle || error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('No bundle generated');
                    }
                    return [4 /*yield*/, generateOutputs(bundle, RollupTestBuilds['with-helpers-commonjs'])];
                case 2:
                    generated = _b.sent();
                    if (generated.error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('Could not generate outputs');
                    }
                    output = generated.outputs.length && generated.outputs[0];
                    catchOutput = lookupHelperRegistration('descriptionHelper', output);
                    expect(catchOutput).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should be able to use block helpers', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, bundle, error, generated, output, catchOutput;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, generateBundle(RollupTestBuilds['with-block-helpers'])];
                case 1:
                    _a = _b.sent(), bundle = _a.bundle, error = _a.error;
                    if (!bundle || error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('No bundle generated');
                    }
                    return [4 /*yield*/, generateOutputs(bundle, RollupTestBuilds['with-block-helpers'])];
                case 2:
                    generated = _b.sent();
                    if (generated.error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('Could not generate outputs');
                    }
                    output = generated.outputs.length && generated.outputs[0];
                    catchOutput = lookupHelperRegistration('list', output);
                    expect(catchOutput).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should allow partials to be passed through the plugin options', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, bundle, error, generated, output, catchOutput;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, generateBundle(RollupTestBuilds['with-plugin-partial'])];
                case 1:
                    _a = _b.sent(), bundle = _a.bundle, error = _a.error;
                    if (!bundle || error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('No bundle generated');
                    }
                    return [4 /*yield*/, generateOutputs(bundle, RollupTestBuilds['with-plugin-partial'])];
                case 2:
                    generated = _b.sent();
                    if (generated.error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('Could not generate outputs');
                    }
                    output = generated.outputs.length && generated.outputs[0];
                    catchOutput = lookupPartialRegistration('otherPartial', output);
                    expect(catchOutput).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should allow partials to find multiple paths', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, bundle, error, generated, output, catchOutput1, catchOutput2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, generateBundle(RollupTestBuilds['with-dir-partials'])];
                case 1:
                    _a = _b.sent(), bundle = _a.bundle, error = _a.error;
                    if (!bundle || error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('No bundle generated');
                    }
                    return [4 /*yield*/, generateOutputs(bundle, RollupTestBuilds['with-dir-partials'])];
                case 2:
                    generated = _b.sent();
                    if (generated.error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('Could not generate outputs');
                    }
                    output = generated.outputs.length && generated.outputs[0];
                    catchOutput1 = lookupPartialRegistration('partialDirs/otherPartial', output);
                    catchOutput2 = lookupPartialRegistration('partialDirs/anotherDir/otherPartial', output);
                    expect(catchOutput1 && catchOutput2).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should allow partials from ancestor directory', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, bundle, error, generated, output, catchOutput;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, generateBundle(RollupTestBuilds['nested-templates/nested/with-ancestor-dir-partial'])];
                case 1:
                    _a = _b.sent(), bundle = _a.bundle, error = _a.error;
                    if (!bundle || error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('No bundle generated');
                    }
                    return [4 /*yield*/, generateOutputs(bundle, RollupTestBuilds['nested-templates/nested/with-ancestor-dir-partial'])];
                case 2:
                    generated = _b.sent();
                    if (generated.error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('Could not generate outputs');
                    }
                    output = generated.outputs.length && generated.outputs[0];
                    catchOutput = lookupPartialRegistration('../../some-partial', output);
                    expect(catchOutput).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should allow partials from parent directory', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, bundle, error, generated, output, catchOutput;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, generateBundle(RollupTestBuilds['nested-templates/with-parent-dir-partial'])];
                case 1:
                    _a = _b.sent(), bundle = _a.bundle, error = _a.error;
                    if (!bundle || error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('No bundle generated');
                    }
                    return [4 /*yield*/, generateOutputs(bundle, RollupTestBuilds['nested-templates/with-parent-dir-partial'])];
                case 2:
                    generated = _b.sent();
                    if (generated.error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('Could not generate outputs');
                    }
                    output = generated.outputs.length && generated.outputs[0];
                    catchOutput = lookupPartialRegistration('../some-partial', output);
                    expect(catchOutput).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should allow partials from cousin directory', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, bundle, error, generated, output, catchOutput;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, generateBundle(RollupTestBuilds['nested-templates/with-cousin-dir-partial'])];
                case 1:
                    _a = _b.sent(), bundle = _a.bundle, error = _a.error;
                    if (!bundle || error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('No bundle generated');
                    }
                    return [4 /*yield*/, generateOutputs(bundle, RollupTestBuilds['nested-templates/with-cousin-dir-partial'])];
                case 2:
                    generated = _b.sent();
                    if (generated.error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('Could not generate outputs');
                    }
                    output = generated.outputs.length && generated.outputs[0];
                    catchOutput = lookupPartialRegistration('../partialDirs/anotherDir/otherPartial', output);
                    expect(catchOutput).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should use failover content of the partial block if it refers to non-existent partial', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, bundle, error, generated, output, catchOutput;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, generateBundle(RollupTestBuilds['with-partial-block'])];
                case 1:
                    _a = _b.sent(), bundle = _a.bundle, error = _a.error;
                    if (!bundle || error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('No bundle generated');
                    }
                    return [4 /*yield*/, generateOutputs(bundle, RollupTestBuilds['with-partial-block'])];
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
    it('should recognize and render inline partials', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, bundle, error, generated, output, catchOutput;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, generateBundle(RollupTestBuilds['with-inline-partial'])];
                case 1:
                    _a = _b.sent(), bundle = _a.bundle, error = _a.error;
                    if (!bundle || error) {
                        if (error && error.message)
                            fail(error.message);
                        fail('No bundle generated');
                    }
                    return [4 /*yield*/, generateOutputs(bundle, RollupTestBuilds['with-inline-partial'])];
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
