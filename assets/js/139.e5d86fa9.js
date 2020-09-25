(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{618:function(t,n,e){"use strict";e.r(n);var r=e(4),a=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),e("p",[t._v("方法的标注和函数类似：")]),t._v(" "),e("div",{staticClass:"language-rust,editable extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("struct Owner(i32);\n\nimpl Owner {\n    // 标注生命周期，就像独立的函数一样。\n    fn add_one<'a>(&'a mut self) { self.0 += 1; }\n    fn print<'a>(&'a self) {\n        println!(\"`print`: {}\", self.0);\n    }\n}\n\nfn main() {\n    let mut owner  = Owner(18);\n\n    owner.add_one();\n    owner.print();\n}\n")])])]),e("blockquote",[e("p",[t._v("译注：方法一般是不需要标明生命周期的，因为 "),e("code",[t._v("self")]),t._v(" 的生命周期会赋给所有的输出\n生命周期参数，详见 "),e("a",{attrs:{href:"https://doc.rust-lang.org/book/second-edition/ch10-03-lifetime-syntax.html#lifetime-elision",target:"_blank",rel:"noopener noreferrer"}},[t._v("TRPL"),e("OutboundLink")],1),t._v("。")])]),t._v(" "),e("h3",{attrs:{id:"参见："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参见："}},[t._v("#")]),t._v(" 参见：")]),t._v(" "),e("p",[e("RouterLink",{attrs:{to:"/fn/methods.html"}},[t._v("methods")])],1)])}),[],!1,null,null,null);n.default=a.exports}}]);