<template>
  <nav-bar></nav-bar>
  <div class="flex justify-start">
    <div v-if="backTab">
      <button class="focus:outline-none" @click="addTab">
        <p v-if="backTab" class="p-1 hover:bg-gray-500 hover:text-white rounded-lg">Add products</p>
      </button>
    </div>
    <div v-else>
      <button @click="back">
        <p
          v-if="!backTab"
          class="p-1 hover:bg-gray-500 hover:text-white rounded-lg"
        >Back to Products</p>
      </button>
    </div>
  </div>
  <component :is="showTab"></component>
</template>
<script>

import Addproducts from "@/components/Addproducts"
import showProducts from "@/components/showProducts"

export default {
  name: 'Products',
  components: {
    showProducts,
    Addproducts
  },
  data() {
    return {
      backTab: true,
      showTab: "showProducts"
    };
  },
  methods: {
    addTab() {
      this.backTab = false
      this.showTab = "Addproducts"
    },
    back() {
      this.showTab = "showProducts";
      this.backTab = true;
    }
  }
}

</script>