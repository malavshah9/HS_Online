(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["program-program-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/program/program.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/program/program.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: #008000; width: 100%; height: 100%;\">\r\n  <h4 style=\"color:white;\" class=\"bottomRow2\">{{draw_hour}}:{{draw_minute}} {{am_or_pm}} &nbsp;&nbsp;{{remaining_minute}}:{{remaining_second}}&nbsp;&nbsp;&nbsp;{{current_date}}&nbsp;&nbsp;  &nbsp;{{current_hour}}:{{current_minute}}:{{current_second}}\r\n    <span  style=\"margin-right: 10px;\">&nbsp;ID : {{userName}}&nbsp;&nbsp;</span>&nbsp;<span>&nbsp;&nbsp;BALANCE : Rs. {{userBalance}}  &nbsp;&nbsp;</span></h4>\r\n    <ion-grid style=\"height: 55%; width:100%;clear: both; margin-top: -10%\">\r\n    <ion-row>\r\n      <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n        <img src=\"assets/icon/1.jpeg\" width=\"95%\" height=\"75%\" />\r\n        <ion-input\r\n          style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\"\r\n          type=\"number\" [(ngModel)]=\"txt1\"></ion-input>\r\n      </ion-col>\r\n      <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n        <img src=\"assets/icon/2.jpeg\" width=\"95%\" height=\"75%\" />\r\n        <ion-input\r\n          style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\"\r\n          type=\"number\" [(ngModel)]=\"txt2\"></ion-input>\r\n      </ion-col>\r\n      <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n        <img src=\"assets/icon/3.jpeg\" width=\"95%\" height=\"75%\" />\r\n        <ion-input\r\n          style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\"\r\n          type=\"number\" [(ngModel)]=\"txt3\"></ion-input>\r\n      </ion-col>\r\n      <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n        <img src=\"assets/icon/4.jpeg\" width=\"95%\" height=\"75%\" />\r\n        <ion-input\r\n          style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\"\r\n          type=\"number\" [(ngModel)]=\"txt4\"></ion-input>\r\n      </ion-col>\r\n      <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n        <img src=\"assets/icon/5.jpeg\" width=\"95%\" height=\"75%\" />\r\n        <ion-input\r\n          style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\"\r\n          type=\"number\" [(ngModel)]=\"txt5\"></ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"bottomRow\">\r\n      <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n        <img src=\"assets/icon/6.jpeg\" width=\"95%\" height=\"75%\" />\r\n        <ion-input\r\n          style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\"\r\n          type=\"number\" [(ngModel)]=\"txt6\"></ion-input>\r\n      </ion-col>\r\n      <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n        <img src=\"assets/icon/7.jpeg\" width=\"95%\" height=\"75%\" />\r\n        <ion-input\r\n          style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\"\r\n          type=\"number\" [(ngModel)]=\"txt7\"></ion-input>\r\n      </ion-col>\r\n      <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n        <img src=\"assets/icon/Tara.jpeg\" width=\"95%\" height=\"75%\" />\r\n        <ion-input\r\n          style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\"\r\n          type=\"number\" [(ngModel)]=\"txt8\"></ion-input>\r\n      </ion-col>\r\n      <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n        <img src=\"assets/icon/9.jpeg\" width=\"95%\" height=\"75%\" />\r\n        <ion-input\r\n          style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\"\r\n          type=\"number\" [(ngModel)]=\"txt9\"></ion-input>\r\n      </ion-col>\r\n      <ion-col style=\"text-align: center;\" full no-margin no-padding>\r\n        <img src=\"assets/icon/10.jpeg\" width=\"95%\" height=\"75%\" />\r\n        <ion-input\r\n          style=\"background-color: black; margin-left: 30%; width:40%; height:20px; border-radius: 30px; color: white;\"\r\n          type=\"number\" [(ngModel)]=\"txt0\"></ion-input>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <div class=\"container\">\r\n    <div>\r\n      <ion-button class=\"special-bottom-button\" shape=\"round\" color=\"tertiary\" style=\"color:purple;\"\r\n        (click)=\"onLogout()\">\r\n        <ion-icon name=\"exit\"></ion-icon>Exit\r\n      </ion-button>\r\n    </div>\r\n    <div>\r\n      <ion-button class=\"special-bottom-button\" shape=\"round\" color=\"danger\" style=\"color:rgb(1.755, 38, 0);\"\r\n        (click)=\"onClear()\">\r\n        <ion-icon name=\"nuclear\"></ion-icon>Clear\r\n      </ion-button>\r\n    </div>\r\n    <div>\r\n      <ion-button class=\"special-bottom-button\" shape=\"round\" color=\"dark\" style=\"color:lightskyblue;\"\r\n        (click)=\"onJackpot()\">\r\n        <ion-icon name=\"filing\"></ion-icon>Jackpot\r\n      </ion-button>\r\n    </div>\r\n    <div>\r\n      <ion-button class=\"special-bottom-button\" shape=\"round\" color=\"primary\" style=\"color:yellow;\"\r\n        (click)=\"onDoubleJackpot()\">\r\n        <ion-icon name=\"filing\"></ion-icon>Double Jackpot\r\n      </ion-button>\r\n    </div>\r\n    <div>\r\n      <ion-button class=\"special-bottom-button\" shape=\"round\" color=\"warning\" style=\"color:black;\" (click)=\"onSubmit()\">\r\n        <ion-icon name=\"checkbox-outline\"></ion-icon>Submit\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/util/node_modules/inherits/inherits_browser.js":
/*!*********************************************************************!*\
  !*** ./node_modules/util/node_modules/inherits/inherits_browser.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/util/node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;


/***/ }),

