import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

var filepath = fileURLToPath(import.meta.url);
var __dirname = path.dirname(filepath);
var context = '../';
function writeHTML(outputOptions) {
    if (outputOptions === void 0) { outputOptions = {}; }
    try {
        var contextPath = path.join(__dirname, context);
        var subpath = path.relative(outputOptions.sourceDir, outputOptions.src);
        var subdir = path.dirname(subpath);
        var ext = path.extname(subpath);
        var basename = path.basename(subpath, ext);
        var outputPath = path.join(contextPath, outputOptions.outputDir, subdir, "".concat(basename, ".html"));
        var outputDir = path.dirname(outputPath);
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }
        fs.writeFileSync(outputPath, outputOptions.content, 'utf8');
    }
    catch (e) {
        console.error('Could not output HTML for', outputOptions.src);
        console.error(e.message);
    }
}

export { writeHTML };
