export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  image: {
    service: 'compile',
  },
});


