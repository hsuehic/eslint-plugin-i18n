/**
 * @fileoverview Must no literal
 * @author i18n-no-literal
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/i18n-no-literal");
const RuleTester = require('eslint').RuleTester;

const parserOptions = {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
        jsx: true
    }
};

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
    parserOptions
});

ruleTester.run("i18n-no-literal", rule, {

    valid: [
        {
            code: "<button>{intl('label.click_me')}abc</button>"
        }
    ],

    invalid: [
        {
            code: "<div title=\"test\">Title</div>",
            errors: [{
                message: "Must no literal"
            }],
            parser: 'babel-eslint'
        }
    ]
});
