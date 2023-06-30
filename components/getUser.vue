<template>
    <div v-if="visibilityGetUser" class="getUser">
      <div class="getUser__info" :class="{fadeInDown: visibilityGetUser, fadeOutUp: !visibilityGetUser,}">
        Enter the user's name, go to his profile and enjoy the user's public repositories:
      </div>
      <div class="getUser__block" :class="{fadeInUp: visibilityGetUser, fadeOutDown : !visibilityGetUser,}">
        <input 
        v-model="userName"
        type="text" 
        class="getUser__inp" 
        placeholder="Enter the user name">
        <button class="searchUser__btn" @click="setUserName">
          <img class="searchUser__img" src="../public/img/searchUser__img.png" alt="">
        </button>
      </div>
    </div>
</template>

<script setup lang="ts">

    import { ref, computed, } from 'vue';
    import { useStore } from 'vuex';    
    import { useRouter } from 'vue-router';

    const store = useStore();   
    const router = useRouter();

    const userName = ref<string>('');

    const visibilityGetUser = computed<boolean>(()=>store.getters.getVisibilityGetUser);

    const setUserName = ():void => {
        if(userName.value){
            store.dispatch('actUser', userName.value);
            store.dispatch('actRepos', userName.value);
            router.push(`${userName.value}`);
        }
    }

</script>