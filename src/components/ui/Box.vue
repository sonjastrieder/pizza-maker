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
$_offset: 2rem;

.Box {
  $root: &;

  position: relative;
  width: clamp(18rem, 80vw, 24rem);
  margin-top: $_offset;
  margin-bottom: $_offset;
  border-radius: var(--radius);
  box-shadow: 0 2px 26px 0px rgba(black, 0.12);

  &-content,
  &-footer {
    padding: 2.5rem 12%;
    border-radius: var(--radius);
  }

  &-content {
    position: relative;
    z-index: 10;
    background-color: $c-white;
  }

  &-title {
    position: absolute;
    bottom: 100%;
  }

  &-footer {
    color: $c-white;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-top: -5rem;
    margin-left: -0.125rem;
    margin-right: -0.125rem;
    padding-top: 6rem;
    background-color: $c-primary;
  }

  // HAS

  &.has-footer {
    border-radius: var(--radius);

    #{$root} {
      &-content {
        padding-bottom: 1rem;
      }
    }
  }

  // VARIANTS

  &--bottom {
    &.has-footer {
      margin-bottom: 0;

      #{$root} {
        &-footer {
          border-bottom-right-radius: 0;
        }
      }
    }
  }

  @include media-breakpoint-up(sm) {
    &-content,
    &-footer {
      padding-left: 3rem;
      padding-right: 3rem;
    }
  }
}
</style>