/***/ "./src/app/program/program.module.ts":
/*!*******************************************!*\
  !*** ./src/app/program/program.module.ts ***!
  \*******************************************/
/*! exports provided: ProgramPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramPageModule", function() { return ProgramPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _program_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./program.page */ "./src/app/program/program.page.ts");







var routes = [
    {
        path: '',
        component: _program_page__WEBPACK_IMPORTED_MODULE_6__["ProgramPage"]
    }
];
var ProgramPageModule = /** @class */ (function () {
    function ProgramPageModule() {
    }
    ProgramPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_program_page__WEBPACK_IMPORTED_MODULE_6__["ProgramPage"]]
        })
    ], ProgramPageModule);
    return ProgramPageModule;
}());



/***/ }),

/***/ "./src/app/program/program.page.scss":
/*!*******************************************!*\
  !*** ./src/app/program/program.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bottomRow {\n  margin-top: -2%;\n}\n\n.bottomRow2 {\n  margin-left: 10px;\n}\n\nh4 {\n  margin-top: 0px;\n}\n\nimg {\n  border-radius: 10px;\n  background-color: #008000;\n}\n\n.special-bottom-button {\n  height: 30px;\n}\n\n.container {\n  font-size: 12px;\n  display: grid;\n  grid-template-columns: 110px 125px 145px 215px 120px;\n  position: fixed;\n  left: 5px;\n  bottom: 0px;\n  right: 0;\n}\n\n.special-span {\n  margin-right: 40%;\n}\n\n.special-span2 {\n  margin-left: 65%;\n}\n\nion-input {\n  position: relative;\n  top: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3JhbS9EOlxcU0ZcXElvbmljXFxIUy9zcmNcXGFwcFxccHJvZ3JhbVxccHJvZ3JhbS5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2dyYW0vcHJvZ3JhbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFLRSxlQUFBO0FDSEY7O0FES0E7RUFJRSxpQkFBQTtBQ0xGOztBRE9BO0VBQ0UsZUFBQTtBQ0pGOztBRE1BO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtBQ0hGOztBREtBO0VBSUUsWUFBQTtBQ0xGOztBRFNBO0VBRUUsZUFBQTtFQUNBLGFBQUE7RUFDQSxvREFBQTtFQUVBLGVBQUE7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUNSSjs7QURXQTtFQUNFLGlCQUFBO0FDUkY7O0FEVUE7RUFDRSxnQkFBQTtBQ1BGOztBRFVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FDUEYiLCJmaWxlIjoic3JjL2FwcC9wcm9ncmFtL3Byb2dyYW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvdHRvbVJvd1xyXG57XHJcbiAgLy8gbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8vIHRvcDogMHB4O1xyXG4gIG1hcmdpbi10b3A6IC0yJTtcclxufVxyXG4uYm90dG9tUm93MlxyXG57XHJcbiAgLy8gbWFyZ2luLWJvdHRvbTogLTVweDtcclxuICAvLyBmbG9hdDpsZWZ0O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbmg0e1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5pbWd7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MDAwO1xyXG59XHJcbi5zcGVjaWFsLWJvdHRvbS1idXR0b257XHJcbiAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8vIGJvdHRvbTogICAtNzBweDtcclxuICAvLyBsZWZ0OiA1JTtcclxuICBoZWlnaHQ6MzBweDtcclxuICAvLyBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgLy8gZmxvYXQ6Ym90dG9tO1xyXG59XHJcbi5jb250YWluZXIgeyAgXHJcbiAgLy8gbWFyZ2luLWxlZnQ6MTBweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZGlzcGxheTogZ3JpZDsgIFxyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTEwcHggMTI1cHggMTQ1cHggMjE1cHggMTIwcHg7ICBcclxuICAvLyBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDVweDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgLy8gZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDUwcHg7ICBcclxufVxyXG4uc3BlY2lhbC1zcGFue1xyXG4gIG1hcmdpbi1yaWdodDogNDAlO1xyXG59XHJcbi5zcGVjaWFsLXNwYW4ye1xyXG4gIG1hcmdpbi1sZWZ0OiA2NSU7XHJcbiAgLy8gbWFyZ2luLXRvcDogLTIwcHg7XHJcbn1cclxuaW9uLWlucHV0e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6MHB4O1xyXG59XHJcbmlvbi1ncmlke1xyXG4gIC8vIG1hcmdpbi10b3A6LTVweDtcclxuICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy8gYm90dG9tOiAxMHB4O1xyXG59XHJcbmg0e1xyXG4gIC8vIG1hcmdpbi10b3A6LTFweDtcclxufSIsIi5ib3R0b21Sb3cge1xuICBtYXJnaW4tdG9wOiAtMiU7XG59XG5cbi5ib3R0b21Sb3cyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbmg0IHtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG5pbWcge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MDAwO1xufVxuXG4uc3BlY2lhbC1ib3R0b20tYnV0dG9uIHtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDExMHB4IDEyNXB4IDE0NXB4IDIxNXB4IDEyMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDVweDtcbiAgYm90dG9tOiAwcHg7XG4gIHJpZ2h0OiAwO1xufVxuXG4uc3BlY2lhbC1zcGFuIHtcbiAgbWFyZ2luLXJpZ2h0OiA0MCU7XG59XG5cbi5zcGVjaWFsLXNwYW4yIHtcbiAgbWFyZ2luLWxlZnQ6IDY1JTtcbn1cblxuaW9uLWlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/program/program.page.ts":
/*!*****************************************!*\
  !*** ./src/app/program/program.page.ts ***!
  \*****************************************/
