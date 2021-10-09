<template>
  <button type="button" v-on="$listeners">
    <slot>
      title
    </slot>
  </button>
</template>

<script>
export default {
  name: "Btn"
};
</script>
