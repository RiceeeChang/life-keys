<template>
  <div class="form-radio">
    <input type="radio" :name="radioName" :value="radioValue" :id="radioValue" required>
    <label :for="radioValue">{{ radioLabel }}</label>
  </div>
</template>
<script>
export default {
  props: {
    radioName: {
      type: String,
      default: '',
      required: true,
    },
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
    font-weight: 400;
    margin: 0;
    line-height: 16px;
    margin-bottom: 2px;
  }
}
</style>
