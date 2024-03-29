import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-node";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ...mdsvexConfig.extensions],

    kit: {
        // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
        // If your environment is not supported or you settled on a specific environment, switch out the adapter.
        // See https://kit.svelte.dev/docs/adapters for more information about adapters.
        adapter: adapter(),
        alias: {
            $components: "src/components",
        },
        paths: {
            base: "/challenge",
        },
    },

    preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
};

export default config;
