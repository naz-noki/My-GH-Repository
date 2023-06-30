<template>
    <div class="userRepos">
        <ul class="userRepos__list">
            <li 
            v-for="(rep, idx) of reposList" 
            :key="idx"
            class="userRepos__item"
            >
                <div class="userRepos__item_name">
                    <a :href="rep.url" class="userRepos__item_link" target="_blank">
                        {{ rep.name }}
                    </a>
                </div>
                <div class="userRepos__item_date">
                    <div class="userRepos__item_dateItem">
                        Created: 
                        {{ rep.dateCreated.split('').splice(0, 10).join('') }}
                    </div>
                    <div class="userRepos__item_dateItem">
                        Updated: 
                        {{ rep.dateUpdated.split('').splice(0, 10).join('') }}
                    </div>
                </div>
            </li>
        </ul>
        <ReposPagination :reposLength="Repos.length" @onPagination="pagination" />
    </div>
</template>

<script setup lang="ts">

    import { ref, computed, watch, onMounted, onUpdated } from 'vue';
    import { useStore } from 'vuex';

    import Trepos from "../types/Trepos";

    const store = useStore();

    const Repos = computed<Trepos>(()=>store.getters.getRepos);
    const reposList = ref<Trepos>([]);
    const minList = ref<number>(0);
    const maxList = ref<number>(13);

    const pagination = (min:number, max:number):void => {
        minList.value = min;
        maxList.value = max;
        reposList.value = [...Repos.value].slice(minList.value, maxList.value);
    }

    onMounted(():void=>{
        if(Repos.value.length === undefined){
            watch(Repos, ():void=>{
                reposList.value = [...Repos.value].slice(minList.value, maxList.value);
            })
        } else {
            setTimeout(():void=>{
                reposList.value = [...Repos.value].slice(minList.value, maxList.value);
            },999)
        }
    })

    onUpdated(():void=>{
        watch(Repos.value, ():void=>{
            reposList.value = [...Repos.value].slice(minList.value, maxList.value);
        })
    })

</script>