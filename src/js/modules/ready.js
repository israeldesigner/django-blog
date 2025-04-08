import { contrast } from './contrast'
import { fontSize } from './fontSize'
import { scrollFunc } from './scroll'
import { initBootstrap } from './bootstrap'
import { themeMode } from './theme'

/**
 * Run event after DOM is ready
 * @param {Function} fn Callback function
 */
function ready(fn) {
  // Sanity check
  if (typeof fn !== 'function') return
  // If document is already loaded, run method
  if (document.readyState === 'interactive' || document.readyState === 'complete') return fn()
  // Otherwise, wait until document is loaded
  document.addEventListener('DOMContentLoaded', fn, false)
}

ready(function () {
  
  //contrast
  contrast()

  //font size
  fontSize()

  //scroll
  scrollFunc()

  initBootstrap({
    tooltip: true,
    popover: true,
    toasts: true,
  });

  themeMode()

})
