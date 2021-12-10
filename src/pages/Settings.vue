<script lang="ts" setup>
const gradeScaleOpen = ref(false)
const gpaScaleOpen = ref(false)
</script>

<template>
  <ion-page>
    <ion-modal
      :is-open="gradeScaleOpen"
      @didDismiss="gradeScaleOpen = false"
    >
      <Modal 
        @dismiss="gradeScaleOpen = false"
        title="Grade Scale"
      >
        <gradingScale></gradingScale>
      </Modal>
    </ion-modal>
    <ion-modal
      :is-open="gpaScaleOpen"
      @didDismiss="gpaScaleOpen = false"
    >
      <Modal 
        @dismiss="gpaScaleOpen = false"
        title="GPA Scale"
      >
        <gpaScale></gpaScale>
      </Modal>
    </ion-modal>
    <ion-content>
      <Toolbar>
        Settings
      </Toolbar>
      <ion-list>
        <ion-item @click="gradeScaleOpen = true">
          Grading Scale
        </ion-item>
        <ion-item @click="gpaScaleOpen = true">
          GPA Scale
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>