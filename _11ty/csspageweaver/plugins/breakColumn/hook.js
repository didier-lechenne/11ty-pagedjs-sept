/**
 * @name Blank is name of plugin
 * @file This file is a hook. It does nothing. It's just an example 
 * @author Jane Doe <jane@dooooooooooooo.oe>
 * @see { @link https://jsdoc.app/about-getting-started }
 */

import { Handler } from '/csspageweaver/lib/paged.esm.js';

export default class breakColumn extends Handler {

  constructor(chunker, polisher, caller) {
    super(chunker, polisher, caller);
  }

  beforeParsed(content) {
    const splitElements = content.querySelectorAll('.breakcolumn');
    
    splitElements.forEach(element => {
        // Forcer display block pour les <br>
        element.style.display = 'block';
        element.style.breakAfter = 'column';
        element.style.marginTop = '0';
        // Fallbacks
        element.style.webkitColumnBreakAfter = 'always';

    });
   
   console.log("breakColumn handler applied");
  }
}
