import { RollupTestBuilds, generateBundle, generateOutputs } from "./utils"
import { lookupHelperRegistration, lookupPartialRegistration } from "./utils/helpers"

declare var describe: jest.Describe

describe('Handlebars Plugin', () => {


    
    it('should bundle simple handlebars templates', async () => {
        
        const { bundle, error } = await generateBundle(RollupTestBuilds['simple'])
        if (!bundle || error) {
            if (error && error.message) fail(error.message)
            fail('No bundle generated')
        }
        
        const generated = await generateOutputs(bundle, RollupTestBuilds['simple'])
        if (generated.error) {
            if (error && error.message) fail(error.message)
            fail('Could not generate outputs')
        }
        const output = generated.outputs.length && generated.outputs[0]
        const catchOutput1 = output.includes("Title")
        const catchOutput2 = output.includes("A simple template")
        expect(bundle).toHaveProperty('generate')
        expect(catchOutput1 && catchOutput2).toBe(true)
    })

    
    
    it('properly catches errors in template syntax', async () => {
        
        const { bundle, error } = await generateBundle(RollupTestBuilds['invalid-syntax-error'])
        const catchError = error?.message.includes("Parse error")
        expect(catchError).toBe(true)
    })

    
    
    it('properly catches errors when unknown helper found', async () => {
        
        const { bundle, error } = await generateBundle(RollupTestBuilds['invalid-unknown-helpers'])
        const catchError = error?.message.includes("You specified knownHelpersOnly")
        expect(catchError).toBe(true)
    })

    
    
    it('allows specifying known helpers', async () => {
        
        const { bundle, error } = await generateBundle(RollupTestBuilds['with-known-helpers'])
        if (!bundle || error) {
            if (error && error.message) fail(error.message)
            fail('No bundle generated')
        }
        
        const generated = await generateOutputs(bundle, RollupTestBuilds['with-known-helpers'])
        if (generated.error) {
            if (error && error.message) fail(error.message)
            fail('Could not generate outputs')
        }
        const output = generated.outputs.length && generated.outputs[0]
        const catchResult = lookupHelperRegistration('someKnownHelper', output)
        expect(catchResult).toBe(true)
    })

    
    
    it('should be able to use commonJS helpers', async () => {
        
        const { bundle, error } = await generateBundle(RollupTestBuilds['with-helpers-commonjs'])
        if (!bundle || error) {
            if (error && error.message) fail(error.message)
            fail('No bundle generated')
        }
        
        const generated = await generateOutputs(bundle, RollupTestBuilds['with-helpers-commonjs'])
        if (generated.error) {
            if (error && error.message) fail(error.message)
            fail('Could not generate outputs')
        }
        const output = generated.outputs.length && generated.outputs[0]
        const catchOutput = lookupHelperRegistration('descriptionHelper', output)
        expect(catchOutput).toBe(true)
    })

    
    
    it('should be able to use block helpers', async () => {
        
        const { bundle, error } = await generateBundle(RollupTestBuilds['with-block-helpers'])
        if (!bundle || error) {
            if (error && error.message) fail(error.message)
            fail('No bundle generated')
        }
        
        const generated = await generateOutputs(bundle, RollupTestBuilds['with-block-helpers'])
        if (generated.error) {
            if (error && error.message) fail(error.message)
            fail('Could not generate outputs')
        }
        const output = generated.outputs.length && generated.outputs[0]
        const catchOutput = lookupHelperRegistration('list', output)
        expect(catchOutput).toBe(true)
    })

    
    
    it('should allow partials to be passed through the plugin options', async () => {
        
        const { bundle, error } = await generateBundle(RollupTestBuilds['with-plugin-partial'])
        if (!bundle || error) {
            if (error && error.message) fail(error.message)
            fail('No bundle generated')
        }
        
        const generated = await generateOutputs(bundle, RollupTestBuilds['with-plugin-partial'])
        if (generated.error) {
            if (error && error.message) fail(error.message)
            fail('Could not generate outputs')
        }
        const output = generated.outputs.length && generated.outputs[0]
        const catchOutput = lookupPartialRegistration('otherPartial', output)
        expect(catchOutput).toBe(true)
    })

    
    
    it('should allow partials to find multiple paths', async () => {
        
        const { bundle, error } = await generateBundle(RollupTestBuilds['with-dir-partials'])
        if (!bundle || error) {
            if (error && error.message) fail(error.message)
            fail('No bundle generated')
        }
        
        const generated = await generateOutputs(bundle, RollupTestBuilds['with-dir-partials'])
        if (generated.error) {
            if (error && error.message) fail(error.message)
            fail('Could not generate outputs')
        }
        const output = generated.outputs.length && generated.outputs[0]
        const catchOutput1 = lookupPartialRegistration('partialDirs/otherPartial', output)
        const catchOutput2 = lookupPartialRegistration('partialDirs/anotherDir/otherPartial', output)
        expect(catchOutput1 && catchOutput2).toBe(true)
    })

    
    
    it('should allow partials from ancestor directory', async () => {
        
        const { bundle, error } = await generateBundle(RollupTestBuilds['nested-templates/nested/with-ancestor-dir-partial'])
        if (!bundle || error) {
            if (error && error.message) fail(error.message)
            fail('No bundle generated')
        }
        
        const generated = await generateOutputs(bundle, RollupTestBuilds['nested-templates/nested/with-ancestor-dir-partial'])
        if (generated.error) {
            if (error && error.message) fail(error.message)
            fail('Could not generate outputs')
        }
        const output = generated.outputs.length && generated.outputs[0]
        const catchOutput = lookupPartialRegistration('../../some-partial', output)
        expect(catchOutput).toBe(true)
    })

    
    
    it('should allow partials from parent directory', async () => {
        
        const { bundle, error } = await generateBundle(RollupTestBuilds['nested-templates/with-parent-dir-partial'])
        if (!bundle || error) {
            if (error && error.message) fail(error.message)
            fail('No bundle generated')
        }
        
        const generated = await generateOutputs(bundle, RollupTestBuilds['nested-templates/with-parent-dir-partial'])
        if (generated.error) {
            if (error && error.message) fail(error.message)
            fail('Could not generate outputs')
        }
        const output = generated.outputs.length && generated.outputs[0]
        const catchOutput = lookupPartialRegistration('../some-partial', output)
        expect(catchOutput).toBe(true)
    })

    
    
    it('should allow partials from cousin directory', async () => {
        
        const { bundle, error } = await generateBundle(RollupTestBuilds['nested-templates/with-cousin-dir-partial'])
        if (!bundle || error) {
            if (error && error.message) fail(error.message)
            fail('No bundle generated')
        }
        
        const generated = await generateOutputs(bundle, RollupTestBuilds['nested-templates/with-cousin-dir-partial'])
        if (generated.error) {
            if (error && error.message) fail(error.message)
            fail('Could not generate outputs')
        }
        const output = generated.outputs.length && generated.outputs[0]
        const catchOutput = lookupPartialRegistration('../partialDirs/anotherDir/otherPartial', output)
        expect(catchOutput).toBe(true)
    })

    
    
    it('should use failover content of the partial block if it refers to non-existent partial', async () => {
        
        const { bundle, error } = await generateBundle(RollupTestBuilds['with-partial-block'])
        if (!bundle || error) {
            if (error && error.message) fail(error.message)
            fail('No bundle generated')
        }
        
        const generated = await generateOutputs(bundle, RollupTestBuilds['with-partial-block'])
        if (generated.error) {
            if (error && error.message) fail(error.message)
            fail('Could not generate outputs')
        }
        const output = generated.outputs.length && generated.outputs[0]
        const catchOutput = output.includes("<div>Failover</div>")
        expect(catchOutput).toBe(true)
    })

    
    
    it('should recognize and render inline partials', async () => {
        
        const { bundle, error } = await generateBundle(RollupTestBuilds['with-inline-partial'])
        if (!bundle || error) {
            if (error && error.message) fail(error.message)
            fail('No bundle generated')
        }
        
        const generated = await generateOutputs(bundle, RollupTestBuilds['with-inline-partial'])
        if (generated.error) {
            if (error && error.message) fail(error.message)
            fail('Could not generate outputs')
        }
        const output = generated.outputs.length && generated.outputs[0]
        const catchOutput = output.includes("printFoo")
        expect(catchOutput).toBe(true)
    })



})