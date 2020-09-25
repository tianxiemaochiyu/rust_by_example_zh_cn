(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{600:function(n,e,t){"use strict";t.r(e);var s=t(4),o=Object(s.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"use-声明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-声明"}},[n._v("#")]),n._v(" "),t("code",[n._v("use")]),n._v(" 声明")]),n._v(" "),t("p",[t("code",[n._v("use")]),n._v(" 声明可以将一个完整的路径绑定到一个新的名字，从而更容易访问。")]),n._v(" "),t("div",{staticClass:"language-rust,editable extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('// 将 `deeply::nested::function` 路径绑定到 `other_function`。\nuse deeply::nested::function as other_function;\n\nfn function() {\n    println!("called `function()`");\n}\n\nmod deeply {\n    pub mod nested {\n        pub fn function() {\n            println!("called `deeply::nested::function()`")\n        }\n    }\n}\n\nfn main() {\n    // 更容易访问 `deeply::nested::funcion`\n    other_function();\n\n    println!("Entering block");\n    {\n        // 这和 `use deeply::nested::function as function` 等价。\n        // 此 `function()` 将掩蔽外部的同名函数。\n        use deeply::nested::function;\n        function();\n\n        // `use` 绑定拥有局部作用域。在这个例子中，`function()`\n        // 的掩蔽只存在在这个代码块中。\n        println!("Leaving block");\n    }\n\n    function();\n}\n')])])])])}),[],!1,null,null,null);e.default=o.exports}}]);