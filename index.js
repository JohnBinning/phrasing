
fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten')
  .then( res => res.json())
  .then( json => {
    app.jokes = json;
  });


const app = new Vue({
  el: '#app',
  data: {
    jokes: [
      { 
        setup: 'setup line1',
        punchline: 'punch line1'
      },
      { 
        setup: 'setup line2',
        punchline: 'punch line2'
      },
      { 
        setup: 'setup line3',
        punchline: 'punch line3'
      },
    ]
  }
})