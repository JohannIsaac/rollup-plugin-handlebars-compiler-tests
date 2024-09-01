import { __awaiter, __generator } from 'tslib';
import { writeHTML } from './utils/helpers.test.js';

/**
 * @jest-environment jsdom
 */
describe('Handlebars Rollup Output', function () {
    it('should render simple handleabrs template', function () { return __awaiter(void 0, void 0, void 0, function () {
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
                    writeHTML({
                        src: modulePath,
                        sourceDir: './dom-tests',
                        outputDir: 'results',
                        content: output
                    });
                    expect(catchOutput1 && catchOutput2).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('allows specifying known helpers', function () { return __awaiter(void 0, void 0, void 0, function () {
        var modulePath, module, load, output, catchOutput;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    modulePath = './dom-tests/with-known-helpers.js';
                    return [4 /*yield*/, import(modulePath)];
                case 1:
                    module = _a.sent();
                    load = module.default;
                    output = load && load();
                    catchOutput = output.includes("some known helper");
                    writeHTML({
                        src: modulePath,
                        sourceDir: './dom-tests',
                        outputDir: 'results',
                        content: output
                    });
                    expect(catchOutput).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should be able to use commonJS helpers', function () { return __awaiter(void 0, void 0, void 0, function () {
        var modulePath, module, load, output, catchOutput;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    modulePath = './dom-tests/with-helpers-commonjs.js';
                    return [4 /*yield*/, import(modulePath)];
                case 1:
                    module = _a.sent();
                    load = module.default;
                    output = load && load();
                    catchOutput = output.includes("Description Description");
                    writeHTML({
                        src: modulePath,
                        sourceDir: './dom-tests',
                        outputDir: 'results',
                        content: output
                    });
                    expect(catchOutput).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should be able to use block helpers', function () { return __awaiter(void 0, void 0, void 0, function () {
        var modulePath, module, load, output, catchOutput1, catchOutput2, catchOutput3, catchOutput4, catchOutput5, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    modulePath = './dom-tests/with-block-helpers.js';
                    return [4 /*yield*/, import(modulePath)];
                case 1:
                    module = _a.sent();
                    load = module.default;
                    output = load && load();
                    catchOutput1 = output.includes('<ul>');
                    catchOutput2 = output.includes('<li>Yehuda Katz</li>');
                    catchOutput3 = output.includes('<li>Carl Lerche</li>');
                    catchOutput4 = output.includes('<li>Alan Johnson</li>');
                    catchOutput5 = output.includes('</ul>');
                    result = catchOutput1 && catchOutput2 && catchOutput3 && catchOutput4 && catchOutput5;
                    writeHTML({
                        src: modulePath,
                        sourceDir: './dom-tests',
                        outputDir: 'results',
                        content: output
                    });
                    expect(result).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should allow partials to be passed through the plugin options', function () { return __awaiter(void 0, void 0, void 0, function () {
        var modulePath, module, load, output, catchOutput;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    modulePath = './dom-tests/with-plugin-partial.js';
                    return [4 /*yield*/, import(modulePath)];
                case 1:
                    module = _a.sent();
                    load = module.default;
                    output = load && load();
                    catchOutput = output.includes("<p>another: Description</p>");
                    writeHTML({
                        src: modulePath,
                        sourceDir: './dom-tests',
                        outputDir: 'results',
                        content: output
                    });
                    expect(catchOutput).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should allow partials to find multiple paths', function () { return __awaiter(void 0, void 0, void 0, function () {
        var modulePath, module, load, output, catchOutput1, catchOutput2, catchOutput3, catchOutput4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    modulePath = './dom-tests/with-dir-partials.js';
                    return [4 /*yield*/, import(modulePath)];
                case 1:
                    module = _a.sent();
                    load = module.default;
                    output = load && load();
                    catchOutput1 = output.includes("<h1>Title</h1>");
                    catchOutput2 = output.includes("<p>Description</p>");
                    catchOutput3 = output.includes("<p>Other: Description</p>");
                    catchOutput4 = output.includes("<p>another: Description</p>");
                    writeHTML({
                        src: modulePath,
                        sourceDir: './dom-tests',
                        outputDir: 'results',
                        content: output
                    });
                    expect(catchOutput1 && catchOutput2 && catchOutput3 && catchOutput4).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should allow partials from ancestor directory', function () { return __awaiter(void 0, void 0, void 0, function () {
        var modulePath, module, load, output, catchOutput;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    modulePath = './dom-tests/nested-templates/nested/with-ancestor-dir-partial.js';
                    return [4 /*yield*/, import(modulePath)];
                case 1:
                    module = _a.sent();
                    load = module.default;
                    output = load && load();
                    catchOutput = output.includes("<p>Description</p>");
                    writeHTML({
                        src: modulePath,
                        sourceDir: './dom-tests',
                        outputDir: 'results',
                        content: output
                    });
                    expect(catchOutput).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should allow partials from parent directory', function () { return __awaiter(void 0, void 0, void 0, function () {
        var modulePath, module, load, output, catchOutput;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    modulePath = './dom-tests/nested-templates/with-parent-dir-partial.js';
                    return [4 /*yield*/, import(modulePath)];
                case 1:
                    module = _a.sent();
                    load = module.default;
                    output = load && load();
                    catchOutput = output.includes("<p>Description</p>");
                    writeHTML({
                        src: modulePath,
                        sourceDir: './dom-tests',
                        outputDir: 'results',
                        content: output
                    });
                    expect(catchOutput).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should allow partials from cousin directory', function () { return __awaiter(void 0, void 0, void 0, function () {
        var modulePath, module, load, output, catchOutput;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    modulePath = './dom-tests/nested-templates/with-cousin-dir-partial.js';
                    return [4 /*yield*/, import(modulePath)];
                case 1:
                    module = _a.sent();
                    load = module.default;
                    output = load && load();
                    catchOutput = output.includes("<p>another: Description</p>");
                    writeHTML({
                        src: modulePath,
                        sourceDir: './dom-tests',
                        outputDir: 'results',
                        content: output
                    });
                    expect(catchOutput).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should use failover content of the partial block if it refers to non-existent partial', function () { return __awaiter(void 0, void 0, void 0, function () {
        var modulePath, module, load, output, catchOutput;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    modulePath = './dom-tests/with-partial-block.js';
                    return [4 /*yield*/, import(modulePath)];
                case 1:
                    module = _a.sent();
                    load = module.default;
                    output = load && load();
                    catchOutput = output.includes("<div>Failover</div>");
                    writeHTML({
                        src: modulePath,
                        sourceDir: './dom-tests',
                        outputDir: 'results',
                        content: output
                    });
                    expect(catchOutput).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should recognize and render inline partials', function () { return __awaiter(void 0, void 0, void 0, function () {
        var modulePath, module, load, output, catchOutput;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    modulePath = './dom-tests/with-inline-partial.js';
                    return [4 /*yield*/, import(modulePath)];
                case 1:
                    module = _a.sent();
                    load = module.default;
                    output = load && load();
                    catchOutput = output.includes("Foo");
                    writeHTML({
                        src: modulePath,
                        sourceDir: './dom-tests',
                        outputDir: 'results',
                        content: output
                    });
                    expect(catchOutput).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
});