/*! exports provided: ProgramPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramPage", function() { return ProgramPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _services_user_db_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user-db.service */ "./src/app/services/user-db.service.ts");
/* harmony import */ var _services_program_db_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/program-db.service */ "./src/app/services/program-db.service.ts");
/* harmony import */ var _shared_draw_type_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/draw_type_class */ "./src/app/shared/draw_type_class.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_9__);










var ProgramPage = /** @class */ (function () {
    function ProgramPage(route, statusBar, screenOrientation, userDb, programDb, alertController, toastController) {
        this.route = route;
        this.statusBar = statusBar;
        this.screenOrientation = screenOrientation;
        this.userDb = userDb;
        this.programDb = programDb;
        this.alertController = alertController;
        this.toastController = toastController;
        this.draw_hour = "0";
        this.draw_minute = "0";
        this.am_or_pm = "";
        this.current_date = "0";
        this.current_hour = "0";
        this.current_minute = "0";
        this.current_second = "0";
        this.remaining_minute = "";
        this.remaining_second = "";
        this.userName = localStorage.getItem('UserName');
        this.getBalance();
    }
    ProgramPage.prototype.ionViewDidLoad = function () {
        this.getBalance();
    };
    ProgramPage.prototype.ngOnInit = function () {
        var _this = this;
        this.setTime();
        setInterval(function () {
            _this.setTime();
            _this.getBalance();
        }, 1000);
    };
    ProgramPage.prototype.getBalance = function () {
        var _this = this;
        this.userDb.getBalance(localStorage.getItem('UserId')).subscribe(function (data) {
            if (data.result) {
                _this.userBalance = data.UserBalance;
            }
        });
    };
    ProgramPage.prototype.setTime = function () {
        this.setDrawTimer();
        this.setCurrentTime();
        this.setDifferenceTime();
        this.setCurrentDate();
    };
    ProgramPage.prototype.setCurrentDate = function () {
        var date = new Date().getDate();
        date = date <= 9 ? "0" + date.toString() : date.toString();
        var month = new Date().getUTCMonth() + 1;
        month = month <= 9 ? "0" + month.toString() : month.toString();
        var year = new Date().getFullYear();
        this.current_date = date + "-" + month + "-" + year;
    };
    ProgramPage.prototype.setDifferenceTime = function () {
        var delta = Math.abs(+new Date(this.draw_time) - (+new Date(this.current_time))) / 1000;
        var days = Math.floor(delta / 86400);
        delta -= days * 86400;
        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;
        var minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;
        var seconds = delta % 60;
        this.remaining_minute = minutes <= 9 ? "0" + minutes : minutes.toString();
        this.remaining_second = seconds <= 9 ? "0" + seconds : seconds.toString();
    };
    ProgramPage.prototype.setDrawTimer = function () {
        var today = new Date();
        var minute = today.getMinutes();
        if (minute >= 45 && minute <= 59) {
            this.draw_hour = new Date(new Date().setHours(new Date().getHours() + 1)).getHours().toString();
            // this.draw_hour=this.addHours(today,1);
        }
        else {
            this.draw_hour = today.getHours().toString();
        }
        var draw_hour_number = +this.draw_hour;
        this.am_or_pm = draw_hour_number >= 12 ? "PM" : "AM";
        var number_hour = +this.draw_hour;
        number_hour = number_hour % 12;
        number_hour = number_hour ? number_hour : 12;
        this.draw_hour = number_hour <= 9 ? "0" + number_hour + "" : number_hour.toString();
        var currentMinutes = today.getMinutes();
        if (currentMinutes >= 0 && currentMinutes <= 14) {
            this.draw_minute = "15";
        }
        else if (currentMinutes >= 15 && currentMinutes <= 29) {
            this.draw_minute = "30";
        }
        else if (currentMinutes >= 30 && currentMinutes <= 44) {
            this.draw_minute = "45";
        }
        else {
            this.draw_minute = "00";
        }
        var draw_minute_number = +this.draw_minute;
        this.draw_time = new Date().setHours(draw_hour_number, draw_minute_number, 0);
    };
    ProgramPage.prototype.setCurrentTime = function () {
        var date = new Date();
        var hours = date.getHours();
        hours = hours % 12;
        hours = hours ? hours : 12;
        this.current_hour = hours <= 9 ? '0' + hours.toString() : hours.toString();
        this.current_minute = date.getMinutes() < 10 ? "0" + date.getMinutes().toString() : date.getMinutes().toString();
        this.current_second = date.getSeconds() < 10 ? "0" + date.getSeconds().toString() : date.getSeconds().toString();
        this.current_time = date.getTime();
    };
    ProgramPage.prototype.addHours = function (date, hour) {
        var anotherDay = date.setTime(date.getTime() + (hour * 60 * 60 * 100));
        var dateAnother = new Date(anotherDay);
        return dateAnother.getHours().toString();
    };
    ProgramPage.prototype.ionViewWillEnter = function () {
        this.statusBar.hide();
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    };
    ProgramPage.prototype.onLogout = function () {
        this.route.navigateByUrl('/dashboard');
    };
    ProgramPage.prototype.onDoubleJackpot = function () {
        this.route.navigateByUrl('/double-jackpot');
    };
    ProgramPage.prototype.checkNullAndZero = function () {
        var result = false;
        if (!Object(util__WEBPACK_IMPORTED_MODULE_9__["isNull"])(this.txt1) && this.txt1 != 0) {
            result = true;
            return result;
        }
        if (!Object(util__WEBPACK_IMPORTED_MODULE_9__["isNull"])(this.txt2) && this.txt2 != 0) {
            result = true;
            return result;
        }
        if (!Object(util__WEBPACK_IMPORTED_MODULE_9__["isNull"])(this.txt3) && this.txt3 != 0) {
            result = true;
            return result;
        }
        if (!Object(util__WEBPACK_IMPORTED_MODULE_9__["isNull"])(this.txt4) && this.txt4 != 0) {
            result = true;
            return result;
        }
        if (!Object(util__WEBPACK_IMPORTED_MODULE_9__["isNull"])(this.txt5) && this.txt5 != 0) {
            result = true;
            return result;
        }
        if (!Object(util__WEBPACK_IMPORTED_MODULE_9__["isNull"])(this.txt6) && this.txt6 != 0) {
            result = true;
            return result;
        }
        if (!Object(util__WEBPACK_IMPORTED_MODULE_9__["isNull"])(this.txt7) && this.txt7 != 0) {
            result = true;
            return result;
        }
        if (!Object(util__WEBPACK_IMPORTED_MODULE_9__["isNull"])(this.txt8) && this.txt8 != 0) {
            result = true;
            return result;
        }
        if (!Object(util__WEBPACK_IMPORTED_MODULE_9__["isNull"])(this.txt9) && this.txt9 != 0) {
            result = true;
            return result;
        }
        if (!Object(util__WEBPACK_IMPORTED_MODULE_9__["isNull"])(this.txt0) && this.txt0 != 0) {
            result = true;
            return result;
        }
        return result;
    };
    ProgramPage.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var battingAlert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            buttons: ['OK']
                        })];
                    case 1:
                        battingAlert = _a.sent();
                        if (!this.checkNullAndZero()) {
                            battingAlert.message = "Enter Proper Ticket Quantity!";
                            battingAlert.present();
                        }
                        else {
                            this.programDb.submitDraw(new _shared_draw_type_class__WEBPACK_IMPORTED_MODULE_7__["DrawType"](Number(this.txt1), Number(this.txt2), Number(this.txt3), Number(this.txt4), Number(this.txt5), Number(this.txt6), Number(this.txt7), Number(this.txt8), Number(this.txt9), Number(this.txt0), Number(localStorage.getItem('UserId')), 'Normal')).subscribe(function (data) {
                                if (data.result) {
                                    battingAlert.message = "Batting Successfully!!!";
                                }
                                else if (data.reason == 405) {
                                    battingAlert.message = "Low Balance!!!";
                                }
                                else {
                                    battingAlert.message = "Batting Unsuccessfully!!!";
                                }
                                battingAlert.present();
                            }, function (err) {
                                console.log(err);
                            }, function () {
                                _this.userDb.getBalance(localStorage.getItem('UserId')).subscribe(function (data) {
                                    if (data.result) {
                                        _this.userBalance = data.UserBalance;
                                    }
                                });
                            });
                        }
                        this.txt0 = this.txt1 = this.txt2 = this.txt3 = this.txt4 = this.txt5 = this.txt6 = this.txt7 = this.txt8 = this.txt9 = null;
                        return [2 /*return*/];
                }
            });
        });
    };
    ProgramPage.prototype.onJackpot = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Please enter ticket',
                            inputs: [
                                {
                                    name: 'ticket',
                                    type: 'number',
                                    placeholder: 'Please enter ticket'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                    }
                                }, {
                                    text: 'Okay',
                                    handler: function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                        var ticket, battingAlert;
                                        var _this = this;
                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    ticket = data.ticket;
                                                    return [4 /*yield*/, this.alertController.create({
                                                            buttons: ['OK']
                                                        })];
                                                case 1:
                                                    battingAlert = _a.sent();
                                                    if (!Object(util__WEBPACK_IMPORTED_MODULE_9__["isNull"])(ticket) && ticket != 0) {
                                                        this.txt1 = ticket;
                                                        this.txt2 = ticket;
                                                        this.txt3 = ticket;
                                                        this.txt4 = ticket;
                                                        this.txt5 = ticket;
                                                        this.txt6 = ticket;
                                                        this.txt7 = ticket;
                                                        this.txt8 = ticket;
                                                        this.txt9 = ticket;
                                                        this.txt0 = ticket;
                                                        this.programDb.submitDraw(new _shared_draw_type_class__WEBPACK_IMPORTED_MODULE_7__["DrawType"](Number(this.txt1), Number(this.txt2), Number(this.txt3), Number(this.txt4), Number(this.txt5), Number(this.txt6), Number(this.txt7), Number(this.txt8), Number(this.txt9), Number(this.txt0), Number(localStorage.getItem('UserId')), 'Jackpot')).subscribe(function (data) {
                                                            if (data.result) {
                                                                battingAlert.message = "Batting Successfully!!!";
                                                            }
                                                            else if (data.reason == 405) {
                                                                battingAlert.message = "Low Balance!!!";
                                                            }
                                                            else {
                                                                battingAlert.message = "Batting Unsuccessfully!!!";
                                                            }
                                                            battingAlert.present();
                                                        }, function (err) {
                                                            console.log(err);
                                                        }, function () {
                                                            _this.userDb.getBalance(localStorage.getItem('UserId')).subscribe(function (data) {
                                                                if (data.result) {
                                                                    _this.userBalance = data.UserBalance;
                                                                }
                                                            });
                                                        });
                                                    }
                                                    else {
                                                        battingAlert.message = "Enter Proper Ticket Quantity!";
                                                        battingAlert.present();
                                                    }
                                                    this.txt0 = this.txt1 = this.txt2 = this.txt3 = this.txt4 = this.txt5 = this.txt6 = this.txt7 = this.txt8 = this.txt9 = null;
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProgramPage.prototype.onClear = function () {
        this.txt0 = this.txt1 = this.txt2 = this.txt3 = this.txt4 = this.txt5 = this.txt6 = this.txt7 = this.txt8 = this.txt9 = null;
    };
    ProgramPage.ctorParameters = function () { return [
        { type: _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
        { type: _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__["ScreenOrientation"] },
        { type: _services_user_db_service__WEBPACK_IMPORTED_MODULE_5__["UserDbService"] },
        { type: _services_program_db_service__WEBPACK_IMPORTED_MODULE_6__["ProgramDbService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"] }
    ]; };
    ProgramPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-program',
            template: __webpack_require__(/*! raw-loader!./program.page.html */ "./node_modules/raw-loader/index.js!./src/app/program/program.page.html"),
            styles: [__webpack_require__(/*! ./program.page.scss */ "./src/app/program/program.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__["ScreenOrientation"],
            _services_user_db_service__WEBPACK_IMPORTED_MODULE_5__["UserDbService"],
            _services_program_db_service__WEBPACK_IMPORTED_MODULE_6__["ProgramDbService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"]])
    ], ProgramPage);
    return ProgramPage;
}());



/***/ }),

/***/ "./src/app/shared/draw_type_class.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/draw_type_class.ts ***!
  \*******************************************/
/*! exports provided: DrawType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawType", function() { return DrawType; });
var DrawType = /** @class */ (function () {
    function DrawType(txt1, txt2, txt3, txt4, txt5, txt6, txt7, txt8, txt9, txt0, UserId, dt) {
        this.txt1 = txt1;
        this.txt2 = txt2;
        this.txt3 = txt3;
        this.txt4 = txt4;
        this.txt5 = txt5;
        this.txt6 = txt6;
        this.txt7 = txt7;
        this.txt8 = txt8;
        this.txt9 = txt9;
        this.txt0 = txt0;
        this.UserId = UserId;
        this.dt = dt;
    }
    DrawType.ctorParameters = function () { return [
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: Number },
        { type: String }
    ]; };
    return DrawType;
}());



/***/ })

}]);
//# sourceMappingURL=program-program-module-es5.js.map