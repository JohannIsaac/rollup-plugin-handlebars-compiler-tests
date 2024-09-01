import { RollupOptions } from "rollup"
import { Build, RollupTestBuilds, generateBundle, generateOutputs, writeBundles } from "./utils"

async function rollupTestBuild(id: string, build: Build) {
    try {
        const { bundle, error } = await generateBundle(build)
        if (!bundle) {
            if (error) throw new Error(error)
            throw new Error('No bundle generated')
        }
        await writeBundles(bundle, build)
        return 
    } catch (e) {
        if (!build.ignoreError) {
            const inputOptions = build.inputOptions as RollupOptions
            console.error(`\x1b[1m\x1b[31mError generating ${inputOptions.input}\x1b[0m`)
            console.error(`\x1b[2m${e}\x1b[0m`)
            throw new Error(e.message)
        }
    }
}

async function runRollupTestBuilds() {
    let promises = []
    
    for (let [id, build] of Object.entries(RollupTestBuilds)) {
        promises.push(rollupTestBuild(id, build))
    }

    let results = await Promise.allSettled(promises)
    return results
}
runRollupTestBuilds()