(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{559:function(n,t,e){"use strict";e.r(t);var r=e(4),a=Object(r.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"输入函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#输入函数"}},[n._v("#")]),n._v(" 输入函数")]),n._v(" "),e("p",[n._v("既然闭包可以作为参数，你很可能想知道函数是否也可以呢。确实可以！如果你声明一个\n接受闭包作为参数的函数，那么任何满足该闭包的 trait 约束的函数都可以作为其参数。")]),n._v(" "),e("div",{staticClass:"language-rust,editable extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('// 定义一个函数，可以接受一个由 `Fn` 限定的泛型 `F` 参数并调用它。\nfn call_me<F: Fn()>(f: F) {\n    f()\n}\n\n// 定义一个满足 `Fn` 约束的封装函数（wrapper function）。\nfn function() {\n    println!("I\'m a function!");\n}\n\nfn main() {\n    // 定义一个满足 `Fn` 约束的闭包。\n    let closure = || println!("I\'m a closure!");\n    \n    call_me(closure);\n    call_me(function);\n}\n')])])]),e("p",[n._v("多说一句，"),e("code",[n._v("Fn")]),n._v("、"),e("code",[n._v("FnMut")]),n._v(" 和 "),e("code",[n._v("FnOnce")]),n._v(" 这些 "),e("code",[n._v("trait")]),n._v(" 明确了闭包如何从周围的作用域\n中捕获变量。")]),n._v(" "),e("h3",{attrs:{id:"参见："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参见："}},[n._v("#")]),n._v(" 参见：")]),n._v(" "),e("p",[e("a",{attrs:{href:"http://doc.rust-lang.org/std/ops/trait.Fn.html",target:"_blank",rel:"noopener noreferrer"}},[e("code",[n._v("Fn")]),e("OutboundLink")],1),n._v(", "),e("a",{attrs:{href:"http://doc.rust-lang.org/std/ops/trait.FnMut.html",target:"_blank",rel:"noopener noreferrer"}},[e("code",[n._v("FnMut")]),e("OutboundLink")],1),n._v(", 和 "),e("a",{attrs:{href:"http://doc.rust-lang.org/std/ops/trait.FnOnce.html",target:"_blank",rel:"noopener noreferrer"}},[e("code",[n._v("FnOnce")]),e("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);