import nextMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: "dracula",
  keepBackground: false,
  defaultLang: "typescript",
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  async redirects() {
    return [
      {
        source: "/content",
        destination: "/",
        permanent: true,
      },
      {
        source: "/content/:slug*",
        destination: "/:slug*",
        permanent: true,
      },
      {
        source: "/type-vs-interface-deep-dive",
        destination: "/type-vs-interface",
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);
