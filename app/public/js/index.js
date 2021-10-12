
const SomeApp = {
    data() {
      return {
        person: {},
        books: []
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
            fetch('/api/books')
            .then(response => response.json())
            .then((json) => {
                this.books=json;
            })
            .catch( (error) => {
                console.error(error);
            });
        }
        
    },
    created() {
        this.fetchUserData();
        this.fetchBooksData();
    }

  }
  
  Vue.createApp(SomeApp).mount('#someApp');