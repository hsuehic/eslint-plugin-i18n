/**
 * @fileoverview I18n key is not exist in the dictionary.
 * @author Richard&lt;xiaowei.hsueh@gmail.com&gt;
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/i18n-non-existent-key"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("i18n-non-existent-key", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "<FormattedMessage id=\"some.id.donot.exist\" />",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
