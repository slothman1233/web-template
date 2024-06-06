<template>
  <div>cpmDome</div>
  <div> xx: {{ x }} yy: {{ y }} </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { propType } from './model';
  // import { createSharedComposable, useMouse } from '@vueuse/core';
  import { useSharedMouse } from '@/common/hook/useShareMouse';
  export default defineComponent({
    name: 'cpmDome',
    setup(props: propType, ctx) {
      // const useShareMouse = createSharedComposable(useMouse);
      const { x, y } = useSharedMouse();
      return { x, y };
    },
  });
</script>

<style lang="less">
  body {
    display: flex;
  }
</style>
