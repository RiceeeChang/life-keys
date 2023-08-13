<template>
  <div class="form-radio">
    <input type="radio" name="form-topic" :value="radioValue" :id="radioValue">
    <label :for="radioValue">{{ radioLabel }}</label>
  </div>
</template>
<script>
export default {
  props: {
    radioLabel: {
      type: String,
      default: "選項標籤",
      required: true,
    },
    radioValue: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.form-radio {
  display: flex;
  align-items: center;

  input {
    width: 16px;
    height: 16px;
    margin-right: 16px;

    accent-color: $main-color;
  }

  label {
    font-weight: 300;
    margin: 0;
    line-height: 16px;
    margin-bottom: 2px;
  }
}
</style>
