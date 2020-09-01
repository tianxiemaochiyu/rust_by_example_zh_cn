// .vuepress/config.js
module.exports = {
	theme: "reco",
	themeConfig: {
		repo: "https://github.com/tianxiemaochiyu/rust_by_example_zh_cn",
		locales: {
			// 键名是该语言所属的子路径
			// 作为特例，默认语言可以使用 '/' 作为其路径。
			"/": {
				lang: "zh-CN",
				selectText: "选择语言",
				label: "简体中文",
				docsDir: "docs",
				"collapsable": false,
				editLinkText: "帮助改善此页面！",
				sidebar: [
					{
						"title": " 简介",
						"path": "/",
						"collapsable": false,
						"children": [
							{
								"title": "1. Hello World",
								"path": "/hello.html",
								"children": [
									{
										"title": "1.1. 注释",
										"path": "/hello/comment.html"
									},
									{
										"title": "1.2. 格式化输出",
										"path": "/hello/print.html",
										"children": [
											{
												"title": "1.2.1. 调试（debug）",
												"path": "/hello/print/print_debug.html"
											},
											{
												"title": "1.2.2. 显示（display）",
												"path": "/hello/print/print_display.html",
												"children": [
													{
														"title": "1.2.2.1. 测试实例：List",
														"path": "/hello/print/print_display/testcase_list.html"
													}
												],
												"collapsable": false
											},
											{
												"title": "1.2.3. 格式化",
												"path": "/hello/print/fmt.html"
											}
										],
										"collapsable": false
									}
								],
								"collapsable": false
							},
							{
								"title": "2. 原生类型",
								"path": "/primitives.html",
								"children": [
									{
										"title": "2.1. 字面量和运算符",
										"path": "/primitives/literals.html"
									},
									{
										"title": "2.2. 元组",
										"path": "/primitives/tuples.html"
									},
									{
										"title": "2.3. 数组和切片",
										"path": "/primitives/array.html"
									}
								],
								"collapsable": false
							},
							{
								"title": "3. 自定义类型",
								"path": "/custom_types.html",
								"children": [
									{
										"title": "3.1. 结构体",
										"path": "/custom_types/structs.html"
									},
									{
										"title": "3.2. 枚举",
										"path": "/custom_types/enum.html",
										"children": [
											{
												"title": "3.2.1. 使用 use",
												"path": "/custom_types/enum/enum_use.html"
											},
											{
												"title": "3.2.2. C 风格用法",
												"path": "/custom_types/enum/c_like.html"
											},
											{
												"title": "3.2.3. 测试实例：链表",
												"path": "/custom_types/enum/testcase_linked_list.html"
											}
										],
										"collapsable": false
									},
									{
										"title": "3.3. 常量",
										"path": "/custom_types/constants.html"
									}
								],
								"collapsable": false
							},
							{
								"title": "4. 变量绑定",
								"path": "/variable_bindings.html",
								"children": [
									{
										"title": "4.1. 可变变量",
										"path": "/variable_bindings/mut.html"
									},
									{
										"title": "4.2. 作用域和遮蔽",
										"path": "/variable_bindings/scope.html"
									},
									{
										"title": "4.3. 变量先声明",
										"path": "/variable_bindings/declare.html"
									}
								],
								"collapsable": false
							},
							{
								"title": "5. 类型系统",
								"path": "/types.html",
								"children": [
									{
										"title": "5.1. 类型转换",
										"path": "/types/cast.html"
									},
									{
										"title": "5.2. 字面量",
										"path": "/types/literals.html"
									},
									{
										"title": "5.3. 类型推断",
										"path": "/types/inference.html"
									},
									{
										"title": "5.4. 别名",
										"path": "/types/alias.html"
									}
								],
								"collapsable": false
							},
							{
								"title": "6. 类型转换",
								"path": "/conversion.html",
								"children": [
									{
										"title": "6.1. From和Into",
										"path": "/conversion/from_into.html"
									},
									{
										"title": "6.2. TryFrom和TryInto",
										"path": "/conversion/try_from_try_into.html"
									},
									{
										"title": "6.3. ToString和FromStr",
										"path": "/conversion/string.html"
									}
								],
								"collapsable": false
							},
							{
								"title": "7. 表达式",
								"path": "/expression.html"
							},
							{
								"title": "8. 流程控制",
								"path": "/flow_control.html",
								"children": [
									{
										"title": "8.1. if/else",
										"path": "/flow_control/if_else.html"
									},
									{
										"title": "8.2. loop 循环",
										"path": "/flow_control/loop.html",
										"children": [
											{
												"title": "8.2.1. 嵌套循环和标签",
												"path": "/flow_control/loop/nested.html"
											},
											{
												"title": "8.2.2. 从 loop 循环返回",
												"path": "/flow_control/loop/return.html"
											}
										],
										"collapsable": false
									},
									{
										"title": "8.3. while 循环",
										"path": "/flow_control/while.html"
									},
									{
										"title": "8.4. for 循环和区间",
										"path": "/flow_control/for.html"
									},
									{
										"title": "8.5. match 匹配",
										"path": "/flow_control/match.html",
										"children": [
											{
												"title": "8.5.1. 解构",
												"path": "/flow_control/match/destructuring.html",
												"children": [
													{
														"title": "8.5.1.1. 元组",
														"path": "/flow_control/match/destructuring/destructure_tuple.html"
													},
													{
														"title": "8.5.1.2. 枚举",
														"path": "/flow_control/match/destructuring/destructure_enum.html"
													},
													{
														"title": "8.5.1.3. 指针和引用",
														"path": "/flow_control/match/destructuring/destructure_pointers.html"
													},
													{
														"title": "8.5.1.4. 结构体",
														"path": "/flow_control/match/destructuring/destructure_structures.html"
													}
												],
												"collapsable": false
											},
											{
												"title": "8.5.2. 卫语句",
												"path": "/flow_control/match/guard.html"
											},
											{
												"title": "8.5.3. 绑定",
												"path": "/flow_control/match/binding.html"
											}
										],
										"collapsable": false
									},
									{
										"title": "8.6. if let",
										"path": "/flow_control/if_let.html"
									},
									{
										"title": "8.7. while let",
										"path": "/flow_control/while_let.html"
									}
								],
								"collapsable": false
							},
							{
								"title": "9. 函数",
								"path": "/fn.html",
								"children": [
									{
										"title": "9.1. 方法",
										"path": "/fn/methods.html"
									},
									{
										"title": "9.2. 闭包",
										"path": "/fn/closures.html",
										"children": [
											{
												"title": "9.2.1. 捕获",
												"path": "/fn/closures/capture.html"
											},
											{
												"title": "9.2.2. 作为输入参数",
												"path": "/fn/closures/input_parameters.html"
											},
											{
												"title": "9.2.3. 类型匿名",
												"path": "/fn/closures/anonymity.html"
											},
											{
												"title": "9.2.4. 输入函数",
												"path": "/fn/closures/input_functions.html"
											},
											{
												"title": "9.2.5. 作为输出参数",
												"path": "/fn/closures/output_parameters.html"
											},
											{
												"title": "9.2.6. std中的例子",
												"path": "/fn/closures/closure_examples.html",
												"children": [
													{
														"title": "9.2.6.1. Iterator::any",
														"path": "/fn/closures/closure_examples/iter_any.html"
													},
													{
														"title": "9.2.6.2. Iterator::find",
														"path": "/fn/closures/closure_examples/iter_find.html"
													}
												],
												"collapsable": false
											}
										],
										"collapsable": false
									},
									{
										"title": "9.3. 高阶函数",
										"path": "/fn/hof.html"
									},
									{
										"title": "9.4. 发散函数",
										"path": "/fn/diverging.html"
									}
								],
								"collapsable": false
							},
							{
								"title": "10. 模块",
								"path": "/mod.html",
								"children": [
									{
										"title": "10.1. 可见性",
										"path": "/mod/visibility.html"
									},
									{
										"title": "10.2. 结构体的可见性",
										"path": "/mod/struct_visibility.html"
									},
									{
										"title": "10.3. use声明",
										"path": "/mod/use.html"
									},
									{
										"title": "10.4. super和self",
										"path": "/mod/super.html"
									},
									{
										"title": "10.5. 文件分层",
										"path": "/mod/split.html"
									}
								],
								"collapsable": false
							},
							{
								"title": "11. crate",
								"path": "/crates.html",
								"children": [
									{
										"title": "11.1. 库",
										"path": "/crates/lib.html"
									},
									{
										"title": "11.2. extern crate",
										"path": "/crates/link.html"
									}
								],
								"collapsable": false
							},
							{
								"title": "12. cargo",
								"path": "/cargo.html",
								"children": [
									{
										"title": "12.1. 依赖",
										"path": "/cargo/deps.html"
									},
									{
										"title": "12.2. 约定规范",
										"path": "/cargo/conventions.html"
									},
									{
										"title": "12.3. 测试",
										"path": "/cargo/test.html"
									},
									{
										"title": "12.4. 构建脚本",
										"path": "/cargo/build_scripts.html"
									}
								],
								"collapsable": false
							},
							{
								"title": "13. 属性",
								"path": "/attribute.html",
								"children": [
									{
										"title": "13.1. 死代码dead_code",
										"path": "/attribute/unused.html"
									},
									{
										"title": "13.2. crate",
										"path": "/attribute/crate.html"
									},
									{
										"title": "13.3. cfg",
										"path": "/attribute/cfg.html",
										"children": [
											{
												"title": "13.3.1. 自定义条件",
												"path": "/attribute/cfg/custom.html"
											}
										],
										"collapsable": false
									}
								],
								"collapsable": false
							},
							{
								"title": "14. 泛型",
								"path": "/generics.html",
								"children": [
									{
										"title": "14.1. 函数",
										"path": "/generics/gen_fn.html"
									},
									{
										"title": "14.2. 实现",
										"path": "/generics/impl.html"
									},
									{
										"title": "14.3. trait",
										"path": "/generics/gen_trait.html"
									},
									{
										"title": "14.4. 约束",
										"path": "/generics/bounds.html",
										"children": [
											{
												"title": "14.4.1. 测试实例：空约束",
												"path": "/generics/bounds/testcase_empty.html"
											}
										],
										"collapsable": false
									},
									{
										"title": "14.5. 多重约束",
										"path": "/generics/multi_bounds.html"
									},
									{
										"title": "14.6. where 子句",
										"path": "/generics/where.html"
									},
									{
										"title": "14.7. newtype惯用法",
										"path": "/generics/new_types.html"
									},
									{
										"title": "14.8. 关联项",
										"path": "/generics/assoc_items.html",
										"children": [
											{
												"title": "14.8.1. 存在问题",
												"path": "/generics/assoc_items/the_problem.html"
											},
											{
												"title": "14.8.2. 关联类型",
												"path": "/generics/assoc_items/types.html"
											}
										],
										"collapsable": false
									},
									{
										"title": "14.9. 虚类型参数",
										"path": "/generics/phantom.html",
										"children": [
											{
												"title": "14.9.1. 测试实例：单位检查",
												"path": "/generics/phantom/testcase_units.html"
											}
										],
										"collapsable": false
									}
								],
								"collapsable": false
							},
							{
								"title": "15. 作用域规则",
								"path": "/scope.html",
								"children": [
									{
										"title": "15.1. RAII",
										"path": "/scope/raii.html"
									},
									{
										"title": "15.2. 所有权和移动",
										"path": "/scope/move.html",
										"children": [
											{
												"title": "15.2.1. 可变性",
												"path": "/scope/move/mut.html"
											}
										],
										"collapsable": false
									},
									{
										"title": "15.3. 借用",
										"path": "/scope/borrow.html",
										"children": [
											{
												"title": "15.3.1. 可变性",
												"path": "/scope/borrow/mut.html"
											},
											{
												"title": "15.3.2. 冻结",
												"path": "/scope/borrow/freeze.html"
											},
											{
												"title": "15.3.3. 别名使用",
												"path": "/scope/borrow/alias.html"
											},
											{
												"title": "15.3.4. ref 模式",
												"path": "/scope/borrow/ref.html"
											}
										],
										"collapsable": false
									},
									{
										"title": "15.4. 生命周期",
										"path": "/scope/lifetime.html",
										"children": [
											{
												"title": "15.4.1. 显式标注",
												"path": "/scope/lifetime/explicit.html"
											},
											{
												"title": "15.4.2. 函数",
												"path": "/scope/lifetime/fn.html"
											},
											{
												"title": "15.4.3. 方法",
												"path": "/scope/lifetime/methods.html"
											},
											{
												"title": "15.4.4. 结构体",
												"path": "/scope/lifetime/struct.html"
											},
											{
												"title": "15.4.5. trait",
												"path": "/scope/lifetime/trait.html"
											},
											{
												"title": "15.4.6. 约束",
												"path": "/scope/lifetime/lifetime_bounds.html"
											},
											{
												"title": "15.4.7. 强制转换",
												"path": "/scope/lifetime/lifetime_coercion.html"
											},
											{
												"title": "15.4.8. static",
												"path": "/scope/lifetime/static_lifetime.html"
											},
											{
												"title": "15.4.9. 省略",
												"path": "/scope/lifetime/elision.html"
											}
										],
										"collapsable": false
									}
								],
								"collapsable": false
							},
							{
								"title": "16. 特性 trait",
								"path": "/trait.html",
								"children": [
									{
										"title": "16.1. 派生",
										"path": "/trait/derive.html"
									},
									{
										"title": "16.2. 运算符重载",
										"path": "/trait/ops.html"
									},
									{
										"title": "16.3. Drop",
										"path": "/trait/drop.html"
									},
									{
										"title": "16.4. Iterators",
										"path": "/trait/iter.html"
									},
									{
										"title": "16.5. Clone",
										"path": "/trait/clone.html"
									}
								],
								"collapsable": false
							},
							{
								"title": "17. 使用macro_rules!来创建宏",
								"path": "/macros.html",
								"children": [
									{
										"title": "17.1. 语法",
										"path": "/macros/syntax.html",
										"children": [
											{
												"title": "17.1.1. 指示符",
												"path": "/macros/designators.html"
											},
											{
												"title": "17.1.2. 重载",
												"path": "/macros/overload.html"
											},
											{
												"title": "17.1.3. 重复",
												"path": "/macros/repeat.html"
											}
										],
										"collapsable": false
									},
									{
										"title": "17.2. DRY (不写重复代码)",
										"path": "/macros/dry.html"
									},
									{
										"title": "17.3. DSL (领域专用语言)",
										"path": "/macros/dsl.html"
									},
									{
										"title": "17.4. 可变参数接口",
										"path": "/macros/variadics.html"
									}
								],
								"collapsable": false
							},
							{
								"title": "18. 错误处理",
								"path": "/error.html",
								"children": [
									{
										"title": "18.1. panic",
										"path": "/error/panic.html"
									},
									{
										"title": "18.2. Option和unwrap",
										"path": "/error/option_unwrap.html",
										"children": [
											{
												"title": "18.2.1. 组合算子：map",
												"path": "/error/option_unwrap/map.html"
											},
											{
												"title": "18.2.2. 组合算子：and_then",
												"path": "/error/option_unwrap/and_then.html"
											}
										],
										"collapsable": false
									},
									{
										"title": "18.3. 结果Result",
										"path": "/error/result.html",
										"children": [
											{
												"title": "18.3.1. Result的map",
												"path": "/error/result/result_map.html"
											},
											{
												"title": "18.3.2. 给Result取别名",
												"path": "/error/result/result_alias.html"
											},
											{
												"title": "18.3.3. 提前返回",
												"path": "/error/result/early_returns.html"
											},
											{
												"title": "18.3.4. 引入?",
												"path": "/error/result/enter_question_mark.html"
											}
										],
										"collapsable": false
									},
									{
										"title": "18.4. 处理多种错误类型",
										"path": "/error/multiple_error_types.html",
										"children": [
											{
												"title": "18.4.1. 从Option中取出Result",
												"path": "/error/multiple_error_types/option_result.html"
											},
											{
												"title": "18.4.2. 定义一种错误类型",
												"path": "/error/multiple_error_types/define_error_type.html"
											},
											{
												"title": "18.4.3. 把错误 “装箱”",
												"path": "/error/multiple_error_types/boxing_errors.html"
											},
											{
												"title": "18.4.4. ?的其他用法",
												"path": "/error/multiple_error_types/reenter_question_mark.html"
											},
											{
												"title": "18.4.5. 包裹错误",
												"path": "/error/multiple_error_types/wrap_error.html"
											}
										],
										"collapsable": false
									},
									{
										"title": "18.5. 遍历Result",
										"path": "/error/iter_result.html"
									}
								],
								"collapsable": false
							},
							{
								"title": "19. 标准库类型",
								"path": "/std.html",
								"children": [
									{
										"title": "19.1. 箱子、栈和堆",
										"path": "/std/box.html"
									},
									{
										"title": "19.2. 动态数组 vector",
										"path": "/std/vec.html"
									},
									{
										"title": "19.3. 字符串 String",
										"path": "/std/str.html"
									},
									{
										"title": "19.4. 选项Option",
										"path": "/std/option.html"
									},
									{
										"title": "19.5. 结果Result",
										"path": "/std/result.html",
										"children": [
											{
												"title": "19.5.1. ?用法",
												"path": "/std/result/question_mark.html"
											}
										],
										"collapsable": false
									},
									{
										"title": "19.6. panic!",
										"path": "/std/panic.html"
									},
									{
										"title": "19.7. 散列表 HashMap",
										"path": "/std/hash.html",
										"children": [
											{
												"title": "19.7.1. 更改或自定义关键字类型",
												"path": "/std/hash/alt_key_types.html"
											},
											{
												"title": "19.7.2. 散列集 HashSet",
												"path": "/std/hash/hashset.html"
											}
										],
										"collapsable": false
									}
								],
								"collapsable": false
							},
							{
								"title": "20. 标准库更多介绍",
								"path": "/std_misc.html",
								"children": [
									{
										"title": "20.1. 线程",
										"path": "/std_misc/threads.html",
										"children": [
											{
												"title": "20.1.1. 测试实例：map-reduce",
												"path": "/std_misc/threads/testcase_mapreduce.html"
											}
										],
										"collapsable": false
									},
									{
										"title": "20.2. 通道",
										"path": "/std_misc/channels.html"
									},
									{
										"title": "20.3. 路径",
										"path": "/std_misc/path.html"
									},
									{
										"title": "20.4. 文件输入输出（I/O）",
										"path": "/std_misc/file.html",
										"children": [
											{
												"title": "20.4.1. 打开文件open",
												"path": "/std_misc/file/open.html"
											},
											{
												"title": "20.4.2. 创建文件create",
												"path": "/std_misc/file/create.html"
											},
											{
												"title": "20.4.3. 读取行read lines",
												"path": "/std_misc/file/read_lines.html"
											}
										],
										"collapsable": false
									},
									{
										"title": "20.5. 子进程",
										"path": "/std_misc/process.html",
										"children": [
											{
												"title": "20.5.1. 管道",
												"path": "/std_misc/process/pipe.html"
											},
											{
												"title": "20.5.2. 等待",
												"path": "/std_misc/process/wait.html"
											}
										],
										"collapsable": false
									},
									{
										"title": "20.6. 文件系统操作",
										"path": "/std_misc/fs.html"
									},
									{
										"title": "20.7. 程序参数",
										"path": "/std_misc/arg.html",
										"children": [
											{
												"title": "20.7.1. 参数解析",
												"path": "/std_misc/arg/matching.html"
											}
										],
										"collapsable": false
									},
									{
										"title": "20.8. 外部语言函数接口",
										"path": "/std_misc/ffi.html"
									}
								],
								"collapsable": false
							},
							{
								"title": "21. 测试",
								"path": "/testing.html",
								"children": [
									{
										"title": "21.1. 单元测试",
										"path": "/testing/unit_testing.html"
									},
									{
										"title": "21.2. 文档测试",
										"path": "/testing/doc_testing.html"
									},
									{
										"title": "21.3. 集成测试",
										"path": "/testing/integration_testing.html"
									},
									{
										"title": "21.4. 开发依赖",
										"path": "/testing/dev_dependencies.html"
									}
								],
								"collapsable": false
							},
							{
								"title": "22. 不安全操作",
								"path": "/unsafe.html"
							},
							{
								"title": "23. 兼容性",
								"path": "/compatibility.html",
								"children": [
									{
										"title": "23.1. 原始标志符",
										"path": "/compatibility/raw_identifiers.html"
									}
								],
								"collapsable": false
							},
							{
								"title": "24. 补充",
								"path": "/meta.html",
								"children": [
									{
										"title": "24.1. 文档",
										"path": "/meta/doc.html"
									}
								],
								"collapsable": false
							}
						]
					}
				],
			},
		},
		smoothScroll: true,
		codeTheme: "tomorrow",
		docsDir: "docs",
		editLinks: true,
		head: [["meta", { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no" }]],
	},
};
