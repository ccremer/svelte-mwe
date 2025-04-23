import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

import {
  kitRoutes,
  type Options,
  type RouteMappings,
} from "vite-plugin-kit-routes";

export const _kitRoutesConfig: Options<RouteMappings> = {
  trailingSlash: "always",
};

export default defineConfig({
  plugins: [tailwindcss(), sveltekit(), kitRoutes(_kitRoutesConfig)],
});
