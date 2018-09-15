fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten')
.then( res => res.json())
.then( json => {
  app.jokes = json;
});

const getOneRonQuote = () => {
  fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
  .then( res => res.json())
  .then( json => {
    app.ronQuotes.push(json[0])
  });
}

const getOneDadJoke = () => {
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      "accept": "application/json"
    }
  })
  .then( res => res.json())
  .then( json => {
    app.dadJokes.push(json);
  });
}

const clearPhrases = () => {
  app.dadJokes = [];
  app.ronQuotes = [];
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

const dadJoke = Vue.component('dad-joke', {
  props: ['joke'],
  template: '<div class="dad-joke quote">{{ joke }}</div>'
})

const ronQuote = Vue.component('ron-quote', {
  props: ['quote'],
  template: '<div class="ron-quote quote">{{ quote }}</div>'
})

const titleSection = Vue.component('title-section', {
  template: `
    <section id="title-section">
      <h1>Phrasing</h1>
      <button id="clear-button" v-on:click="clearPhrases">
        Clear
      </button>
    </section>`,
  methods: {
    clearPhrases: clearPhrases
  }
})

const app = new Vue({
  el: '#app',
  data: {
    jokes: [],
    dadJokes: [],
    ronQuotes: []
  },
  components: {
    dadJoke: dadJoke,
    titleSection: titleSection,
    ronQuote: ronQuote
  },
  methods: {
    getOneDadJoke: getOneDadJoke,
    getOneRonQuote: getOneRonQuote
  }
})
