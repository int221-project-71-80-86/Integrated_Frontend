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
  <component @back="back" @edit="editProduct" :isedit="isEdit" :product="passingProduct" :is="showTab"></component>
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
      showTab: "showProducts",
      passingProduct: null,
      isEdit: false
    };
  },
  methods: {
    addTab() {
      this.isEdit = false;
      this.backTab = false
      this.showTab = "Addproducts"
    },
    back() {
      this.isEdit = false;
      this.passingProduct = null;
      this.showTab = "showProducts";
      this.backTab = true;
    },
    editProduct(product) {
      this.isEdit = true;
      this.passingProduct = product
      this.backTab = false
      this.showTab = "Addproducts"
    }
  }
}

</script>