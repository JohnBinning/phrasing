
fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten')
.then( res => res.json())
.then( json => {
  app.jokes = json;
});

fetch(' https://icanhazdadjoke.com/', {
  headers: {
    "accept": "application/json"
  }
})
.then( res => res.json())
.then( json => {
  app.dadJokes.push(json);
  console.log(json.joke)
});

var dadJoke = Vue.component('dad-joke', {
  props: ['joke'],
  template: '<div class="dad-joke">{{ joke }}</div>'
});

const app = new Vue({
  el: '#app',
  data: {
    jokes: [],
    dadJokes: []
  },
  components: {dadJoke: dadJoke},
})
