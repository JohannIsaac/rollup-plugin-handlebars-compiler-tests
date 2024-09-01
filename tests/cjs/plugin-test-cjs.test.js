'use strict';

var tslib = require('tslib');
var index = require('./utils/index-cjs.test.js');

describe('Handlebars Plugin', function () {
    it('should bundle simple handlebars templates', function () { return tslib.__awaiter(void 0, void 0, void 0, function () {
        var _a, bundle, error, outputs, output, catchOutput1, catchOutput2;
        return tslib.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, index.generateBundle(index.RollupTestBuilds['simple'])];
                case 1:
                    _a = _b.sent(), bundle = _a.bundle, error = _a.error;
                    if (!bundle) {
                        if (error && error.message)
                            throw new Error(error.message);
                        throw new Error('No bundle generated');
                    }
                    return [4 /*yield*/, index.generateOutputs(bundle, index.RollupTestBuilds['simple'])];
                case 2:
                    outputs = _b.sent();
                    output = outputs.length && outputs[0];
                    catchOutput1 = output.includes("Title");
                    catchOutput2 = output.includes("A simple template");
                    expect(bundle).toHaveProperty('generate');
                    expect(catchOutput1 && catchOutput2).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
});