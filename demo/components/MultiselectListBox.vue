<script>
import CodeExample from './demo/CodeExample';
import MultiselectListBox from '../../ui/components/forms/MultiselectListBox';
import code from '!!raw-loader!../../ui/components/forms/MultiselectListBox';

const codeExample = `<MultiselectListBox
  v-model="selected"
  :size="4"
  aria-label="Select stuff here!"
  :possible-values="[{
    id: 'foo',
    text: 'Foo'
  }, {
    id: 'bar',
    text: 'Bar'
  }, {
    id: 'baz',
    text: 'Baz'
  }]"
/>`;

export default {
    components: {
        MultiselectListBox,
        CodeExample
    },
    data() {
        return {
            codeExample,
            selected: [],
            disabledSelected: []
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
          <h2>MultiselectListBox</h2>
          <p>
            A list box for selecting multiple items. It acts as a form element, so it emits an <code>input</code> event
            when something is (de-)selected, and it has a <code>value</code>. It has keyboard
            navigation with <code>Up</code>, <code>Down</code>, <code>Home</code>, <code>End</code>. It is possible to
            multi select via keyboard with <code>Shift+Up</code> and <code>Shift+Down</code>. Selective multi select
            is possible by <code>Ctrl+Click</code> or <code>Shift+Click</code>. Also multi select by dragging is
            supported.
          </p>
        </div>
      </div>
      <div class="grid-container">
        <div class="grid-item-6">
          <MultiselectListBox
            v-model="selected"
            :size="4"
            aria-label="Select stuff here!"
            :possible-values="[{
              id: 'foo',
              text: 'Foo'
            }, {
              id: 'bar',
              text: 'Bar'
            }, {
              id: 'baz',
              text: 'Baz'
            }, {
              id: 'baz2',
              text: 'Baz 2'
            }, {
              id: 'baz3',
              text: 'Baz 3'
            }, {
              id: 'baz4',
              text: 'Baz 4'
            }, {
              id: 'baz5',
              text: 'Baz 5'
            }, {
              id: 'baz6',
              text: 'Baz 6'
            }]"
          />
        </div>
        <div class="grid-item-6">
          selected ids: {{ selected }}
        </div>
      </div>
      <br>
      <div class="grid-container">
        <div class="grid-item-6">
          <MultiselectListBox
            v-model="disabledSelected"
            :size="4"
            aria-label="Disabled..."
            :possible-values="[{
              id: 'foo',
              text: 'Foo'
            }, {
              id: 'bar',
              text: 'Bar'
            }, {
              id: 'baz',
              text: 'Baz'
            }, {
              id: 'baz2',
              text: 'Baz 2'
            }, {
              id: 'baz3',
              text: 'Baz 3'
            }, {
              id: 'baz4',
              text: 'Baz 4'
            }, {
              id: 'baz5',
              text: 'Baz 5'
            }, {
              id: 'baz6',
              text: 'Baz 6'
            }]"
            disabled
          />
        </div>
        <div class="grid-item-6">
          selected ids: {{ disabledSelected }}
        </div>
      </div>
    </section>
    <section>
      <div class="grid-container">
        <div class="grid-item-12">
          <CodeExample summary="Show usage example">{{ codeExample }}</CodeExample>
          <CodeExample summary="Show MultiselectListBox.vue source code">{{ code }}</CodeExample>
        </div>
      </div>
    </section>
  </div>
</template>
