if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let r={};const a=e=>i(e,l),c={module:{uri:l},exports:r,require:a};s[l]=Promise.all(n.map((e=>c[e]||a(e)))).then((e=>(o(...e),r)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/apple-app-store-CVyK0T4N.svg",revision:null},{url:"assets/chicago.legislation-_PSXVUBJ.js",revision:null},{url:"assets/chicago.legislation.gpt-C0JfMM5_.js",revision:null},{url:"assets/google-play-DVbUjTfg.svg",revision:null},{url:"assets/il-DCZaFQXe.svg",revision:null},{url:"assets/illinois.legislation-BolMqakV.js",revision:null},{url:"assets/illinois.legislation.gpt-CFWIGzpp.js",revision:null},{url:"assets/index-BrtmsgUr.css",revision:null},{url:"assets/index-DdvWPGkM.js",revision:null},{url:"assets/usa.legislation-DZQvsIeF.js",revision:null},{url:"assets/usa.legislation.gpt-aJz9OFyz.js",revision:null},{url:"assets/windy-civi-logo-BWlJP5ej.png",revision:null},{url:"favicon.ico",revision:"3f431448c67c4718a1fcedd83ea11178"},{url:"icons/android-chrome-192x192.png",revision:"00a361763b1e6efd3a621deca863adf0"},{url:"icons/android-chrome-512x512.png",revision:"bd6d1229e6e86ac9ba363cced8700bf4"},{url:"icons/apple-touch-icon-180x180.png",revision:"3feeb83a8e4daf1220d302dfd3a9d552"},{url:"icons/apple-touch-icon.png",revision:"0ee39dd15bb7b9bdad13de8570bdab41"},{url:"icons/favicon-16x16.png",revision:"727ee7784083d02eaca355fc20ac28ce"},{url:"icons/favicon-32x32.png",revision:"530b534d8cacec0765039c9c7b833e9f"},{url:"icons/favicon.ico",revision:"e05c293c481fd5a29b9ab85d272c0332"},{url:"icons/maskable-icon-512x512.png",revision:"bbcf28d4471b18a52371b5cadacbd855"},{url:"icons/pwa-192x192.png",revision:"873ba9de9680937f608284a2f5ac2c36"},{url:"icons/pwa-512x512.png",revision:"87df5bdf2a9b0be8b840ec1e6c71e32d"},{url:"icons/pwa-64x64.png",revision:"ecaf458062444defc4fd35a365144e49"},{url:"index.html",revision:"0425b436001fb4a106048a74271ea013"},{url:"privacy.html",revision:"bb6ebb9f7b7c10201e2c77a781aad901"},{url:"screenshots/desktop.png",revision:"724b5c43894a5b24d3c590afdde936df"},{url:"screenshots/mobile.png",revision:"d8cfe4869ad4b16cb307846db3ba5bd6"},{url:"support.html",revision:"af414d83651d57f4c3dc9e657e9ad687"},{url:"manifest.webmanifest",revision:"664c8cd2d7e229b14235ea787e8c669b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
