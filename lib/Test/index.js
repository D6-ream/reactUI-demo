"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var debug_1 = __importDefault(require("debug"));
var log = debug_1.default('reactUI:Test');
var Test = /** @class */ (function (_super) {
    __extends(Test, _super);
    function Test(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            stateString: 'Test',
        };
        return _this;
    }
    Test.prototype.render = function () {
        var stateString = this.state.stateString;
        var _a = this.props, propsString = _a.propsString, propsObject = _a.propsObject, propsNumber = _a.propsNumber;
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("div", null, stateString),
            react_1.default.createElement("div", null, propsString),
            react_1.default.createElement("div", null, propsObject.infoString),
            react_1.default.createElement("div", null, propsObject.infoNumber),
            react_1.default.createElement("div", null, propsNumber)));
    };
    Test.displayName = 'Test';
    return Test;
}(react_1.default.Component));
exports.default = Test;
//# sourceMappingURL=index.js.map