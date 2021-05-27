import path from 'path';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import kontra from 'rollup-plugin-kontra';
import babel from '@rollup/plugin-babel';
import { terser } from "rollup-plugin-terser";
import livereload from 'rollup-plugin-livereload'

module.exports = {
	input: path.join(__dirname, 'src', 'main.js'),
	output: {
		file: path.join(__dirname, 'public', 'bundle.js'),
		format: 'cjs',
		compact: 'true'
	},
	plugins: [
		nodeResolve(),
		commonjs(),
		kontra({
			gameObject: {
				velocity: true,
				rotation: true
			},
			vector: {
				length: true
			},
			debug: true
		}),
		babel({
			babelHelpers: 'bundled',
        	presets: [
          		[
            		'@babel/preset-env', {
              			"modules": false
            		}
          		]
        	],
        	babelrc: false,
        	exclude: 'node_modules/**'
      	}),
      	terser(),
      	livereload('public')
	],
};