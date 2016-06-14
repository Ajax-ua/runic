import { HomeCtrl } from './home.controller';

angular
.module('astro.home', [])
.controller('HomeCtrl', HomeCtrl);

export let homeModel = 'astro.home';