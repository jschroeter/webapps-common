<script>
import CodeExample from './demo/CodeExample';
import Carousel from '../../ui/components/Carousel';
import carouselCode from '!!raw-loader!../../ui/components/Carousel';

const codeExample = `
  <Carousel>
      <Statistics class="wrapper" />
  </Carousel>

<style>
  .wrapper {
    display: inline-flex; /* or inline-block */
    padding-left: 20px;
    margin-left: -20px; /* values might need to be adjusted according to content */

    & .child-elements:last-child {
      border-right: 15px solid transparent;
      /* might need to be set on last child of content to ensure that all the content is scrolled into the viewport*/
    }
  }
/* overwrite shadow color */
  section {
    & >>> .shadow-wrapper::before {
      background-image: linear-gradient(270deg, hsla(0, 0%, 100%, 0) 0%, var(--knime-white) 100%);
    }

    & >>> .shadow-wrapper::after {
      background-image: linear-gradient(90deg, hsla(0, 0%, 100%, 0) 0%, var(--knime-white) 100%);
    }
  }
</style>`;

export default {
    components: {
        Carousel,
        CodeExample
    },
    data() {
        return {
            carouselCode,
            codeExample
        };
    }
};
</script>

<template>
  <section>
    <div class="grid-container">
      <div class="grid-item-12">
        <h2>Carousel</h2>
        <p>
          The carousel can fit items of any size and creates shadows on
          each side of the viewport to indicate that scrolling is possible. When one side of the items inside of the
          carousel is reached the shadow should disappear.
        </p>
        <p>
          The color of the shadow can be adjusted to the background
          by setting the .shadow-color's before and after elements background-image (example below)
        </p>
        <p>
          See usage example for more CSS adjustments.
        </p>
        <section>
          <Carousel>
            <div class="wrapper">
              <div class="card card1" />
              <div class="card card2" />
              <div class="card card3" />
              <div class="card card1" />
              <div class="card card2" />
              <div class="card card3" />
            </div>
          </Carousel>
        </section>
        <CodeExample summary="Show usage example">{{ codeExample }}</CodeExample>
        <CodeExample summary="Show Carousel.vue source code">{{ carouselCode }}</CodeExample>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
section {
  & >>> .shadow-wrapper::before {
    background-image: linear-gradient(270deg, hsla(0, 0%, 100%, 0) 0%, var(--knime-white) 100%);
  }

  & >>> .shadow-wrapper::after {
    background-image: linear-gradient(90deg, hsla(0, 0%, 100%, 0) 0%, var(--knime-white) 100%);
  }
}

.wrapper {
  display: inline-flex;
  flex-wrap: nowrap;

  & div:last-child {
    margin-right: 22px;
  }
}

.card {
  min-width: 400px;
  height: 200px;
  margin-right: 10px;
}

.card1 {
  background-color: var(--knime-dove-gray);
}

.card2 {
  background-color: var(--knime-gray-dark-semi);
}

.card3 {
  background-color: var(--knime-masala);
}
</style>
