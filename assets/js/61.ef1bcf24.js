(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{538:function(t,e,n){"use strict";n.r(e);var o=n(4),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"从-loop-循环中返回"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#从-loop-循环中返回"}},[t._v("#")]),t._v(" 从 loop 循环中返回")]),t._v(" "),n("p",[n("code",[t._v("loop")]),t._v(" 有个用途是尝试一个操作直到成功为止。若操作返回一个值，则可能需要将其传递\n给代码的其余部分：将该值放在 "),n("code",[t._v("break")]),t._v(" 之后，它就会被 "),n("code",[t._v("loop")]),t._v(" 表达式返回。")]),t._v(" "),n("div",{staticClass:"language-rust,editable extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("fn main() {\n    let mut counter = 0;\n\n    let result = loop {\n        counter += 1;\n\n        if counter == 10 {\n            break counter * 2;\n        }\n    };\n\n    assert_eq!(result, 20);\n}\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);