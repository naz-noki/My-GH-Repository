<template>
    <div>
        <button class="GetStarted" @click="onGetStarted">
          <div class="GetStarted__text">
            Get Started!
          </div>
        </button>
    </div>
</template>

<script setup lang="ts">

    import { onMounted, onUnmounted, computed, } from 'vue';
    import { useStore } from 'vuex';

    import onGetStarted from '../mixins/onGetStarted';

    const store = useStore();

    onMounted(():void=>{
      window.addEventListener('scroll', () => {
        store.dispatch('actVisibilityGetUser');
      });
    })

    onUnmounted(():void=>{
      window.removeEventListener('scroll', () => {
        store.dispatch('actVisibilityGetUser');
      });
    })

</script>