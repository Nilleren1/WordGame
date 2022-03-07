Vue.createApp({
    data() {
        return {


            word: null, //A single word
            words: [], //empty array
            message3: null, //the message to write to the screen when the user click the Show button
            errormessage: null,
            
            wordLower: null,
            wordUpper: null,
            wordCap: null,
            wordEndCap: null,
            reversed: null

           
        }
    },
    methods: {


        saveButton(word) {
            if (word) {
                this.words.push(word)
                this.errormessage = null
                this.wordLower = word.toLowerCase()
                this.wordUpper = word.toUpperCase()
                this.wordCap = word.charAt(0).toUpperCase() + word.slice(1)
                this.wordEndCap = word.slice(0, word.length-1) + word.charAt(word.length-1).toUpperCase()

                let reversed = ""
                for (let index = word.length-1; index >=0; index--) {
                    reversed += word.charAt(index);
                    
                }
                this.reversed = reversed;
            }
            else
            this.errormessage ="Write a word"
            
        },
        
        showButton() {
            this.message3 = "Here you see the word(s): " + this.words
            
        },

        clearButton() {
            this.words = [],
            this.message3 = "" + this.words
            
        }
        
    }
    // Registering and mounting our app
}).mount("#app")