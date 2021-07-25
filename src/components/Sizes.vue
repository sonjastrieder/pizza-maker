<template>
  <div class="range">
    <input
      type="range"
      min="0"
      :max="options.length - 1"
      step="1"
      list="number"
      :value="selectionIndex"
      @change="handleChange"
    />
    <datalist id="number">
      <option v-for="size in options" :key="size.id">{{ size.size }}"</option>
    </datalist>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "Sizes",
  props: {
    selected: { type: String, default: "" },
    options: { type: Object, default: () => {} },
  },
  emits: ["change"],
  setup(props, { emit }) {
    const selectionIndex = computed(() => {
      return props.options.findIndex((size) => size.id === props.selected);
    });

    const handleChange = (event) => {
      const index = parseInt(event.target.value, 10);

      emit("change", props.options[index].id);
    };

    return {
      selectionIndex,
      handleChange,
    };
  },
};
</script>

<style scoped>
.range input {
  width: 100%;
}

.range datalist {
  display: flex;
  justify-content: space-between;
  height: auto;
  overflow: hidden;
}
</style>
