function unsplashImageLoader({ src }: { src: string }) {
  return `https://source.unsplash.com/random/?sig=${src}`;
}

export { unsplashImageLoader };
