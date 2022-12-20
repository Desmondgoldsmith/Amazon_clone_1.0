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
      "m.media-amazon.com","g-ec2.images-amazon.com"
    ]
  },

  env:{
     stripe_public_key:process.env.STRIPE_PUBLIC_KEY
  }
}


