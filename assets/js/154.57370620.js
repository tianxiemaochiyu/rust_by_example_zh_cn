(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{634:function(n,e,r){"use strict";r.r(e);var t=r(4),o=Object(t.a)({},(function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[r("h1",{attrs:{id:"运算符"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#运算符"}},[n._v("#")]),n._v(" "),r("code",[n._v("?")]),n._v(" 运算符")]),n._v(" "),r("p",[n._v("把 result 用 match 连接起来会显得很难看；幸运的是，"),r("code",[n._v("?")]),n._v(" 运算符可以把这种逻辑变得\n干净漂亮。"),r("code",[n._v("?")]),n._v(" 运算符用在返回值为 "),r("code",[n._v("Result")]),n._v(" 的表达式后面，它等同于这样一个匹配\n表达式：其中 "),r("code",[n._v("Err(err)")]),n._v(" 分支展开成提前返回的 "),r("code",[n._v("return Err(err)")]),n._v("，而 "),r("code",[n._v("Ok(ok)")]),n._v("\n分支展开成 "),r("code",[n._v("ok")]),n._v(" 表达式。")]),n._v(" "),r("div",{staticClass:"language-rust,editable,ignore,mdbook-runnable extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[n._v('mod checked {\n    #[derive(Debug)]\n    enum MathError {\n        DivisionByZero,\n        NegativeLogarithm,\n        NegativeSquareRoot,\n    }\n\n    type MathResult = Result<f64, MathError>;\n\n    fn div(x: f64, y: f64) -> MathResult {\n        if y == 0.0 {\n            Err(MathError::DivisionByZero)\n        } else {\n            Ok(x / y)\n        }\n    }\n\n    fn sqrt(x: f64) -> MathResult {\n        if x < 0.0 {\n            Err(MathError::NegativeSquareRoot)\n        } else {\n            Ok(x.sqrt())\n        }\n    }\n\n    fn ln(x: f64) -> MathResult {\n        if x < 0.0 {\n            Err(MathError::NegativeLogarithm)\n        } else {\n            Ok(x.ln())\n        }\n    }\n\n    // 中间函数\n    fn op_(x: f64, y: f64) -> MathResult {\n        // 如果 `div` “失败” 了，那么返回 `DivisionByZero`\n        let ratio = div(x, y)?;\n\n        // 如果 `ln` “失败” 了，那么返回 `NegativeLogarithm`\n        let ln = ln(ratio)?;\n\n        sqrt(ln)\n    }\n\n    pub fn op(x: f64, y: f64) {\n        match op_(x, y) {\n            Err(why) => panic!(match why {\n                MathError::NegativeLogarithm\n                    => "logarithm of negative number",\n                MathError::DivisionByZero\n                    => "division by zero",\n                MathError::NegativeSquareRoot\n                    => "square root of negative number",\n            }),\n            Ok(value) => println!("{}", value),\n        }\n    }\n}\n\nfn main() {\n    checked::op(1.0, 10.0);\n}\n')])])]),r("p",[n._v("记得查阅"),r("a",{attrs:{href:"https://doc.rust-lang.org/std/result/index.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("文档"),r("OutboundLink")],1),n._v("，里面有很多匹配/组合 "),r("code",[n._v("Result")]),n._v(" 的方法。")])])}),[],!1,null,null,null);e.default=o.exports}}]);