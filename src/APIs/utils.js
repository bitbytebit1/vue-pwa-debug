const UtilsPlug = {
  install (Vue, options) {
    var Utils = {
      isMobile: window.matchMedia('only screen and (max-width: 760px)').matches,
      copyToClipboard: function (sText) {
        var tmp = document.createElement('input')
        document.body.appendChild(tmp)
        tmp.value = sText
        tmp.select()
        document.execCommand('copy')
        tmp.remove()
      },
      downloadLink: function (sURL) {
        var iframe = document.createElement('iframe')

        iframe.style.display = 'none'
        iframe.id = iframe.name = sURL
        iframe.src = sURL

        document.body.appendChild(iframe)
      }
    }
    Object.defineProperty(Vue.prototype, '$UTILS', { value: Utils })
  }
}
export default UtilsPlug
