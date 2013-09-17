# Konami code

<img
    src="https://raw.github.com/caiogondim/konami-code/master/konami-code-logo.png"
    alt="Konami code"
    align="right"
/>

The Konami Code (Japanese: コナミコマンド, Konami komando, "Konami command") is a
cheat code that appears in many Konami video games, although the code also
appears in some non-Konami games.

During the title screen before the game demo begins, the player could press the
following sequence of buttons on the game controller to enable the cheat:
⬆ ⬆ ⬇ ⬇ ⬅ ➡ ⬅ ➡ B A

# How to use

Load the script in your web app/site and listen for the event `konamiCode` in
your document:

```javascript
document.addEventListener('konamiCode', function(event) {
  // code executed whenever the user types a konami code
})
```

It can also be used along with jQuery:

```javascript
$(document).on('konamiCode', function(event) {
  // code executed whenever the user types a konami code
})
```

Type this sequence **⬆ ⬆ ⬇ ⬇ ⬅ ➡ ⬅ ➡ B A** to trigger the event.

## License

Copyright © 2013 [Caio Gondim](http://caiogondim.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the “Software”), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
