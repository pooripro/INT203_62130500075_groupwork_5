const app = Vue.createApp({
    data() {
        return {
            msg: 'Hello & Welcome, Vue3',
            show: { icon: true, searchbar: false },
            input: '',
            select_image: false,
            photos: [{
                src: 'images/1.jpg',
                title: 'Autumn',
                favor: false,
                like: 0,
                zoom: false
            },
            {
                src: 'images/2.jpg',
                title: 'Hug & Love',
                favor: false,
                like: 0,
                zoom: false
            },
            {
                src: 'images/3.jpg',
                title: 'Good Night',
                favor: false,
                like: 0,
                zoom: false
            },
            {
                src: 'images/4.jpg',
                title: 'Architecture',
                favor: false,
                like: 0,
                zoom: false

            },
            {
                src: 'images/5.jpg',
                title: 'HarryPotter',
                favor: false,
                like: 0,
                zoom: false
            },
            {
                src: 'images/6.jpg',
                title: 'Building',
                favor: false,
                like: 0,
                zoom: false
            },
            {
                src: 'images/7.jpg',
                title: 'Mountain',
                favor: false,
                like: 0,
                zoom: false
            },
            {
                src: 'images/8.jpg',
                title: 'Oxygen',
                favor: false,
                like: 0,
                zoom: false
            },
            {
                src: 'images/9.jpg',
                title: 'Road',
                favor: false,
                like: 0,
                zoom: false
            },
            {
                src: 'images/10.jpg',
                title: 'Light',
                favor: false,
                like: 0,
                zoom: false
            }

            ],


        }
    },

    methods: {
        favorite(index) {
            this.photos[index].favor = !this.photos[index].favor
            this.photos[index].like = this.photos[index].like + 1
        },

        toggle(){
            this.show.icon = !this.show.icon
            this.show.searchbar = !this.show.searchbar
            this.input = ''
        },

        zoomPhoto(index){
            for (let i = 0; i < this.photos.length; i++) {
                if(i == index){
                    this.photos[i].zoom = true;
                    console.log('select :' + index);
                } else {
                    this.photos[i].zoom = false;
                }
            }
            this.select_image = true
        },

        closePhoto(){
            this.select_image = false
        },

        inputdata(p){
            this.input = p;
        }

    },

    computed: {
        searchphotos(){
                return this.photos.filter(c => {
                    return c.title.toLowerCase().includes(this.input.toLowerCase())
                })
            
        },

        countPhoto(){   
            return this.photos.length
        },

        searchSelectPhoto(){
            return this.photos.filter(c => c.zoom)
        }
    }   

 

})
