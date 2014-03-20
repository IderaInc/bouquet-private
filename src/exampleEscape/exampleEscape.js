/**
 * @fileOverview
 * A plugin to escape HTML in JSDoc examples
 */

var _ = require("underscore");

/**
 * Encode HTML tags to entities
 *
 * @see http://stackoverflow.com/a/2613591/575242
 * @param str - A HTML string
 * @returns string - the converted string
 */
var htmlencode = function (str) {
    return str.replace(/[&<>"']/g, function($0) {
        return "&" + {"&":"amp", "<":"lt", ">":"gt", '"':"quot", "'":"#39"}[$0] + ";";
    });
}

exports.handlers = {
    newDoclet: function(e) {
        // e.doclet will refer to the newly created doclet
        // Modify @example values by replacing HTML tags with HTML entities.
        (e.doclet.examples) && (_.each(e.doclet.examples, function (example, i) {
            e.doclet.examples[i] = htmlencode(example);
        }));
    }
};

