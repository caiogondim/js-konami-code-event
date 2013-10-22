/* global document, window, Event, describe, it, expect, runs, beforeEach,
   waitsFor */

describe('Event konami code', function () {
  'use strict';

  var keyboardEvent = new Event('keyup'),
      wasEventFired = false

  document.addEventListener('konamiCode', function () {
    wasEventFired = true
  });

  function hitKey(keyCode) {
    keyboardEvent.keyCode = keyCode
    document.dispatchEvent(keyboardEvent)
  }

  beforeEach(function () {
    wasEventFired = false
  })

  it('Should fire the event when someone presses the konami code', function () {

    [38, 38, 40, 40, 37, 39, 37, 39, 66, 65].forEach(function (val) {
      hitKey(val)
    })

    expect(wasEventFired).toEqual(true)
  })

  it('Don\'t fire the event if the sequence is incorrect', function () {
    [38, 38, 40, 40, 37, 39, 37, 39, 66, 66].forEach(function (val) {
      hitKey(val)
    })
    expect(wasEventFired).toEqual(false)
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
      expect(wasEventFired).toEqual(false)
    })
  })
})
