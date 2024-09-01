import { RollupTestBuilds, generateBundle, generateOutputs } from "./utils"

declare var describe: jest.Describe

describe('Handlebars Plugin', () => {
        
    it('should bundle simple handlebars templates', async () => {
        const { bundle, error } = await generateBundle(RollupTestBuilds['simple'])
        if (!bundle) {
            if (error && error.message) throw new Error(error.message)
            throw new Error('No bundle generated')
        }
        const outputs = await generateOutputs(bundle, RollupTestBuilds['simple'])
        const output = outputs.length && outputs[0]
        const catchOutput1 = output.includes("Title")
        const catchOutput2 = output.includes("A simple template")
        expect(bundle).toHaveProperty('generate')
        expect(catchOutput1 && catchOutput2).toBe(true)
    })

})