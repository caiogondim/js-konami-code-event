var konamiCode = (function() {
  'use strict'

  var konamiCode = {
    init: function() {
      this.KEY_LEFT = 37
      this.KEY_UP = 38
      this.KEY_RIGHT = 39
      this.KEY_DOWN = 40
      this.KEY_A = 65
      this.KEY_B = 66
      this.KONAMI_CODE_SEQUENCE = '38384040373937396665' // ⬆ ⬆ ⬇ ⬇ ⬅ ➡ ⬅ ➡ B A

      this.bindListener()

      return this
    },

    bindListener: function() {
      var konamiCodeEvent = new Event('konamiCode')
      var bodyElement = document.querySelector('body')
      var buffer = ''

      bodyElement.addEventListener('keyup', function(event) {
        if (event.keyCode === this.KEY_LEFT ||
            event.keyCode === this.KEY_UP ||
            event.keyCode === this.KEY_RIGHT ||
            event.keyCode === this.KEY_DOWN ||
            event.keyCode === this.KEY_A ||
            event.keyCode === this.KEY_B) {
          buffer = buffer + event.keyCode

          if (buffer.indexOf(this.KONAMI_CODE_SEQUENCE) >= 0) {
            bodyElement.dispatchEvent(konamiCodeEvent)
          }

        } else {
          buffer = ''
        }
      }.bind(this))
    }
  }

  return konamiCode.init()

}())
