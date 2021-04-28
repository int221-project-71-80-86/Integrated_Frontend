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
    </div>
  </div>
</template>

<script>
export default {
  name: 'showProducts',
  data() {
    return {
      urlproduct: "http://localhost:3000/products",
      showproducts: []
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
  }
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