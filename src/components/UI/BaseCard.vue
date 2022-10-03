<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0 1rem 1rem 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
div:hover{
  box-shadow: 0 24px 24px rgba(0, 0, 0, 0.26);
}
</style>