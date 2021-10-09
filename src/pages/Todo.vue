<template>
  <div>
    <btn @click="handleClick">click</btn>
  </div>
</template>

<script>
export default {
  name: "Todo",
  data: () => ({
    process
  }),
  methods: {
    handleClick() {
      this.fetch();
    },
    async fetch() {
      const response = await this.$api.get("store/getStore", { params: { name: "todo" } });

      console.log(response.data.data);
    }
  }
}
</script>
