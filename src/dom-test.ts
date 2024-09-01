/**
 * @jest-environment jsdom
 */

import { writeHTML } from './utils/helpers'

declare var describe: jest.Describe

describe('Handlebars Rollup Output', () => {

    it('should render simple handleabrs template', async () => {
        const modulePath = './dom-tests/simple.js'
        const module = await import(modulePath)
        const load = module.default
        const output = load && load()
        const catchOutput1 = output.includes("Title")
        const catchOutput2 = output.includes("A simple template")
        writeHTML({
            src: modulePath,
            sourceDir: './dom-tests',
            outputDir: 'results',
            content: output
        })
        expect(catchOutput1 && catchOutput2).toBe(true)
    })

    it('allows specifying known helpers', async () => {
        const modulePath = './dom-tests/with-known-helpers.js'
        const module = await import(modulePath)
        const load = module.default
        const output = load && load()
        const catchOutput = output.includes("some known helper")
        writeHTML({
            src: modulePath,
            sourceDir: './dom-tests',
            outputDir: 'results',
            content: output
        })
        expect(catchOutput).toBe(true)
    })

    it('should be able to use commonJS helpers', async () => {
        const modulePath = './dom-tests/with-helpers-commonjs.js'
        const module = await import(modulePath)
        const load = module.default
        const output = load && load()
        const catchOutput = output.includes("Description Description")
        writeHTML({
            src: modulePath,
            sourceDir: './dom-tests',
            outputDir: 'results',
            content: output
        })
        expect(catchOutput).toBe(true)
    })

    it('should be able to use block helpers', async () => {
        const modulePath = './dom-tests/with-block-helpers.js'
        const module = await import(modulePath)
        const load = module.default
        const output = load && load()
        const catchOutput1 = output.includes('<ul>')
        const catchOutput2 = output.includes('<li>Yehuda Katz</li>')
        const catchOutput3 = output.includes('<li>Carl Lerche</li>')
        const catchOutput4 = output.includes('<li>Alan Johnson</li>')
        const catchOutput5 = output.includes('</ul>')
        const result = catchOutput1 && catchOutput2 && catchOutput3 && catchOutput4 && catchOutput5
        writeHTML({
            src: modulePath,
            sourceDir: './dom-tests',
            outputDir: 'results',
            content: output
        })
        expect(result).toBe(true)
    })

    it('should allow partials to be passed through the plugin options', async () => {
        const modulePath = './dom-tests/with-plugin-partial.js'
        const module = await import(modulePath)
        const load = module.default
        const output = load && load()
        const catchOutput = output.includes("<p>another: Description</p>")
        writeHTML({
            src: modulePath,
            sourceDir: './dom-tests',
            outputDir: 'results',
            content: output
        })
        expect(catchOutput).toBe(true)
    })

    it('should allow partials to find multiple paths', async () => {
        const modulePath = './dom-tests/with-dir-partials.js'
        const module = await import(modulePath)
        const load = module.default
        const output = load && load()
        const catchOutput1 = output.includes("<h1>Title</h1>")
        const catchOutput2 = output.includes("<p>Description</p>")
        const catchOutput3 = output.includes("<p>Other: Description</p>")
        const catchOutput4 = output.includes("<p>another: Description</p>")
        writeHTML({
            src: modulePath,
            sourceDir: './dom-tests',
            outputDir: 'results',
            content: output
        })
        expect(catchOutput1 && catchOutput2 && catchOutput3 && catchOutput4).toBe(true)
    })

    it('should allow partials from ancestor directory', async () => {
        const modulePath = './dom-tests/nested-templates/nested/with-ancestor-dir-partial.js'
        const module = await import(modulePath)
        const load = module.default
        const output = load && load()
        const catchOutput = output.includes("<p>Description</p>")
        writeHTML({
            src: modulePath,
            sourceDir: './dom-tests',
            outputDir: 'results',
            content: output
        })
        expect(catchOutput).toBe(true)
    })

    it('should allow partials from parent directory', async () => {
        const modulePath = './dom-tests/nested-templates/with-parent-dir-partial.js'
        const module = await import(modulePath)
        const load = module.default
        const output = load && load()
        const catchOutput = output.includes("<p>Description</p>")
        writeHTML({
            src: modulePath,
            sourceDir: './dom-tests',
            outputDir: 'results',
            content: output
        })
        expect(catchOutput).toBe(true)
    })

    it('should allow partials from cousin directory', async () => {
        const modulePath = './dom-tests/nested-templates/with-cousin-dir-partial.js'
        const module = await import(modulePath)
        const load = module.default
        const output = load && load()
        const catchOutput = output.includes("<p>another: Description</p>")
        writeHTML({
            src: modulePath,
            sourceDir: './dom-tests',
            outputDir: 'results',
            content: output
        })
        expect(catchOutput).toBe(true)
    })

    it('should use failover content of the partial block if it refers to non-existent partial', async () => {
        const modulePath = './dom-tests/with-partial-block.js'
        const module = await import(modulePath)
        const load = module.default
        const output = load && load()
        const catchOutput = output.includes("<div>Failover</div>")
        writeHTML({
            src: modulePath,
            sourceDir: './dom-tests',
            outputDir: 'results',
            content: output
        })
        expect(catchOutput).toBe(true)
    })

    it('should recognize and render inline partials', async () => {
        const modulePath = './dom-tests/with-inline-partial.js'
        const module = await import(modulePath)
        const load = module.default
        const output = load && load()
        const catchOutput = output.includes("Foo")
        writeHTML({
            src: modulePath,
            sourceDir: './dom-tests',
            outputDir: 'results',
            content: output
        })
        expect(catchOutput).toBe(true)
    })

})