<script lang="ts" setup>
const props = defineProps<{ title: String }>()
const emits = defineEmits(["dismiss"])
const dismiss = () => emits('dismiss')
</script>

<template>
  <Toolbar :menu="false" :title="false">
      <ion-title>{{ props.title }}</ion-title>
      <ion-buttons class="ion-padding" slot="end">
        <ion-button @click="dismiss()">
          Close
        </ion-button>
      </ion-buttons>
  </Toolbar>
  <ion-content class="ion-padding">
    <slot></slot>
  </ion-content>
</template>

<style scoped>
ion-button:hover {
  color: var(--ion-color-primary)
}
</style>