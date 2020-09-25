(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{577:function(t,e,r){"use strict";r.r(e);var n=r(4),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"where-分句"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#where-分句"}},[t._v("#")]),t._v(" where 分句")]),t._v(" "),r("p",[t._v("约束也可以使用 "),r("code",[t._v("where")]),t._v(" 分句来表达，它放在 "),r("code",[t._v("{")]),t._v(" 的前面，而不需写在类型第一次出现\n之前。另外 "),r("code",[t._v("where")]),t._v(" 从句可以用于任意类型的限定，而不局限于类型参数本身。")]),t._v(" "),r("p",[r("code",[t._v("where")]),t._v(" 在下面一些情况下有很用：")]),t._v(" "),r("ul",[r("li",[t._v("当分别指定泛型的类型和约束会更清晰时：")])]),t._v(" "),r("div",{staticClass:"language-rust,ignore extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("impl <A: TraitB + TraitC, D: TraitE + TraitF> MyTrait<A, D> for YourType {}\n\n// 使用 `where` 从句来表达约束\nimpl <A, D> MyTrait<A, D> for YourType where\n    A: TraitB + TraitC,\n    D: TraitE + TraitF {}\n")])])]),r("ul",[r("li",[t._v("当使用 "),r("code",[t._v("where")]),t._v(" 从句比正常语法更有表现力时。本例中的 "),r("code",[t._v("impl")]),t._v(" 如果不用\n"),r("code",[t._v("where")]),t._v(" 从句，就无法直接表达。")])]),t._v(" "),r("div",{staticClass:"language-rust,editable extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('use std::fmt::Debug;\n\ntrait PrintInOption {\n    fn print_in_option(self);\n}\n\n// 这里需要一个 `where` 从句，否则就要表达成 `T: Debug`（这样意思就变了），\n// 或着改用另一种间接的方法。\nimpl<T> PrintInOption for T where\n    Option<T>: Debug {\n    // 我们要将 `Option<T>: Debug` 作为约束，因为那是要打印的内容。\n    // 否则我们会给出错误的约束。\n    fn print_in_option(self) {\n        println!("{:?}", Some(self));\n    }\n}\n\nfn main() {\n    let vec = vec![1, 2, 3];\n\n    vec.print_in_option();\n}\n')])])]),r("h3",{attrs:{id:"参见："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参见："}},[t._v("#")]),t._v(" 参见：")]),t._v(" "),r("p",[t._v("相关的 "),r("a",{attrs:{href:"https://github.com/rust-lang/rfcs/blob/master/text/0135-where.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC"),r("OutboundLink")],1),t._v("、"),r("RouterLink",{attrs:{to:"/custom_types/structs.html"}},[r("code",[t._v("struct")])]),t._v(" 和 "),r("RouterLink",{attrs:{to:"/trait.html"}},[r("code",[t._v("trait")])])],1)])}),[],!1,null,null,null);e.default=a.exports}}]);