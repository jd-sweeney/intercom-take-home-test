import rollupTypescript from '@rollup/plugin-typescript';

import { terser as rollupTerser } from 'rollup-plugin-terser';

const NODE_ENV = process.env.NODE_ENV || 'production';

const isProduction = NODE_ENV === 'production';

const plugins = [rollupTypescript()];

if (isProduction) {
  plugins.push(rollupTerser());
}

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.js',
      name: 'intercomGetCustomers',
      format: 'cjs',
    },
    plugins,
    external: ['fs', 'readline', 'events', 'camelcase-keys'],
  },
];
