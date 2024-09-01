/**
 * @jest-environment jsdom
 */

import path from 'path'

declare var describe: jest.Describe

describe('Handlebars Rollup Output', () => {
        
    it('should load simple handlebars templates', async () => {
        const modulePath = './dom-tests/simple.js'
        const module = await import(modulePath)
        const load = module.default
        const output = load && load()
        const catchOutput1 = output.includes("Title")
        const catchOutput2 = output.includes("A simple template")
        expect(catchOutput1 && catchOutput2).toBe(true)
    })

})