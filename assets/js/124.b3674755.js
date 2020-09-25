(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{603:function(n,e,s){"use strict";s.r(e);var t=s(4),l=Object(t.a)({},(function(){var n=this,e=n.$createElement,s=n._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"数组和切片"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数组和切片"}},[n._v("#")]),n._v(" 数组和切片")]),n._v(" "),s("p",[n._v("数组（array）是一组拥有相同类型 "),s("code",[n._v("T")]),n._v(" 的对象的集合，在内存中是连续存储的。数组使用\n中括号 "),s("code",[n._v("[]")]),n._v(" 来创建，且它们的大小在编译时会被确定。数组的类型标记为 "),s("code",[n._v("[T; size]")]),n._v("（\n译注：T 为元素的类型，size 表示数组的大小）。")]),n._v(" "),s("p",[n._v("切片（slice）类型和数组类似，但其大小在编译时是不确定的。相反，切片是一个双字\n对象（two-word object），第一个字是一个指向数据的指针，第二个字是切片的长度。这\n个 “字” 的宽度和 usize 相同，由处理器架构决定，比如在 x86-64 平台上就是 64 位。\nslice 可以用来借用数组的一部分。slice 的类型标记为 "),s("code",[n._v("&[T]")]),n._v("。")]),n._v(" "),s("div",{staticClass:"language-rust,editable,ignore,mdbook-runnable extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('use std::mem;\n\n// 此函数借用一个 slice\nfn analyze_slice(slice: &[i32]) {\n    println!("first element of the slice: {}", slice[0]);\n    println!("the slice has {} elements", slice.len());\n}\n\nfn main() {\n    // 定长数组（类型标记是多余的）\n    let xs: [i32; 5] = [1, 2, 3, 4, 5];\n\n    // 所有元素可以初始化成相同的值\n    let ys: [i32; 500] = [0; 500];\n\n    // 下标从 0 开始\n    println!("first element of the array: {}", xs[0]);\n    println!("second element of the array: {}", xs[1]);\n\n    // `len` 返回数组的大小\n    println!("array size: {}", xs.len());\n\n    // 数组是在栈中分配的\n    println!("array occupies {} bytes", mem::size_of_val(&xs));\n\n    // 数组可以自动被借用成为 slice\n    println!("borrow the whole array as a slice");\n    analyze_slice(&xs);\n\n    // slice 可以指向数组的一部分\n    println!("borrow a section of the array as a slice");\n    analyze_slice(&ys[1 .. 4]);\n\n    // 越界的下标会引发致命错误（panic）\n    println!("{}", xs[5]);\n}\n')])])])])}),[],!1,null,null,null);e.default=l.exports}}]);