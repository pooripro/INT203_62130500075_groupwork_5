app.component('count-photo', {
  props: ['count'],

  template:
    /*html*/`
    <div>
          <p> Number of Photos: <span class="mx-2 text-lg">{{ count }}</span>
          </p>
        </div>
    `
})

app.component('photo-set', {
  props: {
      photoset: Object,
      searchphotos: Boolean

  },

  template:
    /*html*/`
    <ul v-if="this.$emit('searchphotos') !== 0" class="grid grid-cols-2 gap-y-10 ml-10 lg:grid-cols-5">
        <li v-for="(photo, index) in photoset">
          <p class="text-lg font-semibold">{{ photo.title }}</p>
          <button @click="this.$emit('zoomphoto', index)"><img :src="photo.src" class="h-48 w-32"
              :alt="photo.title"></button>
          <div class="flex flex-row justify-start space-x-1">

            <p v-if="photo.like > 0">{{ photo.like }}
              <span>like</span>
            </p>

            <button @click="this.$emit('fav', index)" class=" focus:outline-none ">
              <svg class="" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>
      </ul>
      <ul v-else>
        <li>Not have any Photo</li>
      </ul>
    `
})