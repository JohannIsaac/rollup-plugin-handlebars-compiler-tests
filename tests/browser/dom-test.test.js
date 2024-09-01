import { __awaiter, __generator } from 'tslib';

/**
 * @jest-environment jsdom
 */
describe('Handlebars Rollup Output', function () {
    it('should load simple handlebars templates', function () { return __awaiter(void 0, void 0, void 0, function () {
        var modulePath, module, load, output, catchOutput1, catchOutput2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    modulePath = './dom-tests/simple.js';
                    return [4 /*yield*/, import(modulePath)];
                case 1:
                    module = _a.sent();
                    load = module.default;
                    output = load && load();
                    catchOutput1 = output.includes("Title");
                    catchOutput2 = output.includes("A simple template");
                    expect(catchOutput1 && catchOutput2).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
});
