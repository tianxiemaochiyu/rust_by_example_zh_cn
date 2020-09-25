(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{625:function(n,a,e){"use strict";e.r(a);var t=e(4),s=Object(t.a)({},(function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"散列表-hashmap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#散列表-hashmap"}},[n._v("#")]),n._v(" 散列表 HashMap")]),n._v(" "),e("p",[n._v("vector 通过整型下标来存储值，而 "),e("code",[n._v("HashMap")]),n._v("（散列表）通过键（key）来存储\n值。"),e("code",[n._v("HashMap")]),n._v(" 的键可以是布尔型、整型、字符串，或任意实现了 "),e("code",[n._v("Eq")]),n._v(" 和 "),e("code",[n._v("Hash")]),n._v(" trait\n的其他类型。在下一节将进一步介绍。")]),n._v(" "),e("p",[n._v("和 vector 类似，"),e("code",[n._v("HashMap")]),n._v(" 也是可增长的，但 HashMap 在占据了多余空间时还可以缩小\n自己。可以使用 "),e("code",[n._v("HashMap::with_capacity(unit)")]),n._v(" 创建具有一定初始容量的 HashMap，也\n可以使用 "),e("code",[n._v("HashMap::new()")]),n._v(" 来获得一个带有默认初始容量的 HashMap（这是推荐方式）。")]),n._v(" "),e("div",{staticClass:"language-rust,editable extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('use std::collections::HashMap;\n\nfn call(number: &str) -> &str {\n    match number {\n        "798-1364" => "We\'re sorry, the call cannot be completed as dialed. \n            Please hang up and try again.",\n        "645-7689" => "Hello, this is Mr. Awesome\'s Pizza. My name is Fred.\n            What can I get for you today?",\n        _ => "Hi! Who is this again?"\n    }\n}\n\nfn main() { \n    let mut contacts = HashMap::new();\n\n    contacts.insert("Daniel", "798-1364");\n    contacts.insert("Ashley", "645-7689");\n    contacts.insert("Katie", "435-8291");\n    contacts.insert("Robert", "956-1745");\n\n    // 接受一个引用并返回 Option<&V>\n    match contacts.get(&"Daniel") {\n        Some(&number) => println!("Calling Daniel: {}", call(number)),\n        _ => println!("Don\'t have Daniel\'s number."),\n    }\n\n    // 如果被插入的值为新内容，那么 `HashMap::insert()` 返回 `None`，\n    // 否则返回 `Some(value)`\n    contacts.insert("Daniel", "164-6743");\n\n    match contacts.get(&"Ashley") {\n        Some(&number) => println!("Calling Ashley: {}", call(number)),\n        _ => println!("Don\'t have Ashley\'s number."),\n    }\n\n    contacts.remove(&("Ashley")); \n\n    // `HashMap::iter()` 返回一个迭代器，该迭代器以任意顺序举出\n    // (&\'a key, &\'a value) 对。\n    for (contact, &number) in contacts.iter() {\n        println!("Calling {}: {}", contact, call(number)); \n    }\n}\n')])])]),e("p",[n._v("想要了解更多关于散列（hash）与散列表（hash map）（有时也称作 hash table）的\n工作原理，可以查看 Wikipedia 的"),e("a",{attrs:{href:"http://en.wikipedia.org/wiki/Hash_table",target:"_blank",rel:"noopener noreferrer"}},[n._v("散列表"),e("OutboundLink")],1),n._v("词条。")])])}),[],!1,null,null,null);a.default=s.exports}}]);