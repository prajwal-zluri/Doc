import nextra from "nextra";

const withNextra = nextra({
  // ... Other Nextra config options
});

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  reactStrictMode: true,
  eslint: {
    // ESLint behaves weirdly in this monorepo.
    ignoreDuringBuilds: true,
  },
});
