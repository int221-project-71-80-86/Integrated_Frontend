<template>
    <div class="flex items-center min-h-screen bg-gray-600 dark:bg-gray-900">
        <div class="container mx-auto">
            <div class="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
                <div class="m-7">
                    <form @submit.prevent="submitForm">
                        <!-- prod Name -->
                        <div class="mb-6">
                            <label for="name" class="block mb-2 text-sm text-gray-600">Product Name</label>
                            <input
                                type="text"
                                name="name"
                                v-model="name"
                                id="name"
                                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                                require
                            />
                            <p v-if="invalidNameInput" class="text-red-500">Please, Enter your Name</p>
                        </div>

                        <!-- prod Date -->
                        <div class="mb-6">
                            <label
                                for="date"
                                class="block mb-2 text-sm text-gray-600"
                            >Manufacturer Date</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                min="2020-01-01"
                                max="2028-12-31"
                                v-model="date"
                            />
                            <p v-if="invalidDateInput" class="text-red-500">Please, Enter your Date</p>
                        </div>

                        <!-- prod Description -->
                        <div class="mb-6">
                            <label
                                for="description"
                                class="block mb-2 text-sm text-gray-600"
                            >Product Description</label>
                            <textarea
                                rows="5"
                                name="description"
                                id="description"
                                v-model="description"
                                placeholder="Enter Description"
                                class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                            ></textarea>

                            <p
                                v-if="invalidDescInput"
                                class="text-red-500"
                            >Please, Enter your Description</p>
                        </div>

                        <!-- brand -->
                        <div>
                            <div class="relative inline-flex pb-6">
                                <svg
                                    class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 412 232"
                                >
                                    <path
                                        d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                                        fill="#648299"
                                        fill-rule="nonzero"
                                    />
                                </svg>

                                <select
                                    id="brand"
                                    name="brand"
                                    v-model="brand"
                                    class="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                                >
                                    <option selected disabled hidden>Brand</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </div>
                            <p
                                v-if="invalidBrandInput"
                                class="text-red-500"
                            >Please, Enter your Brand</p>
                        </div>
                        <!-- choose file -->
                        <div id="mb-6 ">
                            <div v-if="!url">
                                <label for="file">Upload Image</label>
                                <div id="preview">
                                    <img
                                        class="rounded h-48 w-48 mx-auto my-8"
                                        v-if="url"
                                        :src="url"
                                    />
                                </div>
                                <input
                                    type="file"
                                    id="file"
                                    accept="image/*"
                                    name="file"
                                    class="text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                                    @change="loadFile"
                                />
                            </div>
                            <div v-else>
                                <img class="rounded h-48 w-48 mx-auto my-8" :src="url" />
                                <button
                                    @click="removeimg"
                                    class="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 focus:outline-none px-4 border-b-4 border-blue-dark hover:border-blue rounded"
                                >Remove image</button>
                            </div>
                            <p v-if="invalidFileInput" class="text-red-500">Please, Enter your File</p>
                        </div>
                        <!-- price -->
                        <div class="flex justify-center items-center my-6">
                            <label for="price" class="pl-4 block mb-2 text-sm text-gray-600">Price</label>
                            <input
                                type="text"
                                name="price"
                                id="price"
                                v-model="price"
                                class="mx-10 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                            />
                        </div>
                        <p v-if="invalidPriceInput" class="text-red-500">Please, Enter your Price</p>
                        <!-- warranty -->

                        <div class="flex flex-col my-4">
                            <p class="flex justify-start block text-sm text-gray-600">Warranty</p>
                            <label class="inline-flex items-center mt-3">
                                <input
                                    type="radio"
                                    class="form-checkbox h-5 w-5 text-gray-600"
                                    id="warranty"
                                    name="warranty"
                                    v-model="warranty"
                                    value="none"
                                />
                                <span class="ml-2 text-gray-700">None</span>
                            </label>
                            <label class="inline-flex items-center mt-3">
                                <input
                                    type="radio"
                                    class="form-checkbox h-5 w-5 text-gray-600"
                                    id="warranty"
                                    name="warranty"
                                    v-model="warranty"
                                    value="1"
                                />
                                <span class="ml-2 text-gray-700">1 Year</span>
                            </label>
                            <label class="inline-flex items-center mt-3">
                                <input
                                    type="radio"
                                    class="form-checkbox h-5 w-5 text-gray-600"
                                    id="warranty"
                                    name="warranty"
                                    v-model="warranty"
                                    value="2"
                                />
                                <span class="ml-2 text-gray-700">2 Years</span>
                            </label>
                            <p
                                v-if="invalidPriceInput"
                                class="text-red-500"
                            >Please, Enter your Price</p>
                        </div>

                      
                        <!-- submit -->
                        <div class="mb-6">
                            <button
                                type="submit"
                                class="w-40 px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                            >save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'addForm',
    data() {
        return {
            urlJson: "http://localhost:3000/surveyResults",
            url: null,
            name: null,
            date: null,
            description: "",
            price: null,
            brand: null,
            warranty: null,
            color: [],
            invalidNameInput: false,
            invalidDateInput: false,
            invalidDescInput: false,
            invalidPriceInput: false,
            invalidBrandInput: false,
            invalidFileInput: false,
            invalidWarrantyInput: false,
            surveyResults: [],
        };
    },
    methods: {
        loadFile(e) {
            let file = e.target.files[0];
            this.url = URL.createObjectURL(file);
        },
        removeimg() {
            this.url = null;
        },
        submitForm() {
            this.invalidNameInput = this.name === null ? true : false;
            this.invalidDateInput = this.date === null ? true : false;
            this.invalidDescInput = this.description === "" ? true : false;
            this.invalidPriceInput = this.price === null ? true : false;
            this.invalidBrandInput = this.brand === null ? true : false;
            this.invalidFileInput = this.url === null ? true : false;
            this.invalidWarrantyInput = this.warranty === null ? true : false;
            if ((!this.invalidNameInput && !this.invalidDateInput && !this.invalidDescInput && !this.invalidPriceInput && !this.invalidBrandInput && !this.invalidFileInput && !this.invalidWarrantyInput)) {
                {
                    this.addNewForm({
                        name: this.name,
                        date: this.date,
                        description: this.description,
                        price: this.price,
                        brand: this.brand,
                        warranty: this.warranty,
                        url: this.url
                    });
                }
            }
            this.name = null;
            this.date = null;
            this.description = "";
            this.price = null;
            this.brand = null;
            this.warranty = null;
        },
        async addNewForm(newForm) {
            try {
                const res = await fetch(this.urlJson, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: newForm.name,
                        date: newForm.date,
                        description: newForm.description,
                        price: newForm.price,
                        brand: newForm.brand,
                        url: newForm.url,
                        warranty: newForm.warranty,
                    })
                })
                const data = await res.json()
                this.surveyResults = [...this.surveyResults, data]
            } catch (error) {
                console.log(`Could not save! ${error}`)
            }
        },
        async deleteSurvey(deleteId) {
            try {
                await fetch(`${this.urlJson}/${deleteId}`, {
                    method: 'DELETE'
                })
                //filter - higher order function
                this.surveyResults = this.surveyResults.filter(
                    (survey) => survey.id !== deleteId
                )
            } catch (error) {
                console.log(`Could not delete! ${error}`)
            }
        },
    }
}
</script>