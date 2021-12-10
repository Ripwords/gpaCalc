<script lang="ts" setup>
const props = defineProps<{ menu?: Boolean, title?: Boolean }>()
const withTitle = props.title === false ? props.title : true
const showMenu = props.menu === false ? props.menu : true
</script>

<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start" v-if="showMenu">
        <ion-menu-button>
          <i-ion:menu></i-ion:menu>
        </ion-menu-button>
      </ion-buttons>
      <ion-title v-if="withTitle">
        <slot></slot>
      </ion-title>
      <slot v-else></slot>
    </ion-toolbar>
  </ion-header>
</template>