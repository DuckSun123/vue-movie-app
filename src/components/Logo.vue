<template>
  <RouterLink
    to="/"
    class="logo">
    <span>OMDbAPI</span>.COM
  </RouterLink>
</template>

<style lang="scss" scoped>
.logo {
    font-family: "Oswald", sans-serif;
    font-size: 16px;
    color: $black;
    text-decoration: none;
    &:hover {
      color: $black;
    }
    span {
      color: $primary;
    }
  }
</style>