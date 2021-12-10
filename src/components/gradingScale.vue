<script lang="ts" setup>
import { mainStore } from '../store'

const store = mainStore()
const gradingScale = computed(() => store.gradingScale)
const editScale = () => {
  return
}
</script>

<template>
  <ion-card class="px-2 py-2">
    <ion-list>
      <ion-item v-for="scale in gradingScale" :key="scale.grade"
        @click="editScale()"
      >
        <ion-label slot="start">{{ scale.grade }}</ion-label>
        <ion-label slot="end">{{ scale.range[0] }}-{{ scale.range[1] }}%</ion-label>
      </ion-item>
    </ion-list>
  </ion-card>
</template>