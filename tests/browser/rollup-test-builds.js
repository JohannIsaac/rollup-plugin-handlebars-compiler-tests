import { __awaiter, __generator } from 'tslib';
import { generateOutputs, generateBundle, RollupTestBuilds } from './utils/index.js';

function runRollupTestBuilds() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, bundle, error, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, generateBundle(RollupTestBuilds['simple'])];
                case 1:
                    _a = _b.sent(), bundle = _a.bundle, error = _a.error;
                    if (!bundle) {
                        if (error)
                            throw new Error(error);
                        throw new Error('No bundle generated');
                    }
                    return [4 /*yield*/, generateOutputs(bundle, RollupTestBuilds['simple'])];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _b.sent();
                    console.error(e_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
runRollupTestBuilds();
