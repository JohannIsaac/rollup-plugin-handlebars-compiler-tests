import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url';
const filepath = fileURLToPath(import.meta.url)
const __dirname = path.dirname(filepath)

const context = '../'

const ws = "[\\n\\r\\s]*"
const q = `["']`

export function lookupPartialRegistration(partialName: string, code: string) {
    const searchRegex = new RegExp(`Handlebars${ws}\\.registerPartial${ws}\\(${ws}${q}${partialName}${ws}${q}`)
    const result = searchRegex.test(code)
    return result
}

export function lookupHelperRegistration(helperName: string, code: string) {
    const searchRegex = new RegExp(`Handlebars${ws}\\.registerHelper${ws}\\(${ws}${q}${helperName}${ws}${q}`)
    const result = searchRegex.test(code)
    if (helperName === 'description') {
        console.log(result, searchRegex)
        console.log(code)
    }
    return result
}

type OutputOptions = {
    src?: string,
    sourceDir?: string,
    outputDir?: string,
    content?: string
}

export function writeHTML(outputOptions: OutputOptions = {}) {
    try {
        const contextPath = path.join(__dirname, context)

        const subpath = path.relative(outputOptions.sourceDir, outputOptions.src)
        const subdir = path.dirname(subpath)
        const ext = path.extname(subpath)
        const basename = path.basename(subpath, ext)
        const outputPath = path.join(contextPath, outputOptions.outputDir, subdir, `${basename}.html`)
        const outputDir = path.dirname(outputPath)

        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true })
        }
        fs.writeFileSync(outputPath, outputOptions.content, 'utf8')
    } catch (e) {
        console.error('Could not output HTML for', outputOptions.src)
        console.error(e.message)
    }
}