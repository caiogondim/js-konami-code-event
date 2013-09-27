/* global document, Event, describe, it, expect */

describe('Event konami code', function() {
  'use strict';

  it('should fire the event when someone presses the konami code', function() {
    var wasEventFired = false
    var keyboardEvent = new Event('keyup')

    document.body.addEventListener('konamiCode', function() {
      wasEventFired = true
    })

    keyboardEvent.keyCode = 38
    document.body.dispatchEvent(keyboardEvent)

    keyboardEvent.keyCode = 38
    document.body.dispatchEvent(keyboardEvent)

    keyboardEvent.keyCode = 40
    document.body.dispatchEvent(keyboardEvent)

    keyboardEvent.keyCode = 40
    document.body.dispatchEvent(keyboardEvent)

    keyboardEvent.keyCode = 37
    document.body.dispatchEvent(keyboardEvent)

    keyboardEvent.keyCode = 39
    document.body.dispatchEvent(keyboardEvent)

    keyboardEvent.keyCode = 37
    document.body.dispatchEvent(keyboardEvent)

    keyboardEvent.keyCode = 39
    document.body.dispatchEvent(keyboardEvent)

    keyboardEvent.keyCode = 66
    document.body.dispatchEvent(keyboardEvent)

    keyboardEvent.keyCode = 65
    document.body.dispatchEvent(keyboardEvent)

    expect(wasEventFired).toEqual(true)
  })
})
