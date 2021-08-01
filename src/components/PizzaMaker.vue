<template>
  <form class="PizzaMaker" @submit.prevent>
    <UiBox class="PizzaMaker-inputs">
      <Logo class="PizzaMaker-logo" />
      <h1 class="u-typeH2 u-visuallyHidden">Parrot pizza maker</h1>
      <div class="PizzaMaker-desc"><p>Where the sauce is so good the cheese doesn't matter!</p></div>
      <OrderInputs />
    </UiBox>
    <UiBox class="PizzaMaker-details" title="Order details" variant="bottom">
      <OrderDetails />
      <template #footer>
        <div class="PizzaMaker-ctrls">
          <button class="PizzaMaker-btn btn btn-link u-colorInherit" @click="reset">Reset</button>
          <button class="PizzaMaker-btn btn btn-white" type="submit" @click="submit">Order now</button>
        </div>
      </template>
    </UiBox>
  </form>
  <Visualizer />
</template>

<script>
import { inject } from "vue";
import { PIZZA_STORE_KEY } from "@/common/constants";

import Logo from "@/components/Logo.vue";
import OrderInputs from "@/components/OrderInputs.vue";
import OrderDetails from "@/components/OrderDetails.vue";
import Visualizer from "@/components/Visualizer.vue";
import UiBox from "@/components/ui/Box.vue";

export default {
  components: { Logo, OrderInputs, OrderDetails, UiBox, Visualizer },
  async setup() {
    const { status, reset, selection } = inject(PIZZA_STORE_KEY);

    await status.value;

    const submit = () => {
      console.log("submit");
    };

    return {
      reset,
      submit,
      selection,
    };
  },
};
</script>

<style lang="scss" scoped>
$_logoOffset: 4rem;

.PizzaMaker {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  min-height: 100vh;

  @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  }

  &-inputs,
  &-details {
    flex-shrink: 0;
  }

  // Inputs

  &-inputs {
    position: relative;
    margin-top: 1rem + $_logoOffset;
  }

  &-logo {
    position: absolute;
    top: -$_logoOffset;
    left: 50%;
    right: 0;
    width: 11.875rem;
    transform: translateX(-50%);
  }

  &-desc {
    max-width: 30ch;
    margin-top: 1rem;
    margin-bottom: 1.75rem;
  }

  // Details

  &-details {
    align-self: flex-end;
  }

  &-ctrls {
    display: flex;
    justify-content: flex-end;

    :deep(.btn-link) {
      text-decoration: none;

      &,
      &:hover {
        color: inherit;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &-btn {
    & + & {
      margin-left: 0.5rem;
    }
  }

  @include media-breakpoint-up(md) {
    justify-content: space-between;
  }
}
</style>
