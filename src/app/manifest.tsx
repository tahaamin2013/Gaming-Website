export default function manifest() {
    return {
      name: "Starbucks Menu With Prices",
      short_name: "Starbucks",
      description: "Next.js App",
      start_url: "/",
      display: "standalone",
      //   background_color: '#fff',
      //   theme_color: '#fff',
      icons: [
        {
          src: "/icon.ico",
          sizes: "32x32",
          type: "image/png",
        },
        {
          src: "/icon.ico",
          sizes: "16x16",
          type: "image/png",
        },
        {
          src: "/icon.ico",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/icon.ico",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    };
  }