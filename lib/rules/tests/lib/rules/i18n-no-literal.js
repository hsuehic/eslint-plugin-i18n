/**
 * @fileoverview Must no literal
 * @author i18n-no-literal
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/i18n-no-literal"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("i18n-no-literal", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "<button>click me</button>",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
