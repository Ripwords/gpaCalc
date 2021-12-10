<template>
  <ion-split-pane content-id="main-content" when="md">
    <ion-menu content-id="main-content">
      <Toolbar>
        <ion-title>
          <i-ion:university class="transform translate-y-6px"></i-ion:university>
          gpaCalc
        </ion-title>
      </Toolbar>
      <Menu></Menu>
    </ion-menu>
    <ion-router-outlet id="main-content"></ion-router-outlet>
  </ion-split-pane>
</template>