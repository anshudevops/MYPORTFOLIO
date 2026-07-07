import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite"; // 1. Add this import

export default defineConfig({
  tanstackStart: {
    server: {
      entry: "server",
    },
  },
  vite: {
    plugins: [
      nitro({
        preset: "vercel", // 2. Add the Vercel preset plugin here
      }),
    ],
  },
});
