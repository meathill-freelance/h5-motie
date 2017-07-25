import Wukong from '../wukong';
import Player from '../wukong/player';

/* global DEV */

let wukong = new Wukong({
  loading: '#loading',
  progress: '#progress'
});

let assets = [
  [
    './img/homepage.png',
    './img/logo.png',
    './img/logos.png',
    './node_modules/director/build/director.min.js',
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/swiper/dist/css/swiper.min.css',
    './node_modules/swiper/dist/js/swiper.jquery.min.js',
    './css/screen.css',
    './img/logo-tushu.png',
    './img/logo-wenxue.png',
    './img/logo-yule.png',
    './img/about-bg.jpg',
    './img/ip-bg.jpg',
    './img/invitation.jpg',
    './img/haibao1.jpg',
    './img/haibao2.jpg',
    './img/haibao3.jpg',
    './img/haibao4.jpg',
  ]
];
if (!DEV) {
  assets.push('./dist/main.js');
}
wukong.load(assets);
new Player();