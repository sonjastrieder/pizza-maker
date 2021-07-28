<template>
  <div :class="['Box', { 'has-footer': hasFooterSlot, [`Box--${variant}`]: variant }]">
    <div class="Box-content">
      <h2 v-if="title" class="Box-title u-typeLabel">{{ title }}</h2>
      <slot />
    </div>
    <div v-if="hasFooterSlot" class="Box-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    variant: {
      type: String,
      default: "",
      validator: (val) => ["", "bottom"].includes(val),
    },
  },
  setup(props, { slots }) {
    const hasFooterSlot = computed(() => {
      return !!slots.footer;
    });

    return { hasFooterSlot };
  },
};
</script>

<style lang="scss" scoped>
$_contentOffset: 2rem;

.Box {
  $root: &;

  position: relative;

  &-content,
  &-footer {
    padding: 2.5rem 2rem;
  }

  &-footer {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  &-content {
    width: clamp(18rem, 80vw, 24rem);
    border-radius: var(--radius);
    background-color: $c-white;
  }

  &-title {
    position: absolute;
    bottom: 100%;
  }

  &-footer {
    color: $c-white;
  }

  &.has-footer {
    margin-top: $_contentOffset + 4rem; // TODO: 2rem account for title only if it exists
    border-radius: var(--radius);
    background-color: $c-primary;

    #{$root} {
      &-content {
        margin: -$_contentOffset 0.125rem 0;
        padding-bottom: 1rem;
      }

      &-title {
        bottom: calc(100% + #{$_contentOffset});
      }
    }
  }

  // VARIANTS

  &--bottom {
    &.has-footer {
      border-bottom-right-radius: 0;
    }
  }

  @include media-breakpoint-up(sm) {
    &-content,
    &-footer {
      padding: 2.5rem 3rem;
    }

    &-footer {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
  }
}
</style>
