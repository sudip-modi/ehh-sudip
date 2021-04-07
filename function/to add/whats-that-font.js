/*

whats-that-font.js

A bookmarklet to tell the user the font used for any text on a web page

Created by Kate Morley - http://code.iamkate.com/ - and released under the terms
of the CC0 1.0 Universal legal code:

http://creativecommons.org/publicdomain/zero/1.0/legalcode

*/

// create the stylesheet
var stylesheet = document.createElement('style');
stylesheet.innerHTML = '*{cursor:help !important;}';
document.body.appendChild(stylesheet);

// add the click listener
document.body.addEventListener('click', handleClick, false);

/* Handles a click event. The parameter is:
 *
 * e - the event
 */
function handleClick(e){

  // match the first font in the font family stack
  var matches =
      /"([^"]+)"|'([^']+)'|([^,]+)/.exec(
          window.getComputedStyle(e.target).fontFamily);

  // display a message with the name of the font
  alert('That font is ' + (matches[1] || matches[2] || matches[3]));

  // remove the listener and stylesheet
  document.body.removeEventListener('click', handleClick);
  document.body.removeChild(stylesheet);

  // prevent the default action
  e.preventDefault();

}
