<script>
import CodeExample from './demo/CodeExample';
import Tooltip from '../../ui/components/Tooltip';
import BrainIcon from '../../ui/assets/img/icons/ai-brain.svg?inline';
import code from '!!raw-loader!../../ui/components/Tooltip';

const codeExample = `
<Tooltip
  text="What you see here is a headline tooltip"
>
    <h3>A headline which magically has now a tooltip</h3>
</Tooltip>`;

export default {
    components: {
        Tooltip,
        CodeExample,
        BrainIcon
    },
    data() {
        return {
            codeExample
        };
    },
    computed: {
        code() {
            return code;
        }
    }
};
</script>

<template>
  <div>
    <section>
      <div class="grid-container">
        <div class="grid-item-12">
          <h2>Tooltip</h2>
          <p>
            A simple tooltip only for devices with hover capabilities. For others it will be deactivated.
          </p>
          <p>
            Note: If the immediate child container of the tooltip has an <code class="language-js">expanded</code>
            class, the tooltip will be hidden. This is useful for example for popovers (See KNIME Hub project).
          </p>
        </div>
      </div>
    </section>
    <section class="demo">
      <div class="grid-container ">
        <div class="grid-item-6">
          <Tooltip
            text="What you see here is a headline tooltip"
          >
            <h3 class="demo-line">A headline which magically has now a tooltip</h3>
          </Tooltip>
        </div>
        <div class="grid-item-6">
          <Tooltip
            text="Compact tooltip for a field"
          >
            <BrainIcon />
          </Tooltip>
        </div>
      </div>
    </section>
    <section>
      <div class="grid-container">
        <div class="grid-item-12">
          <CodeExample summary="Show usage example">{{ codeExample }}</CodeExample>
          <CodeExample summary="Show Tooltip.vue source code">{{ code }}</CodeExample>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="postcss" scoped>
.grid-item-6 {
  display: flex;
  align-items: flex-end;
}

svg {
  width: 20px;
  height: 20px;
}

.demo {
  margin-bottom: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: var(--knime-porcelain);

  & .grid-container {
    align-items: center;
  }
}

.demo-line {
  font-size: 18px;
  line-height: 18px;
  font-weight: 500;
  margin: 0;
}
</style>
