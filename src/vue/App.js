import Vue from 'vue';

Vue.component('App', {
  template: '<div id="app__vue">Hello, I\'m {{ name }}.</div>',
  data: function () {
    return {
      name: 'Vue'
    }
  }
});

var VueApp = Vue.extend({
  template: '<App/>',
})
new VueApp({ el: '#app__vue' });
