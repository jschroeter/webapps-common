import { shallowMount } from '@vue/test-utils';

import MenuToggle from '~/ui/components/MenuToggle';

describe('MenuToggle.vue', () => {
    it('renders a menuToggle', () => {
        const wrapper = shallowMount(MenuToggle, {
            slots: {
                default: ['<svg/>', '<span>text</span>']
            }
        });
        expect(wrapper.is('span')).toBeTruthy();
        expect(wrapper.classes()).toEqual(['toggle']);
    });

    it('renders a class if props is set', () => {
        const wrapper = shallowMount(MenuToggle, {
            propsData: {
                active: true
            },
            slots: {
                default: ['<span>text</span>', '<svg/>']
            }
        });
        expect(wrapper.is('span')).toBeTruthy();
        expect(wrapper.classes()).toEqual(['toggle', 'active']);
    });

    it('renders a class if it only has one slot child', () => {
        const wrapper = shallowMount(MenuToggle, {
            slots: {
                default: ['<svg/>']
            }
        });
        expect(wrapper.is('span')).toBeTruthy();
        expect(wrapper.classes()).toEqual(['toggle', 'single']);
    });


    it('renders a classes if props is set and one child is present', () => {
        const wrapper = shallowMount(MenuToggle, {
            propsData: {
                active: true
            },
            slots: {
                default: ['<span>text</span>']
            }
        });
        expect(wrapper.is('span')).toBeTruthy();
        expect(wrapper.classes()).toEqual(['toggle', 'single', 'active']);
    });


});
