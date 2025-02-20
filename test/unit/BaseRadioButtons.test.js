import { mount } from '@vue/test-utils';

import BaseRadioButtons from '~/ui/components/forms/BaseRadioButtons';

describe('BaseRadioButtons.vue', () => {
    let possibleValues;

    beforeEach(() => {
        possibleValues = [{
            id: 'test1',
            text: 'Text 1'
        }, {
            id: 'test2',
            text: 'Text 2'
        }, {
            id: 'test3',
            text: 'Text 3'
        }, {
            id: 'test4',
            text: 'Text 4'
        }, {
            id: 'test5',
            text: 'Text 5'
        }];
    });

    it('renders', () => {
        const wrapper = mount(BaseRadioButtons, {
            propsData: {
                possibleValues
            }
        });
        expect(wrapper.html()).toBeTruthy();
        expect(wrapper.isVisible()).toBeTruthy();

        let labels = wrapper.findAll('label');
        expect(labels.length).toBe(possibleValues.length);
        possibleValues.forEach((value, i) => {
            expect(labels.at(i).text()).toContain(value.text);
        });
    });

    it('renders when possibleValues is empty', () => {
        expect(mount(BaseRadioButtons).html()).toBeTruthy();
    });

    it('two render with different name attributes', () => {
        let w1 = mount(BaseRadioButtons, {
            propsData: {
                possibleValues
            }
        });
        let w2 = mount(BaseRadioButtons, {
            propsData: {
                possibleValues
            }
        });

        expect(w1.vm.count).not.toBe(w2.vm.count);
        expect(w1.find('input').attributes().name).not.toBe(w2.find('input').attributes().name);
    });

    it('renders selected value', () => {
        let value = 'test3';
        const wrapper = mount(BaseRadioButtons, {
            propsData: {
                possibleValues,
                value
            }
        });

        let radioInputs = wrapper.findAll('input[type=radio]');
        possibleValues.forEach((option, i) => {
            if (option.id === value) {
                expect(radioInputs.at(i).element.checked).toBeTruthy();
            } else {
                expect(radioInputs.at(i).element.checked).not.toBeTruthy();
            }
        });
    });

    it('emits event for selected value', () => {
        const wrapper = mount(BaseRadioButtons, {
            propsData: {
                possibleValues
            }
        });
        let newValue = 'test2';
        let input = wrapper.find(`input[value=${newValue}]`);
        input.setChecked(true);
        expect(wrapper.emitted().input[0][0]).toEqual(newValue);
    });

    it('validation of possibleValues', () => {
        const wrapper = mount(BaseRadioButtons, {
            propsData: {
                possibleValues
            }
        });
        const propPossibleValues = wrapper.vm.$options.props.possibleValues;
        expect(propPossibleValues.required).toBeFalsy();
        expect(propPossibleValues.type).toBe(Array);
        expect(propPossibleValues.validator && propPossibleValues.validator('str')).toBeFalsy();
        expect(propPossibleValues.validator && propPossibleValues.validator(possibleValues)).toBeTruthy();
    });
});
