/**
 * @fileoverview Keys must exist in the i18n dictionary.
 * @author Richard<xiaowei.hsueh@gmail.com>
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const ERROR_MESSAGE = "Keys must exist in the i18n dictionary"

module.exports = {
    meta: {
        docs: {
            description: ERROR_MESSAGE,
            category: "Possible errors",
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
            JSXElement: (node) => {
                context.report({
                    node,
                    message: ERROR_MESSAGE
                })
            }

        };
    }
};
