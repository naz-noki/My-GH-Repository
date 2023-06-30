<template>
    <div class="repos__search">
        <input 
        v-model="soughtRepository"
        class="repos__search__input"
        placeholder="Enter the repository you are looking for"
        type="text">
        <ul class="repos__search__list">
            <li 
            v-for="(repos, idx ) of suitableRepositorys"
            :key="idx"
            class="repos__search__item"
            >
                <a :href="repos.url" class="repos__search__item_link" target="_blank">
                    {{ repos.name }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">

    import { ref, computed, watch, } from 'vue';
    import { useStore } from 'vuex';

    import Trepos from "../types/Trepos";

    const store = useStore();

    const Repos = computed<Trepos>(()=>store.getters.getRepos);

    const soughtRepository = ref<string>('');
    let suitableRepositorys = ref<any>([]) as Trepos;

    watch(soughtRepository, ():Trepos=>{
        if(soughtRepository.value !== '') suitableRepositorys = Repos.value.filter(el => el.name.toUpperCase().includes(soughtRepository.value.toUpperCase()));
        else suitableRepositorys = [];
        return suitableRepositorys;
    })

</script>