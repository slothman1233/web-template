<template>
  <div>
    <HelloWorld :msg="msg"></HelloWorld>

    <!-- <a-button>Add</a-button> -->

    <a-affix>a-affix</a-affix>

    <a-alert>a-alert</a-alert>

    <VanButton type="primary">asdfasd</VanButton>

    <ElFooter></ElFooter>

    <a-message>12312</a-message>
    <a-notification>asdfas</a-notification>
  </div>

  <div>
    <SvgIcon icon-class="a-bug"></SvgIcon>
    <SvgIcon icon-class="projectManage"></SvgIcon>
  </div>
</template>

<script lang="ts">
  import HelloWorld from 'comps/HelloWorld.vue';
  import { propType } from './model';

  const scope = effectScope();

  const sr = scope.run(() => {
    const double = computed(() => 2);

    return { double };
  });

  export default defineComponent({
    name: 'ViewsHome',
    components: { HelloWorld },
    setup(props: propType, ctx) {
      return {
        msg: 'hel2lo World',
      };
    },
  });
</script>

<style lang="less">
  body {
    display: flex;
  }
</style>
