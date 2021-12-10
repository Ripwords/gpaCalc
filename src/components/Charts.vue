<script lang="ts" setup>
import Chart from "chart.js/auto"

const props = defineProps<{ config: any }>()
const chart = ref<any>(null)

onMounted(() => {
  const ctx = chart.value.getContext("2d")
  new Chart(ctx, props.config)
})
</script>

<template>
  <div class="p-6 responsive">
    <canvas ref="chart"></canvas>
  </div>
</template>