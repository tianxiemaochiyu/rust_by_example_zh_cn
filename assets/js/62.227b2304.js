(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{541:function(n,t,e){"use strict";e.r(t);var a=e(4),r=Object(a.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"match-匹配"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#match-匹配"}},[n._v("#")]),n._v(" match 匹配")]),n._v(" "),e("p",[n._v("Rust 通过 "),e("code",[n._v("match")]),n._v(" 关键字来提供模式匹配，用法和 C 语言的的 "),e("code",[n._v("switch")]),n._v(" 类似。")]),n._v(" "),e("div",{staticClass:"language-rust,editable extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('fn main() {\n    let number = 13;\n    // 试一试 ^ 将不同的值赋给 `number`\n\n    println!("Tell me about {}", number);\n    match number {\n        // 匹配单个值\n        1 => println!("One!"),\n        // 匹配多个值\n        2 | 3 | 5 | 7 | 11 => println!("This is a prime"),\n        // 匹配一个闭区间范围\n        13..=19 => println!("A teen"),\n        // 处理其他情况\n        _ => println!("Ain\'t special"),\n    }\n\n    let boolean = true;\n    // match 也是一个表达式\n    let binary = match boolean {\n        // match 分支必须覆盖所有可能的值\n        false => 0,\n        true => 1,\n        // 试一试 ^ 将其中一条分支注释掉\n    };\n\n    println!("{} -> {}", boolean, binary);\n}\n')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);