<template>
    <nav id="header" class="w-full -ml-14 z-30 top-0 py-1">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
            <label for="menu-toggle" class="cursor-pointer md:hidden block">
                <svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </label>
            <input class="hidden" type="checkbox" id="menu-toggle" />

            <div class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
                <nav>
                    <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
                        <router-link to="../views/"><li><a class="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="#">HOME</a></li></router-link>
                        <router-link to="../views/About"><li><a class="inline-block no-underline hover:text-black hover:underline py-2 px-4" href="#">ABOUT</a></li></router-link>
                    </ul>
                </nav>
            </div>

            <div class="order-1 md:order-2">
                <p class="flex items-center tracking-widest no-underline hover:no-underline font-bold text-gray-800 text-xl">
                    SHOES-STORE
                </p>
            </div>

            <div class="order-2 md:order-3 flex items-center" id="nav-content">

                <a class="pl-3 inline-block no-underline hover:text-black" href="#">
                    <router-link to="/cart"><svg class="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                        <circle cx="10.5" cy="18.5" r="1.5" />
                        <circle cx="17.5" cy="18.5" r="1.5" />
                    </svg></router-link>
                </a>

            </div>
        </div>
    </nav> 
</template>
<script>
    export default{
        name: 'Nav'
    }
</script>