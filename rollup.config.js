import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/server.ts",
  output: {
    dir: "dist",
    format: "es",
    sourcemap: true,
  },
  external: ["express"],
  plugins: [typescript()],
};
