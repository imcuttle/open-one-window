/**
 * @file main
 * @author imcuttle
 * @date 2018/4/4
 */
const openOneWindow = require('../')

jest.mock('detect-browser')

const openFn = jest.fn(() => {
  return {
    open: openFn,
    location: {}
  }
})
global.open = openFn

describe('openOneWindow', function() {
  beforeEach(() => {
    openFn.mockClear()
  })

  it('should open', function() {
    const oneWin = openOneWindow()
    oneWin.open('http://baidu.com')

    expect(openFn).toBeCalledWith('http://baidu.com')
  })

  it('should reOopen', function() {
    const oneWin = openOneWindow()
    oneWin.open('http://baidu.com')

    expect(openFn).toBeCalledWith('http://baidu.com')
    expect(openFn).toHaveBeenCalledTimes(1)

    const w = oneWin.open('http://baidu.com/abc')
    expect(openFn).toHaveBeenCalledTimes(1)
    expect(oneWin.win).toBe(w)
    expect(oneWin.win.location.href).toBe('http://baidu.com/abc')
  })
})
