/**
 * Open the only one window
 * @author imcuttle
 */
import { detect } from 'detect-browser'

const { name: browserName } = detect() || { name: 'imcuttle' }

/**
 * @public
 * @name openOneWindow
 * @param options {{}}
 * @param [options.window=global] {Window}
 * @param [options.shouldFallback=true] Fallback the way when the browser is not chrome, It's will open every times when `false`
 * @return {Window}
 */
export default ({ window = global, shouldFallback = true } = {}) => {
  return {
    win: null,
    open(url) {
      const winOpen = () => {
        return window.open.apply(window, arguments)
      }

      if (!shouldFallback && browserName !== 'chrome') {
        return winOpen()
      }

      if (browserName !== 'chrome' && this.win) {
        this.win.close && this.win.close()
      }

      if (this.win && this.win.closed) {
        this.win = null
      }

      if (!this.win) {
        this.win = winOpen()
      } else {
        this.win.location.href = url
      }

      this.win && this.win.focus && this.win.focus()
      return this.win
    }
  }
}
