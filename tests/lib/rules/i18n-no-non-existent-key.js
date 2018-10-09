/**
 * @fileoverview Keys must exist in the i18n dictionary.
 * @author Richard&lt;xiaowei.hsueh@gmail.com&gt;
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/i18n-no-non-existent-key"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("i18n-no-non-existent-key", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "<FormmatedMessage id=\"some.id.not.exist\" />",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
