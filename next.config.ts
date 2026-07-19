import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder project previews are local SVGs — safe to render inline.
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
  },
};

export default nextConfig;
