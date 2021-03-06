(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var jss = require('../..')
var normalize = jss.createStyleSheet(require('./normalize')).attach()
var hogan = window.Hogan;

function $(selector) {
    return document.querySelectorAll(selector)
}

(function () {
    var buttonBar = jss.createStyleSheet(require('./topcoat-button-bar'), true).attach()
    var button = jss.createStyleSheet(require('./topcoat-button'), true).attach()
    var tplEl = $('.button-bar-tpl')[0]
    var buttonBarTpl = Hogan.compile(tplEl.innerHTML)

    document.body.innerHTML = buttonBarTpl.render({
        buttonBar: buttonBar.classes,
        button: button.classes
    })
}())

},{"../..":8,"./normalize":2,"./topcoat-button":4,"./topcoat-button-bar":3}],2:[function(require,module,exports){
module.exports = {
  'html': {
    'font-family': 'sans-serif',
    '-ms-text-size-adjust': '100%',
    '-webkit-text-size-adjust': '100%'
  },
  'body': {
    'margin': '0'
  },
  'article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary': {
    'display': 'block'
  },
  'audio, canvas, progress, video': {
    'display': 'inline-block',
    'vertical-align': 'baseline'
  },
  'audio:not([controls])': {
    'display': 'none',
    'height': '0'
  },
  '[hidden], template': {
    'display': 'none'
  },
  'a': {
    'background-color': 'transparent'
  },
  'a:active, a:hover': {
    'outline': '0'
  },
  'abbr[title]': {
    'border-bottom': '1px dotted'
  },
  'b, strong': {
    'font-weight': 'bold'
  },
  'dfn': {
    'font-style': 'italic'
  },
  'h1': {
    'font-size': '2em',
    'margin': '0.67em 0'
  },
  'mark': {
    'background': '#ff0',
    'color': '#000'
  },
  'small': {
    'font-size': '80%'
  },
  'sub, sup': {
    'font-size': '75%',
    'line-height': '0',
    'position': 'relative',
    'vertical-align': 'baseline'
  },
  'sup': {
    'top': '-0.5em'
  },
  'sub': {
    'bottom': '-0.25em'
  },
  'img': {
    'border': '0'
  },
  'svg:not(:root)': {
    'overflow': 'hidden'
  },
  'figure': {
    'margin': '1em 40px'
  },
  'hr': {
    '-moz-box-sizing': 'content-box',
    'box-sizing': 'content-box',
    'height': '0'
  },
  'pre': {
    'overflow': 'auto'
  },
  'code, kbd, pre, samp': {
    'font-family': 'monospace, monospace',
    'font-size': '1em'
  },
  'button, input, optgroup, select, textarea': {
    'color': 'inherit',
    'font': 'inherit',
    'margin': '0'
  },
  'button': {
    'overflow': 'visible'
  },
  'button, select': {
    'text-transform': 'none'
  },
  'button, html input[type=\'button\'], input[type=\'reset\'], input[type=\'submit\']': {
    '-webkit-appearance': 'button',
    'cursor': 'pointer'
  },
  'button[disabled], html input[disabled]': {
    'cursor': 'default'
  },
  'button::-moz-focus-inner, input::-moz-focus-inner': {
    'border': '0',
    'padding': '0'
  },
  'input': {
    'line-height': 'normal'
  },
  'input[type=\'checkbox\'], input[type=\'radio\']': {
    'box-sizing': 'border-box',
    'padding': '0'
  },
  'input[type=\'number\']::-webkit-inner-spin-button, input[type=\'number\']::-webkit-outer-spin-button': {
    'height': 'auto'
  },
  'input[type=\'search\']': {
    '-webkit-appearance': 'textfield',
    '-moz-box-sizing': 'content-box',
    '-webkit-box-sizing': 'content-box',
    'box-sizing': 'content-box'
  },
  'input[type=\'search\']::-webkit-search-cancel-button, input[type=\'search\']::-webkit-search-decoration': {
    '-webkit-appearance': 'none'
  },
  'fieldset': {
    'border': '1px solid #c0c0c0',
    'margin': '0 2px',
    'padding': '0.35em 0.625em 0.75em'
  },
  'legend': {
    'border': '0',
    'padding': '0'
  },
  'textarea': {
    'overflow': 'auto'
  },
  'optgroup': {
    'font-weight': 'bold'
  },
  'table': {
    'border-collapse': 'collapse',
    'border-spacing': '0'
  },
  'td, th': {
    'padding': '0'
  }
};

},{}],3:[function(require,module,exports){
module.exports = {
  bar: {
    'display': 'table',
    'table-layout': 'fixed',
    'white-space': 'nowrap',
    'margin': 0,
    'padding': 0
  },
  item: {
    'display': 'table-cell',
    'width': 'auto',
    'border-radius': 0
  }
}

},{}],4:[function(require,module,exports){
var u = require('./topcoat-utils')
var vars = require('./topcoat-vars-dark')

exports.button = {
    'extend': [u.inlineBlock, u.resetBoxModel, u.resetBase, u.resetCursor, u.ellipsis],
    'text-decoration': 'none',
    'padding': vars.padding,
    'font-size': vars.fontSize,
    'font-weight': vars.fontWeight,
    'line-height': vars.lineHeight,
    'letter-spacing': vars.letterSpacing,
    'color': vars.color,
    'text-shadow': vars.textShadow,
    'vertical-align': vars.verticalAlign,
    'border-radius': vars.borderRadius,
    'background-color': vars.backgroundColor,
    'box-shadow': vars.boxShadow,
    'border': vars.border,
    '&:hover': {
        'background-color': vars.backgroundColorHover
    },
    '&:active': {
        'background-color': vars.backgroundColorActive,
        'box-shadow': vars.boxShadowActive
    },
    '&:focus': {
        'border': vars.borderFocus,
        'box-shadow': vars.boxShadowFocus,
        'outline': 0
    }
}

},{"./topcoat-utils":5,"./topcoat-vars-dark":6}],5:[function(require,module,exports){
var resetOverflow = {
    'white-space': 'nowrap',
    'overflow': 'hidden'
}

module.exports = {
    resetOverflow: resetOverflow,
    inlineBlock: {
        position: 'relative',
        display: 'inline-block',
        'vertical-align': 'top'
    },
    resetBoxModel: {
        'box-sizing': 'border-box',
        'background-clip': 'padding-box'
    },
    resetBase: {
        'padding': '0',
        'margin': '0',
        'font': 'inherit',
        'color': 'inherit',
        'background': 'transparent',
        'border': 'none'
    },
    resetCursor: {
        'cursor': 'default',
        'user-select': 'none'
    },
    ellipsis: {
        'text-overflow': 'ellipsis',
        extend: resetOverflow
    },
    resetQuiet: {
        'background': 'transparent',
        'border': '1px solid transparent',
        'box-shadow': 'none'
    },
    disabled: {
        'opacity': '0.3',
        'cursor': 'default',
        'pointer-events': 'none'
    }
}

},{}],6:[function(require,module,exports){
var vars = require('./topcoat-vars')

vars.borderThickness = '1px'
vars.color = 'hsla(180, 2%, 78%, 1)'
vars.backgroundColor = 'hsla(180, 1%, 35%, 1)'
vars.textShadow = '0 -1px hsla(0, 0%, 0%, 0.69)'
vars.boxShadow = 'inset 0 ' + vars.borderThickness + ' hsla(0, 0%, 45%, 1)'
vars.borderColor = 'hsla(180, 1%, 20%, 1)'
vars.border = vars.borderThickness + ' solid ' + vars.borderColor
vars.backgroundColorHover = 'hsla(200, 2%, 39%, 1)'
vars.backgroundColorActive = 'hsla(210, 2%, 25%, 1)'
vars.boxShadowActive = 'inset 0 ' + vars.borderThickness + ' hsla(0, 0%, 0%, 0.05)'
vars.borderFocus = '1px solid hsla(227, 100%, 50%, 1)'
vars.boxShadowFocus = '0 0 0 2px hsla(208, 82%, 69%, 1)'

module.exports = vars;

},{"./topcoat-vars":7}],7:[function(require,module,exports){
module.exports = {
    padding: '0.25rem 0.75rem',
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: '1.313rem',
    verticalAlign: 'top',
    borderRadius: '4px',
    letterSpacing: 0
}

},{}],8:[function(require,module,exports){
/**
 * StyleSheets written in javascript.
 *
 * @copyright Oleg Slobodskoi 2014
 * @website https://github.com/jsstyles/jss
 * @license MIT
 */

module.exports = require('./lib/index')

},{"./lib/index":11}],9:[function(require,module,exports){
'use strict'

var uid = 0

var hasKeyframes = /@keyframes/

var toString = Object.prototype.toString

/**
 * Rule is selector + style hash.
 *
 * @param {String} [selector]
 * @param {Object} style is property:value hash.
 * @param {Object} [stylesheet]
 * @api public
 */
function Rule(selector, style, stylesheet) {
    if (typeof selector == 'object') {
        stylesheet = style
        style = selector
        selector = null
    }

    if (selector) {
        this.selector = selector
    } else {
        this.className = Rule.NAMESPACE_PREFIX + '-' + uid
        uid++
        this.selector = '.' + this.className
    }

    this.stylesheet = stylesheet
    this.style = style
}

module.exports = Rule

Rule.NAMESPACE_PREFIX = 'jss'

/**
 * Add child rule. Required for plugins like "nested".
 * StyleSheet will render them as a separate rule.
 *
 * @param {String} selector
 * @param {Object} style
 * @return {Rule}
 * @api public
 */
Rule.prototype.addChild = function (selector, style) {
    if (!this.children) this.children = {}
    this.children[selector] = style

    return this
}

/**
 * Converts the rule to css string.
 *
 * @return {String}
 * @api public
 */
Rule.prototype.toString = function () {
    var isKeyframe = hasKeyframes.test(this.selector)
    var style = this.style
    var str = this.selector + ' {'

    for (var prop in style) {
        var value = style[prop]
        if (typeof value == 'object') {
            var type = toString.call(value)
            // We are in a sub block e.g. @media, @keyframes
            if (type == '[object Object]') {
                var valueStr = '{'
                for (var prop2 in value) {
                    valueStr += '\n    ' + prop2 + ': ' + value[prop2] + ';'
                }
                valueStr += '\n  }'
                value = valueStr
                str += '\n  ' + prop + (isKeyframe ? ' ' : ': ') + value
            // We want to generate multiple declarations with identical property names.
            } else if (type == '[object Array]') {
                for (var i = 0; i < value.length; i++) {
                    str += '\n  ' + prop + ': ' + value[i] + ';'
                }
            }
        } else {
            str += '\n  ' + prop + ': ' + value + ';'
        }
    }

    str += '\n}'

    return str
}

},{}],10:[function(require,module,exports){
'use strict'

var Rule = require('./Rule')
var plugins = require('./plugins')

/**
 * StyleSheet abstraction, contains rules, injects stylesheet into dom.
 *
 * @param {Object} [rules] object with selectors and declarations
 * @param {Boolean} [named] rules have names if true, class names will be generated.
 * @param {Object} [attributes] stylesheet element attributes
 * @api public
 */
function StyleSheet(rules, named, attributes) {
    if (typeof named == 'object') {
        attributes = named
        named = false
    }
    this.element = null
    this.attached = false
    this.named = named || false
    this.attributes = attributes
    this.rules = {}
    this.classes = {}
    this.text = ''
    this.element = this.createElement()

    for (var key in rules) {
        this.createRules(key, rules[key])
    }
}

module.exports = StyleSheet

/**
 * Insert stylesheet element to render tree.
 *
 * @api public
 * @return {StyleSheet}
 */
StyleSheet.prototype.attach = function () {
    if (this.attached) return this

    if (!this.text) this.deploy()

    document.head.appendChild(this.element)
    this.attached = true

    return this
}

/**
 * Stringify and inject the rules.
 *
 * @return {StyleSheet}
 * @api private
 */
StyleSheet.prototype.deploy = function () {
    this.text = this.toString()
    this.element.innerHTML = '\n' + this.text + '\n'

    return this
}

/**
 * Remove stylesheet element from render tree.
 *
 * @return {StyleSheet}
 * @api public
 */
StyleSheet.prototype.detach = function () {
    if (!this.attached) return this

    this.element.parentNode.removeChild(this.element)
    this.attached = false

    return this
}

/**
 * Add a rule to the current stylesheet. Will insert a rule also after the stylesheet
 * has been rendered first time.
 *
 * @param {Object} [key] can be selector or name if `this.named` is true
 * @param {Object} style property/value hash
 * @return {Rule}
 * @api public
 */
StyleSheet.prototype.addRule = function (key, style) {
    var rules = this.createRules(key, style)

    // Don't insert rule directly if there is no stringified version yet.
    // It will be inserted all together when .attach is called.
    if (this.text) {
        var sheet = this.element.sheet
        for (var i = 0; i < rules.length; i++) {
            sheet.insertRule(rules[i].toString(), sheet.cssRules.length)
        }
    } else {
        this.deploy()
    }

    return rules
}

/**
 * Create rules, will render also after stylesheet was rendered the first time.
 *
 * @param {Object} rules key:style hash.
 * @return {StyleSheet} this
 * @api public
 */
StyleSheet.prototype.addRules = function (rules) {
    for (var key in rules) {
        this.addRule(key, rules[key])
    }

    return this
}

/**
 * Get a rule.
 *
 * @param {String} key can be selector or name if `named` is true.
 * @return {Rule}
 * @api public
 */
StyleSheet.prototype.getRule = function (key) {
    return this.rules[key]
}

/**
 * Convert rules to a css string.
 *
 * @return {String}
 * @api public
 */
StyleSheet.prototype.toString = function () {
    var str = ''
    var rules = this.rules

    for (var key in rules) {
        if (str) str += '\n'
        str += rules[key].toString()
    }

    return str
}

/**
 * Create a rule, will not render after stylesheet was rendered the first time.
 *
 * @param {Object} [selector] if you don't pass selector - it will be generated
 * @param {Object} style property/value hash
 * @return {Array} rule can contain child rules
 * @api private
 */
StyleSheet.prototype.createRules = function (key, style) {
    var rules = []
    var selector, name

    if (this.named) name = key
    else selector = key

    var rule = new Rule(selector, style, this)
    rules.push(rule)
    this.rules[name || rule.selector] = rule
    if (this.named) this.classes[name] = rule.className
    plugins.run(rule)

    for (key in rule.children) {
        rules.push(this.createRules(key, rule.children[key]))
    }

    return rules
}

/**
 * Create stylesheet element.
 *
 * @api private
 * @return {Element}
 */
StyleSheet.prototype.createElement = function () {
    var el = document.createElement('style')

    if (this.attributes) {
        for (var name in this.attributes) {
            el.setAttribute(name, this.attributes[name])
        }
    }

    return el
}

},{"./Rule":9,"./plugins":12}],11:[function(require,module,exports){
'use strict'

var StyleSheet = require('./StyleSheet')
var Rule = require('./Rule')

exports.StyleSheet = StyleSheet

exports.Rule = Rule

exports.plugins = require('./plugins')

/**
 * Create a stylesheet.
 *
 * @param {Object} rules is selector:style hash.
 * @param {Object} [named] rules have names if true, class names will be generated.
 * @param {Object} [attributes] stylesheet element attributes.
 * @return {StyleSheet}
 * @api public
 */
exports.createStyleSheet = function (rules, named, attributes) {
    return new StyleSheet(rules, named, attributes)
}

/**
 * Create a rule.
 *
 * @param {String} [selector]
 * @param {Object} style is property:value hash.
 * @return {Rule}
 * @api public
 */
exports.createRule = function (selector, style) {
    var rule = new Rule(selector, style)
    exports.plugins.run(rule)
    return rule
}

/**
 * Register plugin. Passed function will be invoked with a rule instance.
 *
 * @param {Function} fn
 * @api public
 */
exports.use = exports.plugins.use

},{"./Rule":9,"./StyleSheet":10,"./plugins":12}],12:[function(require,module,exports){
'use strict'

/**
 * Registered plugins.
 *
 * @type {Array}
 * @api public
 */
exports.registry = []

/**
 * Register plugin. Passed function will be invoked with a rule instance.
 *
 * @param {Function} fn
 * @api public
 */
exports.use = function (fn) {
    exports.registry.push(fn)
}

/**
 * Execute all registered plugins.
 *
 * @param {Rule} rule
 * @api private
 */
exports.run = function (rule) {
    for (var i = 0; i < exports.registry.length; i++) {
        exports.registry[i](rule)
    }
}

},{}]},{},[1]);
