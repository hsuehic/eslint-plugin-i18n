/**
 * util.js
 * @Author: ()
 * @Link: http://www.gistop.com/
 * @Date: 10/9/2018, 11:27:47 AM
 */


const parseOptions = {
  ecmaVersion: 2018,
  sourceType: 'module',
  ecmaFeatures: {
    jsx: true
  }
};

const ruleTester = require('eslint').RuleTester({ parseOptions });

module.exports = {
  ruleTester
}
