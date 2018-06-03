import { mount } from '@vue/test-utils';
import Zfooter from '@/components/AppLayout/Zfooter/Zfooter.vue';

describe('<Footer />', () => {
  it('render page name with current year', () => {
    const wrapper = mount(Zfooter);
    const year = new Date().getFullYear();
    expect(wrapper.text()).toMatch(`Z3rO | ${year}`);
  });
});
