<template>
    <select class="reposSort" v-model="typeOfSorting">
        <option hidden disabled selected class="reposSort_item">
            Sort by Alphabet
        </option>
        <option value="old" class="reposSort_item">
            Old ones first
        </option>
        <option value="new" class="reposSort_item">
            New ones first
        </option>
    </select>
</template>

<script setup lang="ts">

    import { ref, watch, } from 'vue';
    import { useStore } from 'vuex';

    const store = useStore();

    const typeOfSorting = ref<string>('Sort by Alphabet');

    watch(typeOfSorting, ()=>{
        store.dispatch('actReposSort', typeOfSorting.value);
    })

</script>