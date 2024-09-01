import { __awaiter, __generator, __values, __read } from 'tslib';
import { RollupTestBuilds, writeBundles, generateBundle } from './utils/index.js';

function rollupTestBuild(id, build) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, bundle, error, e_1, inputOptions;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, generateBundle(build)];
                case 1:
                    _a = _b.sent(), bundle = _a.bundle, error = _a.error;
                    if (!bundle) {
                        if (error)
                            throw new Error(error);
                        throw new Error('No bundle generated');
                    }
                    return [4 /*yield*/, writeBundles(bundle, build)];
                case 2:
                    _b.sent();
                    return [2 /*return*/];
                case 3:
                    e_1 = _b.sent();
                    if (!build.ignoreError) {
                        inputOptions = build.inputOptions;
                        console.error("\u001B[1m\u001B[31mError generating ".concat(inputOptions.input, "\u001B[0m"));
                        console.error("\u001B[2m".concat(e_1, "\u001B[0m"));
                        throw new Error(e_1.message);
                    }
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function runRollupTestBuilds() {
    return __awaiter(this, void 0, void 0, function () {
        var promises, _a, _b, _c, id, build, results;
        var e_2, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    promises = [];
                    try {
                        for (_a = __values(Object.entries(RollupTestBuilds)), _b = _a.next(); !_b.done; _b = _a.next()) {
                            _c = __read(_b.value, 2), id = _c[0], build = _c[1];
                            promises.push(rollupTestBuild(id, build));
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    return [4 /*yield*/, Promise.allSettled(promises)];
                case 1:
                    results = _e.sent();
                    return [2 /*return*/, results];
            }
        });
    });
}
runRollupTestBuilds();
