(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{611:function(t,n,e){"use strict";e.r(n);var l=e(4),r=Object(l.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"ref-模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ref-模式"}},[t._v("#")]),t._v(" "),e("code",[t._v("ref")]),t._v(" 模式")]),t._v(" "),e("p",[t._v("在通过 "),e("code",[t._v("let")]),t._v(" 绑定来进行模式匹配或解构时，"),e("code",[t._v("ref")]),t._v(" 关键字可用来创建结构体/元组的\n字段的引用。下面的例子展示了几个实例，可看到 "),e("code",[t._v("ref")]),t._v(" 的作用：")]),t._v(" "),e("div",{staticClass:"language-rust,editable extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('#[derive(Clone, Copy)]\nstruct Point { x: i32, y: i32 }\n\nfn main() {\n    let c = \'Q\';\n\n    // 赋值语句中左边的 `ref` 关键字等价于右边的 `&` 符号。\n    let ref ref_c1 = c;\n    let ref_c2 = &c;\n\n    println!("ref_c1 equals ref_c2: {}", *ref_c1 == *ref_c2);\n\n    let point = Point { x: 0, y: 0 };\n\n    // 在解构一个结构体时 `ref` 同样有效。\n    let _copy_of_x = {\n        // `ref_to_x` 是一个指向 `point` 的 `x` 字段的引用。\n        let Point { x: ref ref_to_x, y: _ } = point;\n\n        // 返回一个 `point` 的 `x` 字段的拷贝。\n        *ref_to_x\n    };\n\n    // `point` 的可变拷贝\n    let mut mutable_point = point;\n\n    {\n        // `ref` 可以与 `mut` 结合以创建可变引用。\n        let Point { x: _, y: ref mut mut_ref_to_y } = mutable_point;\n\n        // 通过可变引用来改变 `mutable_point` 的字段 `y`。\n        *mut_ref_to_y = 1;\n    }\n\n    println!("point is ({}, {})", point.x, point.y);\n    println!("mutable_point is ({}, {})", mutable_point.x, mutable_point.y);\n\n    // 包含一个指针的可变元组\n    let mut mutable_tuple = (Box::new(5u32), 3u32);\n    \n    {\n        // 解构 `mutable_tuple` 来改变 `last` 的值。\n        let (_, ref mut last) = mutable_tuple;\n        *last = 2u32;\n    }\n    \n    println!("tuple is {:?}", mutable_tuple);\n}\n')])])])])}),[],!1,null,null,null);n.default=r.exports}}]);