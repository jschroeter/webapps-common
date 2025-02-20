<script>
let labelForId = 0;
/**
 * Default label component
 * It provides a `labelForId` property that can be used via slot prop destructuring to associate it with a form element
 * like so:
 *
 * @example
 *   <Label v-slot="{ labelForId }">
 *     <input :id="labelForId">
 *   </Label>
 *
 * Now, the labelForId is guaranteed to be a unique id, and when the `label` HTML element's `for` attribute is the same
 * as the input's `id`.
 */
export default {
    inject: {
        compactLabels: { // provided e.g. by Fieldset.vue
            default: false
        }
    },
    props: {
        generateId: {
            type: Boolean,
            default: true
        },
        idPrefix: {
            type: String,
            default: 'comp'
        },
        text: {
            default: '',
            type: String
        },
        /**
         * smaller font size and margin
         */
        compact: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        labelFor() {
            if (this.generateId) {
                return `${this.idPrefix}-${this.labelForId}`;
            }
            return null;
        },
        labelId() {
            if (this.generateId) {
                return `label-${this.labelFor}`;
            }
            return null;
        },
        isCompact() {
            return this.compact || this.compactLabels;
        }
    },
    beforeCreate() {
        labelForId += 1;
        this.labelForId = labelForId;
    }
};
</script>

<template>
  <div class="label-wrapper">
    <label
      :id="labelId"
      :for="labelFor"
      :class="['label-text', {compact: isCompact}]"
      v-text="text"
    />
    <slot :labelForId="labelFor" />
  </div>
</template>

<style lang="postcss" scoped>
.label-wrapper {
  margin-top: 0;
}

.label-text {
  font-weight: 700;
  font-size: 16px;
  font-family: var(--theme-text-bold-font-family);
  color: var(--theme-text-bold-color);
  line-height: 20px;
  display: block;
  width: max-content;
  margin-bottom: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 100%;

  &.compact {
    font-weight: 500;
    font-size: 13px;
    font-family: var(--theme-text-medium-font-family);
    color: var(--theme-text-medium-color);
    line-height: 18px;
    margin-bottom: 3px;
  }
}
</style>
