function unsplashImageLoader({ src }: { src: string }) {
  return `https://source.unsplash.com/random/?programmer,code,sig=${src}`;
}

export { unsplashImageLoader };
