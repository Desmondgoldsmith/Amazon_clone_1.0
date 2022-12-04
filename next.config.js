/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    appDir: true,
  },
}

module.exports = {
  images: {
    domains:[
      "pngimg.com","fakestoreapi.com","etc.usf.edu","raw.githubusercontent.com","images-na.ssl-images-amazon.com",
      "m.media-amazon.com"
    ]
  }
}


