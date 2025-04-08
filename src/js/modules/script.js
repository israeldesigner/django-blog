import $ from '../../../node_modules/jquery/dist/jquery'
window.jQuery = $
window.$ = $
export const script = () => {
  ;(function ($) {

    console.log($('body'))
    
  })($)
}
