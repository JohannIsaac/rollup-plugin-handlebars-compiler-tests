import { RollupTestBuilds, generateBundle, generateOutputs } from "./utils/index"

async function runRollupTestBuilds() {
    try {
        const { bundle, error } = await generateBundle(RollupTestBuilds['simple'])
        if (!bundle) {
            if (error) throw new Error(error)
            throw new Error('No bundle generated')
        }
        await generateOutputs(bundle, RollupTestBuilds['simple'])
    } catch (e) {
        console.error(e)
    }
}
runRollupTestBuilds()