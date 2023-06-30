<template>
        <div class="userPage__info">
            <div class="userPage__block">
                <img :src="User.avatar" alt="" class="userPage__avatar">
                <div class="userPage__name">
                    {{ User.name }}
                </div>
                <a :href="User.html_url" class="userPage__login" target="_blank">
                    {{ User.login }}
                </a>
                <div class="userPage__follow">
                    <div class="userPage__followers">followers: {{User.followers}}</div>
                    <div class="userPage__following">following: {{ User.following }}</div>
                </div>
            </div>
            <div class="userPage__additionally">
                Company: <br>
                {{ User.company }}
            </div>
            <div class="userPage__additionally">
                Biography:  <br>
                {{ User.bio }}
            </div>
        </div>
</template>

<script setup lang="ts">

    import { computed, } from 'vue';
    import { useStore } from 'vuex';

    import Iuser from '../types/Iuser';

    const store = useStore();

    const User = computed<Iuser>(()=>store.getters.getUser);
    
</script>