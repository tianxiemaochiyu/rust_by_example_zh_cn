(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{661:function(n,t,e){"use strict";e.r(t);var r=e(4),o=Object(r.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"drop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#drop"}},[n._v("#")]),n._v(" Drop")]),n._v(" "),e("p",[e("a",{attrs:{href:"https://doc.rust-lang.org/std/ops/trait.Drop.html",target:"_blank",rel:"noopener noreferrer"}},[e("code",[n._v("Drop")]),e("OutboundLink")],1),n._v(" trait 只有一个方法："),e("code",[n._v("drop")]),n._v("，当对象离开作用域时会自动调用该\n方法。"),e("code",[n._v("Drop")]),n._v(" trait 的主要作用是释放实现者的实例拥有的资源。")]),n._v(" "),e("p",[e("code",[n._v("Box")]),n._v("，"),e("code",[n._v("Vec")]),n._v("，"),e("code",[n._v("String")]),n._v("，"),e("code",[n._v("File")]),n._v("，以及 "),e("code",[n._v("Process")]),n._v(" 是一些实现了 "),e("code",[n._v("Drop")]),n._v(" trait 来释放\n资源的类型。"),e("code",[n._v("Drop")]),n._v(" trait 也可以为任何自定义数据类型手动实现。")]),n._v(" "),e("p",[n._v("下面示例给 "),e("code",[n._v("drop")]),n._v(" 函数增加了打印到控制台的功能，用于宣布它在什么时候被调用。\nwhen it is called.）")]),n._v(" "),e("div",{staticClass:"language-rust,editable extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('struct Droppable {\n    name: &\'static str,\n}\n\n// 这个简单的 `drop` 实现添加了打印到控制台的功能。\nimpl Drop for Droppable {\n    fn drop(&mut self) {\n        println!("> Dropping {}", self.name);\n    }\n}\n\nfn main() {\n    let _a = Droppable { name: "a" };\n\n    // 代码块 A\n    {\n        let _b = Droppable { name: "b" };\n\n        // 代码块 B\n        {\n            let _c = Droppable { name: "c" };\n            let _d = Droppable { name: "d" };\n\n            println!("Exiting block B");\n        }\n        println!("Just exited block B");\n\n        println!("Exiting block A");\n    }\n    println!("Just exited block A");\n\n    // 变量可以手动使用 `drop` 函数来销毁。\n    drop(_a);\n    // 试一试 ^ 将此行注释掉。\n\n    println!("end of the main function");\n\n    // `_a` *不会*在这里再次销毁，因为它已经被（手动）销毁。\n}\n')])])])])}),[],!1,null,null,null);t.default=o.exports}}]);