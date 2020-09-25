(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{672:function(n,e,t){"use strict";t.r(e);var a=t(4),l=Object(a.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"变量绑定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量绑定"}},[n._v("#")]),n._v(" 变量绑定")]),n._v(" "),t("p",[n._v("Rust 通过静态类型确保类型安全。变量绑定可以在声明时说明类型，不过在多数情况下，\n编译器能够从上下文推导出变量的类型，从而大大减少了类型说明的工作。")]),n._v(" "),t("p",[n._v("使用 "),t("code",[n._v("let")]),n._v(" 绑定操作可以将值（比如字面量）绑定（bind）到变量。")]),n._v(" "),t("div",{staticClass:"language-rust,editable extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('fn main() {\n    let an_integer = 1u32;\n    let a_boolean = true;\n    let unit = ();\n\n    // 将 `an_integer` 复制到 `copied_integer`\n    let copied_integer = an_integer;\n\n    println!("An integer: {:?}", copied_integer);\n    println!("A boolean: {:?}", a_boolean);\n    println!("Meet the unit value: {:?}", unit);\n\n    // 编译器会对未使用的变量绑定产生警告；可以给变量名加上下划线前缀来消除警告。\n    let _unused_variable = 3u32;\n\n    let noisy_unused_variable = 2u32;\n    // 改正 ^ 在变量名前加上下划线以消除警告\n}\n')])])])])}),[],!1,null,null,null);e.default=l.exports}}]);