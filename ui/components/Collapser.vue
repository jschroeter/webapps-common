<script>
import DropdownIcon from '../assets/img/icons/arrow-dropdown.svg?inline';
import BaseButton from './BaseButton';

export default {
    components: {
        DropdownIcon,
        BaseButton
    },
    props: {
        /**
         * if the initial state is expanded
         */
        initiallyExpanded: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isExpanded: this.initiallyExpanded
        };
    },
    methods: {
        onBeforeEnter(el) {
            consola.trace(`Collapser: setting height to 0px before expanding`);
            el.style.height = 0;
        },
        onEnter(el) {
            consola.trace(`Collapser: expanding to ${el.scrollHeight}px`);
            el.style.height = `${el.scrollHeight}px`;
        },
        onAfterEnter(el) {
            consola.trace(`Collapser: fully expanded, removing fixed height`);
            el.style.height = '';
        },
        onBeforeLeave(el) {
            consola.trace(`Collapser: setting height to ${el.scrollHeight}px before collapsing`);
            el.style.height = `${el.scrollHeight}px`;
            // force repaint to trigger animation correctly
            getComputedStyle(el).height; // eslint-disable-line no-unused-expressions
        },
        onLeave(el) {
            consola.trace(`Collapser: setting height to 0px to trigger collapsing`);
            el.style.height = 0;
        },
        onTrigger(e) {
            this.isExpanded = !this.isExpanded;
        }
    }
};
</script>

<template>
  <div>
    <!-- ".left" needed to prevent firing two events when hitting space -->
    <BaseButton
      class="button"
      :aria-expanded="String(isExpanded)"
      @click.prevent="onTrigger"
    >
      <!-- @slot title slot -->
      <slot name="title" />
      <div class="dropdown">
        <DropdownIcon :class="['dropdown-icon', {flip: isExpanded}]" />
      </div>
    </BaseButton>
    <Transition
      name="expand"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @before-leave="onBeforeLeave"
      @leave="onLeave"
      @after-enter="onAfterEnter"
    >
      <div
        v-show="isExpanded"
        class="panel"
      >
        <!-- @slot Panel content goes into default slot -->
        <slot />
      </div>
    </Transition>
  </div>
</template>

<style lang="postcss" scoped>
.button {
  position: relative;
  padding: 0;
  font-size: 18px;
  line-height: 26px;
  font-weight: bold;
  background-color: transparent;
  border: 0;
  outline: none;
  -webkit-appearance: none;
  color: inherit; /* Safari needs this */
  width: 100%;
  text-align: left;
  cursor: pointer;

  & >>> svg {
    position: absolute;
    margin-right: 4px;
    float: left;
    margin-left: 4px;
    top: 17px;
  }

  & .dropdown {
    text-align: center;
    position: absolute;
    right: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    top: 13px;

    &:hover {
      background-color: var(--theme-button-function-background-color-hover);
    }

    & .dropdown-icon {
      position: relative;
      margin: auto;
      width: 18px;
      height: 18px;
      stroke-width: calc(32px / 18);
      stroke: var(--knime-masala);
      top: 0;
      transition: transform 0.4s ease-in-out;

      &.flip {
        transform: scaleY(-1);
      }
    }
  }

  &:focus .dropdown { /* whole button gets focus but only dropdown icon is styled */
    background-color: var(--theme-button-function-background-color-focus);
  }
}

>>> ul,
>>> ol {
  margin: 0;
  padding-left: 40px;
}

.panel {
  transition: height 0.4s ease-in-out;
  overflow: hidden;
}
</style>
