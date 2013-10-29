var main = (function() {
  'use strict';

  var main = {
    init: function() {
      this._bindEvents()

      return this
    }

  , _bindEvents: function() {
      document.addEventListener('konamiCode', this.showToasty)
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
