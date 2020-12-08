/*
 * @Author: isJDongYa
 * @LastEditors: isJDongYa
 * @Date: 2020-12-07 19:31:18
 * @LastEditTime: 2020-12-08 15:33:17
 * @Description: 单元测试，基本只测试props
 */
import { shallowMount } from '@vue/test-utils'
import MoreMsg from '../../lib/MoreMsg'

describe('MoreMsg.vue', () => {

  const newText = '<span>new text</span>'
  const showText = 'show text'

  test('default-slot:text', async () => {
    const wrapper = shallowMount(MoreMsg, {
      propsData: { 
        text: showText,
      },
      slots: {
        default: newText
      }
    })
    
    expect(wrapper.find('.more-msg').find('span').exists()).toBe(true)
    const span = wrapper.find('.more-msg span')
    expect(span.text()).toBe('new text')
    wrapper.destroy()
  })

  test('props:text', async () => {
    const wrapper = shallowMount(MoreMsg, {
      propsData: { 
        text: showText,
      }
    })
    expect(wrapper.find('.more-msg-contain').text()).toBe(showText)
    wrapper.destroy()
  })
})