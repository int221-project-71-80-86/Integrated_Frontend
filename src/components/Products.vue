<template>
<div>
  <nav-bar></nav-bar>
            <div id="store" class="w-full z-30 top-0 px-6 py-1">
                <div class="w-full container mx-auto flex flex-wrap items-center justify-end mt-0 px-2 py-3">
<div v-if="backTab">
                    <button class="focus:outline-none border-2 border-blue-700 rounded-full p-1 hover:bg-blue-700 hover:text-white mt-5 lg:48 mr-8" @click="addTab">
        <p v-if="backTab" class="p-1 hover:text-white">ADD PRODUCTS</p>
      </button>
</div>
  </div>
 </div>
  <component @back="back" @edit="editProduct" :isedit="isEdit" :product="passingProduct" :is="showTab"></component>
  </div>
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