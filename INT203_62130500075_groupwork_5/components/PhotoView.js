app.component('select-photo', {
    props: {
        select: Object,
        selectstatus: Boolean
    },

    template:
    /*html*/`
    <div v-if="selectstatus" class="w-full h-full bg-black">
        <div v-for="(photo, index) in select" class="ml-96 flex flex-row">
          <img :src="photo.src" class="w-1/5 h-4/5 ml-52">
          <button><span @click="this.$emit('closephoto')" v-if="selectstatus == true" class="material-icons bg-white ml-2 mb-96">
            close
          </span></button>
        </div>
    `
})