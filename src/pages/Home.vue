<script lang="ts" setup>
const lineConf = {
  type: "line",
  data: {
    labels: [
      "Y1S1",
      "Y1S2",
      "Y1S3"
    ],
    datasets: [{
      label: "CGPA",
      data: [3.67, 4.00, 3.7],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.2
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
}
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <Toolbar>
          Home
        </Toolbar>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-card class="m-5">
        <Charts class="sm:h-50vh" :config="lineConf" />
      </ion-card>
    </ion-content>
  </ion-page>
</template>