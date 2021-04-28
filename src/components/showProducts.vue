<template>
  <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
    <div
      class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col"
      v-for="item in showproducts"
      :key="item.id"
    >
      <img class="hover:grow hover:shadow-lg zoom" :src="item.url" />
      <div class="pt-5 flex items-center justify-between">
        <p>{{ item.name }}</p>
      </div>
      <p>{{ item.description }}</p>
      <p>Warranty :{{ item.warranty }} years.</p>
      <p class="pt-1 text-gray-900">฿ {{ item.price }}</p>
      <div class="flex mt-6 items-center pb-5  mb-5">
      <div class="flex " v-for="color in item.colors" :key="color.id"> 
        <button class="ml-1  rounded-full w-6 h-6 focus:outline-none bg-black" v-if='color == "black" '></button>
        <button class="ml-1  rounded-full w-6 h-6 focus:outline-none bg-red-700" v-if='color == "red" '></button>
        <button class="ml-1  rounded-full w-6 h-6 focus:outline-none bg-blue-500" v-if='color == "blue" '></button>
        <button class="ml-1  rounded-full w-6 h-6 focus:outline-none bg-yellow-700" v-if='color == "yellow" '></button>
      </div>
</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'showProducts',
  data() {
    return {
      urlproduct: "http://localhost:3000/products",
      showproducts: [],
      test: " "
    }
  },
  methods: {
    async fetchProduct() {
      const res = await fetch(this.urlproduct);
      const data = await res.json();
      // parses JSON response into native JavaScript objects
      return data;
    },
  },
  async created() {
    this.showproducts = await this.fetchProduct();
  },

}

</script>

<style scoped>
.zoom {
  transition: transform 0.3s;
}
.zoom:hover {
  transform: scale(1.07);
}
</style>