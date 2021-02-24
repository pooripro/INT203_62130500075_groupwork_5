app.component('photo-search',{
    props: {
        search: Object,
        selecticon: Boolean,
        selectbar: Boolean
    },

    template:
    /*html*/`
        <span v-if="selecticon" @click="this.$emit('toggle')" class="material-icons">
          search
        </span>
        
        <div v-if="selectbar">
          <input v-model="input"
            class="ml-2 p-1 w-80 placeholder-gray-500 placeholder-opacity-50 focus:outline-none text-black rounded-sm"
            type="text" placeholder="Please enter text for searching photos">
          <button class="ml-2 p-1 rounded-sm focus:outline-none bg-blue-500" @click="this.$emit('toggle')">Cancel</button>
        </div>
    `
    
    


})