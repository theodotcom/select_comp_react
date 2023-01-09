"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Select.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Select = function Select(_ref) {
  var items = _ref.items,
    _onChange = _ref.onChange,
    selected = _ref.selected;
  return /*#__PURE__*/_react.default.createElement("select", {
    defaultValue: selected,
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    }
  }, items.map(function (i) {
    return /*#__PURE__*/_react.default.createElement("option", {
      key: i.value,
      value: i.value
    }, i.label);
  }));
};
exports.Select = Select;