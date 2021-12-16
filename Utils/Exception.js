/*---------------------------------------------------------------------
	Exception v1.0.0 (FriedJS)
-----------------------------------------------------------------------*/

/**
 * @Type : Module
 * @Description : Manage site exceptions
 * @Project : FriedJS
 * @foundation : Fried Foundation | (c) JS Foundation and other contributors
 * @website : friedjs.org
 * @license : MIT
 * @version : v1.0.0
 * @contributors : ...
 */

export default class Exception{
    constructor(message) {
        console.error(message)
    }
}

window.fJs = window.fJs ?? {};
window.fJs.Exception = Exception;