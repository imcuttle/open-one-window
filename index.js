/**
 * Open the only one window
 * @author imcuttle
 */
import { detect } from 'detect-browser'

const { name: browserName } = detect() || { name: 'imcuttle' }

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
