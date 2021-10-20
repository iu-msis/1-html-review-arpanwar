
const SomeApp = {
    data() {
      return {
        person: {},
        books: [],
        booksForm:{}

      }
    },
    computed: {
        prettyBirthday() {
            return dayjs(this.person.dob.date)
            .format('D MMM YYYY')
        }
    },
    methods: {
        fetchUserData() {
            fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then((json) => {
                this.person = json.results[0];
            })
            .catch( (error) => {
                console.error(error);
            });
        },
        fetchBooksData() {
            fetch('/api/books/index.php')
            .then(response => response.json())
            .then((json) => {
                this.books=json;
            })
            .catch( (error) => {
                console.error(error);
            });
        },
        
        postNewBook(evt) {            
            fetch('api/books/create.php', {
                method:'POST',
                body: JSON.stringify(this.booksForm),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
                
                // reset the form
                this.booksForm = {};
              });
          }
    },
    created() {
        this.fetchUserData();
        this.fetchBooksData();
    }

  }
  
  Vue.createApp(SomeApp).mount('#someApp');