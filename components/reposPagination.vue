<template>
        <ul class="reposPagination">
            <li 
            v-for="(num, idx) of btnLength"
            :key="idx"
            class="reposPagination__item"
            >
                <button 
                @click="onPagination(num)"
                class="reposPagination__btn"
                >
                    {{ num }}
                </button>
            </li>
        </ul>
</template>

<script setup lang="ts">

    import { computed, } from 'vue';

    const props = defineProps(['reposLength',]);
    const emits = defineEmits(['onPagination',]);

    const btnLength = computed<number[]>(()=>{
        const arry:number[] = [];
        for(let i = 1; i <= Math.ceil(props.reposLength/13); i++) arry.push(i);
        return arry;
    });

    let min:number = 0;
    let max:number = 13;
    
    const onPagination = (num:number):void => {
        min = 13*(num-1);
        max = 13*num;
        emits('onPagination', min, max);
    }
    
</script>