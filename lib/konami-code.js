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
      this.KONAMI_CODE_SEQUENCE = '37373939384038406566'

      this.event = new Event('konamiCode')

      this.bindListener()

      return this
    },

    bindListener: function() {
      this.bindListener.body = document.querySelector('body')
      this.bindListener.buffer = ''

      this.bindListener.body.addEventListener('keyup', function(event) {
        if (event.keyCode === this.KEY_LEFT ||
            event.keyCode === this.KEY_UP ||
            event.keyCode === this.KEY_RIGHT ||
            event.keyCode === this.KEY_DOWN ||
            event.keyCode === this.KEY_A ||
            event.keyCode === this.KEY_B) {
          this.bindListener.buffer = this.bindListener.buffer + event.keyCode

          if (this.bindListener.buffer.indexOf(this.KONAMI_CODE_SEQUENCE) >= 0) {
            this.bindListener.body.dispatchEvent(this.event)
          }

        } else {
          this.bindListener.buffer = ''
        }
      }.bind(this))
    }
  }

  return konamiCode.init()

}())
