<script>
    import API from '../api/route.js';
    import {ref} from 'vue';
    const result = ref('');
    
    async function ListPeople(){
        result.value = await API.apiGetPeople();
        result.value.forEach(element => {
            console.log(element);
        });


        // console.log(result.value);
    }

    ListPeople();
</script>

<template>
    
</template>

<style scoped>

</style>