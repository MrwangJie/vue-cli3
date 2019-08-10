<template>
  <div>
    <p>parent</p>
    <router-link :to="{name:'child'}">嵌套路由--子路由</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'parent'
}
</script>

<style lang="scss" scoped>

</style>
