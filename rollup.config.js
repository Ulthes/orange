import typescript from '@rollup/plugin-typescript';

export default {
  input: 'api/app.ts',
  output: {
    dir: 'dist',
    format: 'es'
  },
  plugins: [typescript()]
};