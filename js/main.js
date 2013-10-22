var main = (function() {
  'use strict';

  var main = {
    init: function() {
      this._bindEvents()
      this._initInstructionsBlinkInterval()

      return this
    }

  , _bindEvents: function() {
      document.addEventListener('konamiCode', this.showToasty)
    }

  , _initInstructionsBlinkInterval: function() {
      // Blinks the instructions
      var instructions = document.querySelector('.instructions')
      instructions.style.visibility = 'visible'
      setInterval(function () {
        if (instructions.style.visibility == 'visible') {
          instructions.style.visibility = 'hidden'
        } else if (instructions.style.visibility == 'hidden') {
          instructions.style.visibility = 'visible'
        }
      }, 500)
    }

  , showToasty: function() {
      var toasty = document.querySelector('.toasty')
      toasty.classList.add('is-visible')

      setTimeout(function () {
        document.querySelector('.toasty-sound').play()
      }, 300)

      setTimeout(function () {
        toasty.classList.remove('is-visible')
      }, 1000)
    }
  }

  return main.init()

}())
