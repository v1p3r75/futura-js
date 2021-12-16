/*---------------------------------------------------------------------
	StickyJS v1.0.0 (FriedJS)
-----------------------------------------------------------------------*/

/**
 * @class : Sticky
 * @classdesc : Easily build your sticky
 * @site : friedjs.org
 * @tutorial : friedjs.org/tutorials
 * @licence : MIT
 * @version : v1.0.0
 */

import Exception from "./Exception.js";

export default class Sticky{
    /**
     *
     */
    constructor(elt = '') {
        if (elt === '') return new Exception('Elt options is empty');
        this.elt = elt;
        this.run();
    }
    run(){
        window.addEventListener('scroll',function(e){
            console.log(scrollY);
        })
    }
}
window.fJs = window.fJs ?? {};
window.fJs.Sticky = Sticky;