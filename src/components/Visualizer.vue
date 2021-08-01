<template>
  <div class="Visualizer" aria-hidden="true">
    <div class="Visualizer-base" :style="`--crust-deg: ${360 - size * 20}deg; --crust-scale: ${1 + (size / 100) * 5};`">
      <img class="Visualizer-base-sauce" src="@/assets/pizza/sauce.svg" alt="" />
      <img class="Visualizer-base-crust" :src="getImageUrl(crust.image)" alt="" />
    </div>
    <template v-for="topping in selectedToppings" :key="topping.id">
      <div
        v-for="index in getRandomInt(8, 12)"
        :key="`${topping.id}${index}`"
        class="Visualizer-topping"
        :style="`
              --topping-x: ${getRandomInt(0, 100)}%;
              --topping-y: ${getRandomInt(0, 100)}%;
              --topping-deg: ${getRandomInt(-200, 360)}deg;
              --topping-speed: ${getRandomInt(25, 75) / 100}s;
              `"
      >
        <img class="Visualizer-topping-img" :src="getImageUrl(topping.image)" alt="" />
      </div>
    </template>
  </div>
</template>

<script>
import { computed, inject, onBeforeUpdate } from "vue";
import { PIZZA_STORE_KEY, SEED } from "@/common/constants";
import mulberry32 from "@/common/mulberry32";

export default {
  setup() {
    const { summary } = inject(PIZZA_STORE_KEY);

    const crust = computed(() => {
      return summary.value.crust;
    });

    const size = computed(() => {
      return summary.value.size.size;
    });

    const selectedToppings = computed(() => {
      return summary.value.toppings;
    });

    let random = mulberry32(SEED);

    onBeforeUpdate(() => {
      random = mulberry32(SEED);
    });

    const getRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);

      return Math.floor(random() * (max - min) + min);
    };

    function getImageUrl(path) {
      return new URL(`../assets/${path}`, import.meta.url).href;
    }

    return { crust, size, selectedToppings, getRandomInt, getImageUrl };
  },
};
</script>

<style lang="scss" scoped>
.Visualizer {
  position: fixed;
  z-index: -1;
  top: 2%;
  left: 0;
  right: 0;
  bottom: 0;

  &-topping {
    position: absolute;
    top: var(--topping-y);
    left: var(--topping-x);
    width: clamp(4.5rem, 10%, 12vh);
    animation: dumpTopping var(--topping-speed) ease;

    &-img {
      width: 100%;
      transform: rotate(var(--topping-deg));
    }
  }

  &-base {
    position: absolute;
    right: 10%;
    bottom: 0%;
    display: grid;
    grid-template-areas: "content";
    width: min(70vh, 65%);
    aspect-ratio: 1 / 1;

    &-crust,
    &-sauce {
      grid-area: content;
      width: 100%;
      margin-top: auto;
      transform: rotate(var(--crust-deg)) scale(var(--crust-scale), var(--crust-scale));
      transition: transform 0.25s ease-out;
    }
  }
}
</style>
