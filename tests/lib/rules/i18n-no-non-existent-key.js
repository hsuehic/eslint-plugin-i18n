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


const parserOptions = {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
        jsx: true
    }
};

const ruleTester = new RuleTester({
    parserOptions
});
ruleTester.run("i18n-no-non-existent-key", rule, {

    valid: [
        {
            code: "<FormattedMessage id=\"some.id.exist\" />"
        }
    ],

    invalid: [
        {
            code: "<FormmattedMessage id=\"some.id.not.exist\" />",
            errors: [{
                message: "Keys must exist in the i18n dictionary"
            }],
            parser: 'babel-eslint'
        }
    ]
});
