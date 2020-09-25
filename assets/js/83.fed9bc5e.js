(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{562:function(n,t,e){"use strict";e.r(t);var r=e(4),a=Object(r.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"高阶函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高阶函数"}},[n._v("#")]),n._v(" 高阶函数")]),n._v(" "),e("p",[n._v("Rust 提供了高阶函数（Higher Order Function, HOF），指那些输入一个或多个\n函数，并且/或者产生一个更有用的函数的函数。HOF 和惰性迭代器（lazy iterator）给\nRust 带来了函数式（functional）编程的风格。")]),n._v(" "),e("div",{staticClass:"language-rust,editable extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('fn is_odd(n: u32) -> bool {\n    n % 2 == 1\n}\n\nfn main() {\n    println!("Find the sum of all the squared odd numbers under 1000");\n    let upper = 1000;\n\n    // 命令式（imperative）的写法\n    // 声明累加器变量\n    let mut acc = 0;\n    // 迭代：0，1, 2, ... 到无穷大\n    for n in 0.. {\n        // 数字的平方\n        let n_squared = n * n;\n\n        if n_squared >= upper {\n            // 若大于上限则退出循环\n            break;\n        } else if is_odd(n_squared) {\n            // 如果是奇数就计数\n            acc += n_squared;\n        }\n    }\n    println!("imperative style: {}", acc);\n\n    // 函数式的写法\n    let sum_of_squared_odd_numbers: u32 =\n        (0..).map(|n| n * n)             // 所有自然数取平方\n             .take_while(|&n| n < upper) // 取小于上限的\n             .filter(|&n| is_odd(n))     // 取奇数\n             .fold(0, |sum, i| sum + i); // 最后加起来\n    println!("functional style: {}", sum_of_squared_odd_numbers);\n}\n')])])]),e("p",[e("a",{attrs:{href:"http://doc.rust-lang.org/core/option/enum.Option.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("Option"),e("OutboundLink")],1),n._v(" 和 "),e("a",{attrs:{href:"http://doc.rust-lang.org/core/iter/trait.Iterator.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("迭代器"),e("OutboundLink")],1),n._v(" 都实现了不少高阶函数。")])])}),[],!1,null,null,null);t.default=a.exports}}]);