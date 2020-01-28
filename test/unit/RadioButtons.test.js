import { mount } from '@vue/test-utils';

import RadioButtons from '~/ui/components/forms/RadioButtons';

describe('RadioButtons.vue', () => {
    it('renders', () => {
        let propsData = {
            possibleValues: [{
                id: 'test1',
                text: 'test1'
            }, {
                id: 'test2',
                text: 'test2'
            }, {
                id: 'test3',
                text: 'test3'
            }],
            value: '',
            placeholder: ''
        };
        const wrapper = mount(RadioButtons, {
            propsData
        });
        expect(wrapper.html()).toBeTruthy();
        expect(wrapper.isVisible()).toBeTruthy();
        expect(wrapper.findAll('input[type=radio]').length).toBe(propsData.possibleValues.length);
    });

    it('sets the values to the checked value', () => {
        const wrapper = mount(RadioButtons, {
            propsData: {
                possibleValues: [{
                    id: 'test1',
                    text: 'test1'
                }, {
                    id: 'test2',
                    text: 'test2'
                }, {
                    id: 'test3',
                    text: 'test3'
                }],
                value: '',
                placeholder: ''
            }
        });
        let newValue = 'test2';
        let input = wrapper.find(`input[value=${newValue}]`);
        input.setChecked(true);
        expect(wrapper.emitted().input[0][0]).toEqual(newValue);
    });

});
