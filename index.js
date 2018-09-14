fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten')
.then( res => res.json())
.then( json => {
  app.jokes = json;
});

const getOneDadJoke = function() {
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      "accept": "application/json"
    }
  })
  .then( res => res.json())
  .then( json => {
    app.dadJokes.push(json);
    console.log(app.dadJokes)
  });
}

// const getMultipleDadJokes = (limit = 20) => {
//   fetch(`https://icanhazdadjoke.com/search?limit=${limit}`, {
//     headers: {
//       "accept": "application/json",
//     }
//   })
//   .then( res => res.json())
//   .then( json => {
//     app.dadJokes = json.results;
//     console.log(json)
//   });
// };

// getMultipleDadJokes(5);

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
  methods : {
    getOneDadJoke: getOneDadJoke
  }
})
