<template>
  <div>
    <div>
      <div>{{ userInfo.userName }}</div>
      <div>{{ userInfo.id }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import  { useUserStore } from '@/stores'

const userInfo = useUserStore().userInfo
</script>