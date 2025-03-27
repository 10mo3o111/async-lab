import { defineConfig } from "vite";
import stylelint from "vite-plugin-stylelint";

export default defineConfig({
  base: "/async-lab/",
  plugins: [stylelint()],
});
