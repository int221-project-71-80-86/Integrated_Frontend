<template>
  <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
    <div
      class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col"
      v-for="item in showproducts"
      :key="item.id"
    >
      <img class=" hover:grow hover:shadow-lg zoom w-80 h-80" :src="item.url" />
      <div class="pt-5 flex items-center justify-between">
        <p>{{ item.name }}</p>
      </div>
      <p>{{ item.description }}</p>
      <p>Warranty :{{ item.warranty }} years.</p>
      <p class="pt-1 text-gray-900">฿ {{ item.price }}</p>
      <div class="flex mt-6 items-center pb-5  mb-2">
      <div class="flex " v-for="color in item.colors" :key="color.id"> 
        <button class="ml-1  rounded-full w-6 h-6 focus:outline-none bg-black" v-if='color == "black" '></button>
        <button class="ml-1  rounded-full w-6 h-6 focus:outline-none bg-red-700" v-if='color == "red" '></button>
        <button class="ml-1  rounded-full w-6 h-6 focus:outline-none bg-blue-500" v-if='color == "blue" '></button>
        <button class="ml-1  rounded-full w-6 h-6 focus:outline-none bg-yellow-700" v-if='color == "yellow" '></button>
      </div>
    </div>

    <div calss="flex inline-flex">
   <button 
   class="inline-flex items-center justify-center w-10 h-10 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200"
   @click="oldProduct(item.id, item.name, item.date, item.description, item.price, item.brand, item.warranty, item.colors, item.url)">
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-5 17l1.006-4.036 3.106 3.105-4.112.931zm5.16-1.879l-3.202-3.202 5.841-5.919 3.201 3.2-5.84 5.921z"/></svg>
  </button>
  <button 
  class="inline-flex items-center justify-center w-10 h-10 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200"
  @click="deleteProduct(item.id)">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"/>
    </svg>
  </button>
  </div>

    </div>

    <div v-if="edit">
      <Addproducts
        :oldId="editId"  
        :oldName="name"
        :oldDate="date"
        :oldDescription="description"
        :oldPrice="price"
        :oldBrand="brand"
        :oldWarranty="warranty"
        :oldColors="colors"
        :oldUrl="url"

        @new-product="editProduct"

      ></Addproducts>
      </div>
  </div>
</template>

<script>

import Addproducts from "@/components/Addproducts"

export default {
  name: 'showProducts',
  components: {
     Addproducts
},

  data() {
    return {
      urlproduct: "http://localhost:3000/products",
      showproducts: [],
      edit:false,
      editId:null,
      url: null,
      name: null,
      date: null,
      description: "",
      price: null,
      brand: null,
      warranty: null,
      colors: [],
    }
  },
  methods: {
    async fetchProduct() {
      const res = await fetch(this.urlproduct);
      const data = await res.json();
      // parses JSON response into native JavaScript objects
      return data;
    },

    oldProduct(editId,name,date,description,price,brand,warranty,colors,url){
        this.edit = true;
        this.editId = editId
        this.name = name
        this.date = date
        this.description = description
        this.price = price
        this.brand = brand
        this.warranty = warranty
        this.colors= colors
        this.url= url
    },

    async editProduct(editingProduct) {
      try {
        const res = await fetch(`${this.urlproduct}/${editingProduct.id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            name: editingProduct.name,
            date: editingProduct.date,
            description: editingProduct.description,
            price: editingProduct.price,
            brand: editingProduct.brand,
            url: editingProduct.url,
            warranty: editingProduct.warranty,
            colors : editingProduct.colors
          })
        })
        const data = await res.json()
        this.showproducts = this.showproducts.map((Product) =>
          Product.id === data.id
            ? {
              ...Product, 
              name: data.name, 
              date: data.date, 
              description: data.description,
              price: data.price,
              brand: data.brand,
              url: data.url,
              warranty: data.warranty,
              colors: data.colors
}
            : Product
        )
        this.edit = false

      } catch (error) {
        console.log(`Could not edit! ${error}`)
      }
    },

    async deleteProduct(id) {
      if (confirm(`Are you sure to delete ?`)) {
        const res = await fetch(`${this.urlproduct}/${id}`, {
          method: 'DELETE'
        })
        res.status === 200
          ? (this.showproducts = this.showproducts.filter(
              (showproducts) => showproducts.id !== id
            ))
          : alert('Error to delete product')
      }
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