/**
 * @fileoverview Must no literal
 * @author Richard<xiaowei.hsueh@gmail.com>
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const ERROR_MESSAGE = "Must no literal";

module.exports = {
    meta: {
        docs: {
            description: ERROR_MESSAGE,
            category: "Possible Errors",
            recommended: true
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function (context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            JSXText: function (node) {
                console.log('JSXText');
                context.report({
                    node,
                    message: ERROR_MESSAGE
                });
            },
            JSXElement: function (node) {
                console.log('JSXElement');
                context.report({
                    node,
                    message: ERROR_MESSAGE
                });
            },
            Literal: function (node) {
                console.log('Literal');
            }

        };
    }
};
