import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Change your life", "Drink up"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
