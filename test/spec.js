/* global document, window, Event, describe, it, expect, runs, beforeEach,
   waitsFor, $ */

describe('Event konami code', function () {
  'use strict';

  var keyboardEvent = new Event('keyup')
  var wasVanillaListenerTriggered = false
  var wasJqueryListenerTriggered = false

  document.addEventListener('konamiCode', function () {
    wasVanillaListenerTriggered = true
  })

  $(document).on('konamiCode', function () {
    wasJqueryListenerTriggered = true
  })

  function hitKey(keyCode) {
    keyboardEvent.keyCode = keyCode
    document.dispatchEvent(keyboardEvent)
  }

  beforeEach(function () {
    wasVanillaListenerTriggered = false
    wasJqueryListenerTriggered = false
  })

  it('Should fire the event when someone presses the konami code', function () {

    [38, 38, 40, 40, 37, 39, 37, 39, 66, 65].forEach(function (val) {
      hitKey(val)
    })

    expect(wasVanillaListenerTriggered).toEqual(true)
    expect(wasJqueryListenerTriggered).toEqual(true)
  })

  it('Don\'t fire the event if the sequence is incorrect', function () {
    [38, 38, 40, 40, 37, 39, 37, 39, 66, 66].forEach(function (val) {
      hitKey(val)
    })
    expect(wasVanillaListenerTriggered).toEqual(false)
    expect(wasJqueryListenerTriggered).toEqual(false)
  })

  it('Don\'t fire the event if the delay is higger than 1.5s', function () {

    var keys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

    waitsFor(function () {
      var interval = window.setInterval(function () {
        hitKey(keys.shift())
        if (keys.length === 0) { window.clearInterval(interval) }
      }, 2000)

      return keys.length === 0
    })

    runs(function () {
      expect(wasVanillaListenerTriggered).toEqual(false)
      expect(wasJqueryListenerTriggered).toEqual(false)
    })
  })
})
