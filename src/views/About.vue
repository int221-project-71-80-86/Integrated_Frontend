<template>
<div class="bg-white">
<nav-bar class="-ml-10 bg-white"></nav-bar>
<div class="h-screen flex justify-center items-center " style="background-image:url('https://wallpapercave.com/wp/wp7563284.jpg')">
    <div class="bg-gray-900 text-white p-3 lg:w-1/4 sm:w-4/4 md:w-2/4 rounded text-center py-8 hover:shadow-md cursor-pointer ml-10 mb-20 zoom"
         v-for="members in member" :key="members.id">
        <div class="flex justify-center mb-2"> <img class="rounded-full h-24 w-24 flex items-center justify-center" :src="members.img"> </div>
        <h1 class="text-3xl">{{ members.fullname }}</h1> <span class="text-lg">{{ members.studentcode }}</span><br/> <span class="text-xl">{{ members.duty }}</span>
        <div class="mt-3"> <a href=""><i class="fa fa-facebook mr-2"></i></a> <a href=""><i class="fa fa-linkedin mr-2"></i></a> <a href=""><i class="fa fa-google mr-2"></i></a> <a href=""><i class="fa fa-instagram mr-2"></i></a> </div>
    </div>
</div>
</div>
</template>
<script>
  export default {
    name: 'about',

    data() {
      return{
      member: [{id:1,
                fullname:'Paksawat Rakthai',
                duty:'Front-End / Support',
                studentcode:'62130500071',
                img:'https://scontent.fkdt1-1.fna.fbcdn.net/v/t1.6435-9/90089361_2512863312361212_6000451341263044608_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8bfeb9&_nc_eui2=AeHXjpE1FN56MhF2ynlFfsUjlvzjgFxCzbuW_OOAXELNu2ftAzO4Upffd4b85aPriDSMjToYHLcxzahljt2P1H55&_nc_ohc=LjD_UWB3bw0AX-153b4&_nc_ht=scontent.fkdt1-1.fna&oh=59bafb65daaf73fe58bb11880f9c4b2b&oe=60A4DA03'},
                {id:2,
                fullname:'Varot Tirakhuntorn',
                duty:'Back-End / Support',
                studentcode:'62130500080',
                img:'https://scontent.fkdt1-1.fna.fbcdn.net/v/t1.6435-9/67694126_2293753384007480_1202710230085926912_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=174925&_nc_eui2=AeHmYh1wIbfV4PeUYcT8bzlsWXzrTQIKTupZfOtNAgpO6klggnGyyCD0OxTLpAfHPZw0oJraLPgmjHR9fViIdvWM&_nc_ohc=_MBQCd1mNjMAX89gvOr&_nc_ht=scontent.fkdt1-1.fna&oh=7e28ee2a44c8ee43b05d2e55ff7bec0a&oe=60A6C5FC'},
                {id:3,
                fullname:'Wuttichai Arayasook',
                duty:'Front-End / Support',
                studentcode:'62130500086',
                img:'https://scontent.fkdt1-1.fna.fbcdn.net/v/t1.6435-9/125204886_2860048507562862_641813009569281055_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEPd8oou2_O_op9UPTpBZGUFmbPqofn9PgWZs-qh-f0-IwtshLcQIR0buSksy7BYUwEmptZpXGcco0Uc4f_fycw&_nc_ohc=FrjzHM8MTOwAX9LVWBt&_nc_ht=scontent.fkdt1-1.fna&oh=6aef6173f8f3edc82bfc0b290e53afe8&oe=60A61FE5'}]
    }
    }
  }
</script>
<style scoped>
.zoom {
  transition: transform 0.3s,
}
.zoom:hover {
  transform: scale(1.15)
}

</style>