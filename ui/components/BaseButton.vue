<script>
export default {
    props: {
        /**
         * If set, the button renders an <a> element instead of a <button> element
         * Has no effect when used together with `to`.
         */
        href: {
            type: String,
            default: ''
        },
        /**
         * If set, the button renders a <nuxt-link> instead of a <button> element.
         * Supersedes the `href` property.
         */
        to: {
            type: String,
            default: ''
        },
        /**
         * toggle to prevent default click handler
         */
        preventDefault: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        onClick(e) {
            /**
             * Click event. Fired when the button is clicked.
             *
             * @event click
             */
            this.$emit('click', e);
            if (this.preventDefault) {
                e.preventDefault();
            }
        },
        // This can be called from outside via focus on a $ref
        focus() {
            this.$el.focus();
        }
    }
};
</script>

<template>
  <!-- see https://stackoverflow.com/a/41476882/5134084 for the `.native` in `@click.native`  -->
  <nuxt-link
    v-if="to"
    :to="to"
    :event="preventDefault ? [] : 'click'"
    @click.native="onClick"
  >
    <slot />
  </nuxt-link>
  <!-- Note: @click events also fire on keyboard activation via Enter -->
  <a
    v-else-if="href"
    :href="href"
    @click="onClick"
  >
    <slot />
  </a>
  <!-- Note: @click events also fire on keyboard activation via Space -->
  <button
    v-else
    @click="onClick"
  >
    <slot />
  </button>
</template>
