/* global document, Event, describe, it, expect */

describe('Event konami code', function() {
  'use strict';

  var keyboardEvent = new Event('keyup'),
      wasEventFired = false ;

  document.addEventListener('konamiCode', function() {
    wasEventFired = true;
  });

  function hitKey(keyCode) {
    keyboardEvent.keyCode = keyCode;
    document.dispatchEvent(keyboardEvent);
  };

  it('should fire the event when someone presses the konami code', function() {

    [38,38,40,40,37,39,37,39,66,65].forEach(function(val) {
        hitKey(val);
    });

    expect(wasEventFired).toEqual(true)
  });

  it("Don't fire the event because the delay is higger than 1.5s" , function(){

  })
})
