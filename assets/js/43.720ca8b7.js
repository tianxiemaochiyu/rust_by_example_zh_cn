(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{521:function(r,e,t){"use strict";t.r(e);var n=t(4),s=Object(n.a)({},(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h1",{attrs:{id:"的其他用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#的其他用法"}},[r._v("#")]),r._v(" "),t("code",[r._v("?")]),r._v(" 的其他用法")]),r._v(" "),t("p",[r._v("注意在上一个例子中，我们调用 "),t("code",[r._v("parse")]),r._v(" 后总是立即把错误从标准库错误 "),t("code",[r._v("map")]),r._v("\n到装箱的错误。")]),r._v(" "),t("div",{staticClass:"language-rust,ignore extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v(".and_then(|s| s.parse::<i32>()\n    .map_err(|e| e.into())\n")])])]),t("p",[r._v("因为这个操作很简单常见，如果有省略写法就好了。"),t("code",[r._v("and_then")]),r._v(" 不够灵活，所以不能实现\n这样的写法。不过，我们可以使用 "),t("code",[r._v("?")]),r._v(" 来代替它。")]),r._v(" "),t("p",[r._v("之前我们说 "),t("code",[r._v("?")]),r._v(" 就是 “要么 "),t("code",[r._v("unwrap")]),r._v(" 要么 "),t("code",[r._v("return Err(error)")]),r._v("”，这大部分是对的，但\n事实上 "),t("code",[r._v("?")]),r._v(" 是 “要么 "),t("code",[r._v("unwrap")]),r._v(" 要么 "),t("code",[r._v("return Err(From::from(err))")]),r._v("”。"),t("code",[r._v("From::from")]),r._v(" 是\n不同类型间的转换工具，也就是说，如果在错误能够转换成返回类型的地方使用 "),t("code",[r._v("?")]),r._v("，它就\n会自动转换成返回类型。")]),r._v(" "),t("p",[r._v("这里，我们使用 "),t("code",[r._v("?")]),r._v(" 重写之前的例子。这样，只要为我们的错误类型实现 "),t("code",[r._v("From::from")]),r._v("，就\n可以不再使用 "),t("code",[r._v("map_err")]),r._v("。")]),r._v(" "),t("div",{staticClass:"language-rust,editable extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v('use std::error;\nuse std::fmt;\n\n// 为 `Box<error::Error>` 取别名。\ntype Result<T> = std::result::Result<T, Box<error::Error>>;\n\n#[derive(Debug)]\nstruct EmptyVec;\n\nimpl fmt::Display for EmptyVec {\n    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {\n        write!(f, "invalid first item to double")\n    }\n}\n\nimpl error::Error for EmptyVec {\n    fn description(&self) -> &str {\n        "invalid first item to double"\n    }\n\n    fn cause(&self) -> Option<&error::Error> {\n        // 泛型错误，没有记录内部原因。\n        None\n    }\n}\n\n// 这里的结构和之前一样，但是这次没有把所有的 `Results` 和 `Options` 串起来，\n// 而是使用 `?` 立即得到内部值。\nfn double_first(vec: Vec<&str>) -> Result<i32> {\n    let first = vec.first().ok_or(EmptyVec)?;\n    let parsed = first.parse::<i32>()?;\n    Ok(2 * parsed)\n}\n\nfn print(result: Result<i32>) {\n    match result {\n        Ok(n)  => println!("The first doubled is {}", n),\n        Err(e) => println!("Error: {}", e),\n    }\n}\n\nfn main() {\n    let numbers = vec!["42", "93", "18"];\n    let empty = vec![];\n    let strings = vec!["tofu", "93", "18"];\n\n    print(double_first(numbers));\n    print(double_first(empty));\n    print(double_first(strings));\n}\n')])])]),t("p",[r._v("这段代码现在已经很清晰了。相比原始的 "),t("code",[r._v("panic")]),r._v("，它就像是把所有的 "),t("code",[r._v("unwrap")]),r._v(" 调用都换\n成 "),t("code",[r._v("?")]),r._v(" 一样。与 "),t("code",[r._v("panic")]),r._v(" 相比，这样做的区别在于返回类型是 "),t("code",[r._v("Result")]),r._v("，因而必须在顶层\n解构它们。")]),r._v(" "),t("h3",{attrs:{id:"参见："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参见："}},[r._v("#")]),r._v(" 参见：")]),r._v(" "),t("p",[t("a",{attrs:{href:"https://doc.rust-lang.org/std/convert/trait.From.html",target:"_blank",rel:"noopener noreferrer"}},[t("code",[r._v("From::from")]),t("OutboundLink")],1),r._v(" and "),t("a",{attrs:{href:"https://doc.rust-lang.org/reference/expressions/operator-expr.html#the--operator",target:"_blank",rel:"noopener noreferrer"}},[t("code",[r._v("?")]),t("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);