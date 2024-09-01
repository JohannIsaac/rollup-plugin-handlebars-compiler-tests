import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

import handlebars from 'rollup-plugin-handlebars-compiler';

import { OutputChunk, OutputOptions, rollup, RollupBuild, RollupOptions } from 'rollup';
import path from 'path';
import { fileURLToPath } from 'url';
const filepath = fileURLToPath(import.meta.url)
const __dirname = path.dirname(filepath)



type Build = {
    inputOptions: RollupOptions,
    outputOptionsList: OutputOptions[]
}

interface Builds {
    [key: string]: Build
}


console.log(filepath)
console.log(__dirname)



export const RollupTestBuilds: Builds = {
    'simple': {
        inputOptions: {
            input: path.join(__dirname, '../samples/js/simple.js'),
            plugins: [
                nodeResolve(),
                commonjs(),
                handlebars(),
            ]
        },
        outputOptionsList: [
            {
                dir: 'tests/browser/dom-tests',
                format: 'es', // Just use es to be used by Jest
            }
        ]
    },
}




export async function generateBundle(buildData: Build) {
    const { inputOptions } = buildData
	let bundle: RollupBuild | null;

    let error = null
	try {
		bundle = await rollup(inputOptions);
	} catch (e) {
		error = e
	}
    return { bundle, error}
}

export async function generateOutputs(bundle: RollupBuild, buildData: Build) {
    const { outputOptionsList } = buildData
    const outputs = []
	for (const outputOptions of outputOptionsList) {
		const { output } = await bundle.generate(outputOptions);

		for (const chunkOrAsset of output) {
            const { code } = chunkOrAsset as OutputChunk
            outputs.push(code)
		}
        
        writeBundle(bundle, buildData, outputOptions)
	}
    if (bundle) {
        bundle.close()
    }
    return outputs
}

export async function writeBundle(bundle: RollupBuild, buildData: Build, outputOptions: OutputOptions) {
    const inputName = buildData.inputOptions.input as string
    const basename = path.basename(inputName)
    const outputFile = outputOptions.dir
    try {
        await bundle.write(outputOptions)
        console.log('\x1b[36mGenerated', `${path.join(outputFile, basename)}\x1b[0m`)
    } catch (e) {
        console.error('Could not write', outputFile)
    }
}