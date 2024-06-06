<template>
  <div>
    <div> x: {{ x }} y: {{ y }} </div>
    <div>qslist</div>
    <div> 12321 </div>
    <div>{{ str }}</div>
    <div>
      <cpmDemo></cpmDemo>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { propType } from './model';
  import cpmDemo from './components/cpmDemo/index.vue';
  // import { useMouse, createSharedComposable } from '@vueuse/core';
  import { useSharedMouse } from '@/common/hook/useShareMouse';
  import { useWebWorkerFn } from '@vueuse/core';
  // import { useWebWorkerFn } from '@vueuse/core';
  export default defineComponent({
    name: 'qsList',
    components: { cpmDemo },
    setup(props: propType, ctx) {
      const str = ref('fff');
      // const useShareMouse = createSharedComposable(useMouse);
      const { x, y } = useSharedMouse();

      const { workerFn, workerStatus, workerTerminate } = useWebWorkerFn(() => {
        return '4343';
      });

      onMounted(async () => {
        str.value = await workerFn();
      });

      return { x, y, str };
    },
  });
</script>

<style lang="less">
  body {
    display: flex;
  }
</style>
