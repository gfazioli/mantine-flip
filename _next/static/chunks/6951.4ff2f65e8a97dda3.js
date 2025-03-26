"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5194,5921,6326,6951],{5194:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var a=[Object.freeze({displayName:"Sass",fileTypes:["sass"],foldingStartMarker:"/\\*|^#|^\\*|^\\b|*#?region|^\\.",foldingStopMarker:"\\*/|*#?endregion|^\\s*$",name:"sass",patterns:[{begin:"^(\\s*)(/\\*)",end:"(\\*/)|^(?!\\s\\1)",name:"comment.block.sass",patterns:[{include:"#comment-tag"},{include:"#comment-param"}]},{match:"^[\\t ]*/?//[\\t ]*[SRI][\\t ]*$",name:"keyword.other.sass.formatter.action"},{begin:"^[\\t ]*//[\\t ]*(import)[\\t ]*(css-variables)[\\t ]*(from)",captures:{1:{name:"keyword.control"},2:{name:"variable"},3:{name:"keyword.control"}},end:"$\\n?",name:"comment.import.css.variables",patterns:[{include:"#import-quotes"}]},{include:"#double-slash"},{include:"#double-quoted"},{include:"#single-quoted"},{include:"#interpolation"},{include:"#curly-brackets"},{include:"#placeholder-selector"},{begin:"\\$[a-zA-Z0-9_-]+(?=:)",captures:{0:{name:"variable.other.name"}},end:"$\\n?|(?=\\)\\s\\)|\\)\\n)",name:"sass.script.maps",patterns:[{include:"#double-slash"},{include:"#double-quoted"},{include:"#single-quoted"},{include:"#interpolation"},{include:"#variable"},{include:"#rgb-value"},{include:"#numeric"},{include:"#unit"},{include:"#flag"},{include:"#comma"},{include:"#function"},{include:"#function-content"},{include:"#operator"},{include:"#reserved-words"},{include:"#parent-selector"},{include:"#property-value"},{include:"#semicolon"},{include:"#dotdotdot"}]},{include:"#variable-root"},{include:"#numeric"},{include:"#unit"},{include:"#flag"},{include:"#comma"},{include:"#semicolon"},{include:"#dotdotdot"},{begin:"@include|\\+(?!\\W|\\d)",captures:{0:{name:"keyword.control.at-rule.css.sass"}},end:"(?=\\n|\\()",name:"support.function.name.sass.library"},{begin:"^(@use)",captures:{0:{name:"keyword.control.at-rule.css.sass.use"}},end:"(?=\\n)",name:"sass.use",patterns:[{match:"as|with",name:"support.type.css.sass"},{include:"#numeric"},{include:"#unit"},{include:"#variable-root"},{include:"#rgb-value"},{include:"#comma"},{include:"#parenthesis-open"},{include:"#parenthesis-close"},{include:"#colon"},{include:"#import-quotes"}]},{begin:"^@import(.*?)( as.*)?$",captures:{1:{name:"constant.character.css.sass"},2:{name:"invalid"}},end:"(?=\\n)",name:"keyword.control.at-rule.use"},{begin:"@mixin|^[\\t ]*=|@function",captures:{0:{name:"keyword.control.at-rule.css.sass"}},end:"$\\n?|(?=\\()",name:"support.function.name.sass",patterns:[{match:"[\\w-]+",name:"entity.name.function"}]},{begin:"@",end:"$\\n?|\\s(?!(all|braille|embossed|handheld|print|projection|screen|speech|tty|tv|if|only|not)(\\s|,))",name:"keyword.control.at-rule.css.sass"},{begin:"(?<!\\-|\\()\\b(a|abbr|acronym|address|applet|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|datalist|dd|del|details|dfn|dialog|div|dl|dt|em|embed|eventsource|fieldset|figure|figcaption|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|label|legend|li|link|map|mark|menu|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|picture|pre|progress|q|samp|script|section|select|small|source|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video|main|svg|rect|ruby|center|circle|ellipse|line|polyline|polygon|path|text|u|slot)\\b(?!-|\\)|:\\s)|&",end:"$\\n?|(?=\\s|,|\\(|\\)|\\.|\\#|\\[|>|-|_)",name:"entity.name.tag.css.sass.symbol",patterns:[{include:"#interpolation"},{include:"#pseudo-class"}]},{begin:"#",end:"$\\n?|(?=\\s|,|\\(|\\)|\\.|\\[|>)",name:"entity.other.attribute-name.id.css.sass",patterns:[{include:"#interpolation"},{include:"#pseudo-class"}]},{begin:"\\.|(?<=&)(-|_)",end:"$\\n?|(?=\\s|,|\\(|\\)|\\[|>)",name:"entity.other.attribute-name.class.css.sass",patterns:[{include:"#interpolation"},{include:"#pseudo-class"}]},{begin:"\\[",end:"\\]",name:"entity.other.attribute-selector.sass",patterns:[{include:"#double-quoted"},{include:"#single-quoted"},{match:"\\^|\\$|\\*|~",name:"keyword.other.regex.sass"}]},{match:"^((?<=\\]|\\)|not\\(|\\*|>|>\\s)|\n*):[a-z:-]+|(::|:-)[a-z:-]+",name:"entity.other.attribute-name.pseudo-class.css.sass"},{include:"#module"},{match:"[\\w-]*\\(",name:"entity.name.function"},{match:"\\)",name:"entity.name.function.close"},{begin:":",end:"$\\n?|(?=\\s\\(|and\\(|\\),)",name:"meta.property-list.css.sass.prop",patterns:[{match:"(?<=:)[a-z-]+\\s",name:"support.type.property-name.css.sass.prop.name"},{include:"#double-slash"},{include:"#double-quoted"},{include:"#single-quoted"},{include:"#interpolation"},{include:"#curly-brackets"},{include:"#variable"},{include:"#rgb-value"},{include:"#numeric"},{include:"#unit"},{include:"#module"},{match:"--.+?(?=\\))",name:"variable.css"},{match:"[\\w-]*\\(",name:"entity.name.function"},{match:"\\)",name:"entity.name.function.close"},{include:"#flag"},{include:"#comma"},{include:"#semicolon"},{include:"#function"},{include:"#function-content"},{include:"#operator"},{include:"#parent-selector"},{include:"#property-value"}]},{include:"#rgb-value"},{include:"#function"},{include:"#function-content"},{begin:"(?<=})(?!\\n|\\(|\\)|[a-zA-Z0-9_-]+:)",end:"\\s|(?=,|\\.|\\[|\\)|\\n)",name:"entity.name.tag.css.sass",patterns:[{include:"#interpolation"},{include:"#pseudo-class"}]},{include:"#operator"},{match:"[a-z-]+((?=:|#{))",name:"support.type.property-name.css.sass.prop.name"},{include:"#reserved-words"},{include:"#property-value"}],repository:{colon:{match:":",name:"meta.property-list.css.sass.colon"},comma:{match:"\\band\\b|\\bor\\b|,",name:"comment.punctuation.comma.sass"},"comment-param":{match:"\\@(\\w+)",name:"storage.type.class.jsdoc"},"comment-tag":{begin:"(?<={{)",end:"(?=}})",name:"comment.tag.sass"},"curly-brackets":{match:"{|}",name:"invalid"},dotdotdot:{match:"\\.\\.\\.",name:"variable.other"},"double-quoted":{begin:'"',end:'"',name:"string.quoted.double.css.sass",patterns:[{include:"#quoted-interpolation"}]},"double-slash":{begin:"//",end:"$\\n?",name:"comment.line.sass",patterns:[{include:"#comment-tag"}]},flag:{match:"!(important|default|optional|global)",name:"keyword.other.important.css.sass"},function:{match:"(?<=[\\s|\\(|,|:])(?!url|format|attr)[a-zA-Z0-9_-][\\w-]*(?=\\()",name:"support.function.name.sass"},"function-content":{begin:"(?<=url\\(|format\\(|attr\\()",end:".(?=\\))",name:"string.quoted.double.css.sass"},"import-quotes":{match:"[\"']?\\.{0,2}[\\w/]+[\"']?",name:"constant.character.css.sass"},interpolation:{begin:"#{",end:"}",name:"support.function.interpolation.sass",patterns:[{include:"#variable"},{include:"#numeric"},{include:"#operator"},{include:"#unit"},{include:"#comma"},{include:"#double-quoted"},{include:"#single-quoted"}]},module:{captures:{1:{name:"constant.character.module.name"},2:{name:"constant.numeric.module.dot"}},match:"([\\w-]+?)(\\.)",name:"constant.character.module"},numeric:{match:"(-|\\.)?[0-9]+(\\.[0-9]+)?",name:"constant.numeric.css.sass"},operator:{match:"\\+|\\s-\\s|\\s-(?=\\$)|(?<=\\()-(?=\\$)|\\s-(?=\\()|\\*|/|%|=|!|<|>|~",name:"keyword.operator.sass"},"parent-selector":{match:"&",name:"entity.name.tag.css.sass"},"parenthesis-close":{match:"\\)",name:"entity.name.function.parenthesis.close"},"parenthesis-open":{match:"\\(",name:"entity.name.function.parenthesis.open"},"placeholder-selector":{begin:"(?<!\\d)%(?!\\d)",end:"$\\n?|\\s",name:"entity.other.inherited-class.placeholder-selector.css.sass"},"property-value":{match:"[a-zA-Z0-9_-]+",name:"meta.property-value.css.sass support.constant.property-value.css.sass"},"pseudo-class":{match:":[a-z:-]+",name:"entity.other.attribute-name.pseudo-class.css.sass"},"quoted-interpolation":{begin:"#{",end:"}",name:"support.function.interpolation.sass",patterns:[{include:"#variable"},{include:"#numeric"},{include:"#operator"},{include:"#unit"},{include:"#comma"}]},"reserved-words":{match:"\\b(false|from|in|not|null|through|to|true)\\b",name:"support.type.property-name.css.sass"},"rgb-value":{match:"(#)([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\\b",name:"constant.language.color.rgb-value.css.sass"},semicolon:{match:";",name:"invalid"},"single-quoted":{begin:"'",end:"'",name:"string.quoted.single.css.sass",patterns:[{include:"#quoted-interpolation"}]},unit:{match:"(?<=[\\d]|})(ch|cm|deg|dpcm|dpi|dppx|em|ex|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vmax|vmin|vw|fr|%)",name:"keyword.control.unit.css.sass"},variable:{match:"\\$[a-zA-Z0-9_-]+",name:"variable.other.value"},"variable-root":{match:"\\$[a-zA-Z0-9_-]+",name:"variable.other.root"}},scopeName:"source.sass"})]},5921:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var a=[Object.freeze({displayName:"PostCSS",fileTypes:["pcss","postcss"],foldingStartMarker:"/\\*|^#|^\\*|^\\b|^\\.",foldingStopMarker:"\\*/|^\\s*$",name:"postcss",patterns:[{begin:"/\\*",end:"\\*/",name:"comment.block.postcss",patterns:[{include:"#comment-tag"}]},{include:"#double-slash"},{include:"#double-quoted"},{include:"#single-quoted"},{include:"#interpolation"},{include:"#placeholder-selector"},{include:"#variable"},{include:"#variable-root-css"},{include:"#numeric"},{include:"#unit"},{include:"#flag"},{include:"#dotdotdot"},{begin:"@include",captures:{0:{name:"keyword.control.at-rule.css.postcss"}},end:"(?=\\n|\\(|{|;)",name:"support.function.name.postcss.library"},{begin:"@mixin|@function",captures:{0:{name:"keyword.control.at-rule.css.postcss"}},end:"$\\n?|(?=\\(|{)",name:"support.function.name.postcss.no-completions",patterns:[{match:"[\\w-]+",name:"entity.name.function"}]},{match:"(?<=@import)\\s[\\w/.*-]+",name:"string.quoted.double.css.postcss"},{begin:"@",end:"$\\n?|\\s(?!(all|braille|embossed|handheld|print|projection|screen|speech|tty|tv|if|only|not)(\\s|,))|(?=;)",name:"keyword.control.at-rule.css.postcss"},{begin:"#",end:"$\\n?|(?=\\s|,|;|\\(|\\)|\\.|\\[|{|>)",name:"entity.other.attribute-name.id.css.postcss",patterns:[{include:"#interpolation"},{include:"#pseudo-class"}]},{begin:"\\.|(?<=&)(-|_)",end:"$\\n?|(?=\\s|,|;|\\(|\\)|\\[|{|>)",name:"entity.other.attribute-name.class.css.postcss",patterns:[{include:"#interpolation"},{include:"#pseudo-class"}]},{begin:"\\[",end:"\\]",name:"entity.other.attribute-selector.postcss",patterns:[{include:"#double-quoted"},{include:"#single-quoted"},{match:"\\^|\\$|\\*|~",name:"keyword.other.regex.postcss"}]},{match:"(?<=\\]|\\)|not\\(|\\*|>|>\\s):[a-z:-]+|(::|:-)[a-z:-]+",name:"entity.other.attribute-name.pseudo-class.css.postcss"},{begin:":",end:"$\\n?|(?=;|\\s\\(|and\\(|{|}|\\),)",name:"meta.property-list.css.postcss",patterns:[{include:"#double-slash"},{include:"#double-quoted"},{include:"#single-quoted"},{include:"#interpolation"},{include:"#variable"},{include:"#rgb-value"},{include:"#numeric"},{include:"#unit"},{include:"#flag"},{include:"#function"},{include:"#function-content"},{include:"#function-content-var"},{include:"#operator"},{include:"#parent-selector"},{include:"#property-value"}]},{include:"#rgb-value"},{include:"#function"},{include:"#function-content"},{begin:"(?<!\\-|\\()\\b(a|abbr|acronym|address|applet|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|datalist|dd|del|details|dfn|dialog|div|dl|dt|em|embed|eventsource|fieldset|figure|figcaption|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|label|legend|li|link|map|mark|menu|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|picture|pre|progress|q|samp|script|section|select|small|source|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video|main|svg|rect|ruby|center|circle|ellipse|line|polyline|polygon|path|text|u|x)\\b(?!-|\\)|:\\s)|&",end:"(?=\\s|,|;|\\(|\\)|\\.|\\[|{|>|-|_)",name:"entity.name.tag.css.postcss.symbol",patterns:[{include:"#interpolation"},{include:"#pseudo-class"}]},{include:"#operator"},{match:"[a-z-]+((?=:|#{))",name:"support.type.property-name.css.postcss"},{include:"#reserved-words"},{include:"#property-value"}],repository:{"comment-tag":{begin:"{{",end:"}}",name:"comment.tags.postcss",patterns:[{match:"[\\w-]+",name:"comment.tag.postcss"}]},dotdotdot:{match:"\\.{3}",name:"variable.other"},"double-quoted":{begin:'"',end:'"',name:"string.quoted.double.css.postcss",patterns:[{include:"#quoted-interpolation"}]},"double-slash":{begin:"//",end:"$",name:"comment.line.postcss",patterns:[{include:"#comment-tag"}]},flag:{match:"!(important|default|optional|global)",name:"keyword.other.important.css.postcss"},function:{match:"(?<=[\\s|\\(|,|:])(?!url|format|attr)[\\w-][\\w-]*(?=\\()",name:"support.function.name.postcss"},"function-content":{match:"(?<=url\\(|format\\(|attr\\().+?(?=\\))",name:"string.quoted.double.css.postcss"},"function-content-var":{match:"(?<=var\\()[\\w-]+(?=\\))",name:"variable.parameter.postcss"},interpolation:{begin:"#{",end:"}",name:"support.function.interpolation.postcss",patterns:[{include:"#variable"},{include:"#numeric"},{include:"#operator"},{include:"#unit"},{include:"#double-quoted"},{include:"#single-quoted"}]},numeric:{match:"(-|\\.)?[0-9]+(\\.[0-9]+)?",name:"constant.numeric.css.postcss"},operator:{match:"\\+|\\s-\\s|\\s-(?=\\$)|(?<=\\()-(?=\\$)|\\s-(?=\\()|\\*|/|%|=|!|<|>|~",name:"keyword.operator.postcss"},"parent-selector":{match:"&",name:"entity.name.tag.css.postcss"},"placeholder-selector":{begin:"(?<!\\d)%(?!\\d)",end:"$\\n?|\\s|(?=;|{)",name:"entity.other.attribute-name.placeholder-selector.postcss"},"property-value":{match:"[\\w-]+",name:"meta.property-value.css.postcss, support.constant.property-value.css.postcss"},"pseudo-class":{match:":[a-z:-]+",name:"entity.other.attribute-name.pseudo-class.css.postcss"},"quoted-interpolation":{begin:"#{",end:"}",name:"support.function.interpolation.postcss",patterns:[{include:"#variable"},{include:"#numeric"},{include:"#operator"},{include:"#unit"}]},"reserved-words":{match:"\\b(false|from|in|not|null|through|to|true)\\b",name:"support.type.property-name.css.postcss"},"rgb-value":{match:"(#)([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\\b",name:"constant.other.color.rgb-value.css.postcss"},"single-quoted":{begin:"'",end:"'",name:"string.quoted.single.css.postcss",patterns:[{include:"#quoted-interpolation"}]},unit:{match:"(?<=[\\d]|})(ch|cm|deg|dpcm|dpi|dppx|em|ex|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vmax|vmin|vw|%)",name:"keyword.other.unit.css.postcss"},variable:{match:"\\$[\\w-]+",name:"variable.parameter.postcss"},"variable-root-css":{match:"(?<!&)--[\\w-]+",name:"variable.parameter.postcss"}},scopeName:"source.css.postcss"})]},6326:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var a=[Object.freeze({displayName:"JSON",name:"json",patterns:[{include:"#value"}],repository:{array:{begin:"\\[",beginCaptures:{0:{name:"punctuation.definition.array.begin.json"}},end:"\\]",endCaptures:{0:{name:"punctuation.definition.array.end.json"}},name:"meta.structure.array.json",patterns:[{include:"#value"},{match:",",name:"punctuation.separator.array.json"},{match:"[^\\s\\]]",name:"invalid.illegal.expected-array-separator.json"}]},comments:{patterns:[{begin:"/\\*\\*(?!/)",captures:{0:{name:"punctuation.definition.comment.json"}},end:"\\*/",name:"comment.block.documentation.json"},{begin:"/\\*",captures:{0:{name:"punctuation.definition.comment.json"}},end:"\\*/",name:"comment.block.json"},{captures:{1:{name:"punctuation.definition.comment.json"}},match:"(//).*$\\n?",name:"comment.line.double-slash.js"}]},constant:{match:"\\b(?:true|false|null)\\b",name:"constant.language.json"},number:{match:"(?x)\n-?\n(?:\n0\n|\n[1-9]\n\\d*\n)\n(?:\n(?:\n\\.\n\\d+\n)?\n(?:\n[eE]\n[+-]?\n\\d+\n)?\n)?",name:"constant.numeric.json"},object:{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.dictionary.begin.json"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.dictionary.end.json"}},name:"meta.structure.dictionary.json",patterns:[{comment:"the JSON object key",include:"#objectkey"},{include:"#comments"},{begin:":",beginCaptures:{0:{name:"punctuation.separator.dictionary.key-value.json"}},end:"(,)|(?=\\})",endCaptures:{1:{name:"punctuation.separator.dictionary.pair.json"}},name:"meta.structure.dictionary.value.json",patterns:[{comment:"the JSON object value",include:"#value"},{match:"[^\\s,]",name:"invalid.illegal.expected-dictionary-separator.json"}]},{match:"[^\\s\\}]",name:"invalid.illegal.expected-dictionary-separator.json"}]},objectkey:{begin:'"',beginCaptures:{0:{name:"punctuation.support.type.property-name.begin.json"}},end:'"',endCaptures:{0:{name:"punctuation.support.type.property-name.end.json"}},name:"string.json support.type.property-name.json",patterns:[{include:"#stringcontent"}]},string:{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.json"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.json"}},name:"string.quoted.double.json",patterns:[{include:"#stringcontent"}]},stringcontent:{patterns:[{match:'(?x)\n\\\\\n(?:\n["\\\\/bfnrt]\n|\nu\n[0-9a-fA-F]{4})',name:"constant.character.escape.json"},{match:"\\\\.",name:"invalid.illegal.unrecognized-string-escape.json"}]},value:{patterns:[{include:"#constant"},{include:"#number"},{include:"#string"},{include:"#array"},{include:"#object"},{include:"#comments"}]}},scopeName:"source.json"})]},6951:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var a=n(6326),s=n(5929),o=n(9529),r=n(2458),i=n(5194),c=n(1083),u=n(4560),d=n(2875),l=n(5921),m=n(9672);let p=Object.freeze({displayName:"Astro",fileTypes:["astro"],injections:{"L:(meta.script.astro) (meta.lang.js | meta.lang.javascript | meta.lang.partytown | meta.lang.node) - (meta source)":{patterns:[{begin:"(?<=>)(?!</)",contentName:"source.js",end:"(?=</)",name:"meta.embedded.block.astro",patterns:[{include:"source.js"}]}]},"L:(meta.script.astro) (meta.lang.json) - (meta source)":{patterns:[{begin:"(?<=>)(?!</)",contentName:"source.json",end:"(?=</)",name:"meta.embedded.block.astro",patterns:[{include:"source.json"}]}]},"L:(meta.script.astro) (meta.lang.ts | meta.lang.typescript) - (meta source)":{patterns:[{begin:"(?<=>)(?!</)",contentName:"source.ts",end:"(?=</)",name:"meta.embedded.block.astro",patterns:[{include:"source.ts"}]}]},"L:meta.script.astro - meta.lang - (meta source)":{patterns:[{begin:"(?<=>)(?!</)",contentName:"source.js",end:"(?=</)",name:"meta.embedded.block.astro",patterns:[{include:"source.js"}]}]},"L:meta.style.astro - meta.lang - (meta source)":{patterns:[{begin:"(?<=>)(?!</)",contentName:"source.css",end:"(?=</)",name:"meta.embedded.block.astro",patterns:[{include:"source.css"}]}]},"L:meta.style.astro meta.lang.css - (meta source)":{patterns:[{begin:"(?<=>)(?!</)",contentName:"source.css",end:"(?=</)",name:"meta.embedded.block.astro",patterns:[{include:"source.css"}]}]},"L:meta.style.astro meta.lang.less - (meta source)":{patterns:[{begin:"(?<=>)(?!</)",contentName:"source.css.less",end:"(?=</)",name:"meta.embedded.block.astro",patterns:[{include:"source.css.less"}]}]},"L:meta.style.astro meta.lang.postcss - (meta source)":{patterns:[{begin:"(?<=>)(?!</)",contentName:"source.css.postcss",end:"(?=</)",name:"meta.embedded.block.astro",patterns:[{include:"source.css.postcss"}]}]},"L:meta.style.astro meta.lang.sass - (meta source)":{patterns:[{begin:"(?<=>)(?!</)",contentName:"source.sass",end:"(?=</)",name:"meta.embedded.block.astro",patterns:[{include:"source.sass"}]}]},"L:meta.style.astro meta.lang.scss - (meta source)":{patterns:[{begin:"(?<=>)(?!</)",contentName:"source.css.scss",end:"(?=</)",name:"meta.embedded.block.astro",patterns:[{include:"source.css.scss"}]}]},"L:meta.style.astro meta.lang.stylus - (meta source)":{patterns:[{begin:"(?<=>)(?!</)",contentName:"source.stylus",end:"(?=</)",name:"meta.embedded.block.astro",patterns:[{include:"source.stylus"}]}]}},name:"astro",patterns:[{include:"#scope"},{include:"#frontmatter"}],repository:{attributes:{patterns:[{include:"#attributes-events"},{include:"#attributes-keyvalue"},{include:"#attributes-interpolated"}]},"attributes-events":{begin:"(on(s(croll|t(orage|alled)|u(spend|bmit)|e(curitypolicyviolation|ek(ing|ed)|lect))|hashchange|c(hange|o(ntextmenu|py)|u(t|echange)|l(ick|ose)|an(cel|play(through)?))|t(imeupdate|oggle)|in(put|valid)|o(nline|ffline)|d(urationchange|r(op|ag(start|over|e(n(ter|d)|xit)|leave)?)|blclick)|un(handledrejection|load)|p(opstate|lay(ing)?|a(ste|use|ge(show|hide))|rogress)|e(nded|rror|mptied)|volumechange|key(down|up|press)|focus|w(heel|aiting)|l(oad(start|e(nd|d(data|metadata)))?|anguagechange)|a(uxclick|fterprint|bort)|r(e(s(ize|et)|jectionhandled)|atechange)|m(ouse(o(ut|ver)|down|up|enter|leave|move)|essage(error)?)|b(efore(unload|print)|lur)))(?![\\\\w:-])",beginCaptures:{0:{patterns:[{match:".*",name:"entity.other.attribute-name.astro"}]}},end:"(?=\\s*+[^=\\s])",name:"meta.attribute.$1.astro",patterns:[{begin:"=",beginCaptures:{0:{name:"punctuation.separator.key-value.astro"}},end:"(?<=[^\\s=])(?!\\s*=)|(?=/?>)",patterns:[{begin:"(?=[^\\s=<>`/]|/(?!>))",end:"(?!\\G)",name:"meta.embedded.line.js",patterns:[{captures:{0:{name:"source.js"},1:{patterns:[{include:"source.js"}]}},match:"(([^\\s\\\"'=<>`/]|/(?!>))+)",name:"string.unquoted.astro"},{begin:'(["])',beginCaptures:{0:{name:"punctuation.definition.string.begin.astro"}},end:"\\1",endCaptures:{0:{name:"punctuation.definition.string.end.astro"}},name:"string.quoted.astro",patterns:[{captures:{0:{patterns:[{include:"source.js"}]}},match:'([^\\n\\"/]|/(?![/*]))+'},{begin:"//",beginCaptures:{0:{name:"punctuation.definition.comment.js"}},end:'(?=\\")|\\n',name:"comment.line.double-slash.js"},{begin:"/\\*",beginCaptures:{0:{name:"punctuation.definition.comment.begin.js"}},end:'(?=\\")|\\*/',endCaptures:{0:{name:"punctuation.definition.comment.end.js"}},name:"comment.block.js"}]},{begin:"(['])",beginCaptures:{0:{name:"punctuation.definition.string.begin.astro"}},end:"\\1",endCaptures:{0:{name:"punctuation.definition.string.end.astro"}},name:"string.quoted.astro",patterns:[{captures:{0:{patterns:[{include:"source.js"}]}},match:"([^\\n\\'/]|/(?![/*]))+"},{begin:"//",beginCaptures:{0:{name:"punctuation.definition.comment.js"}},end:"(?=\\')|\\n",name:"comment.line.double-slash.js"},{begin:"/\\*",beginCaptures:{0:{name:"punctuation.definition.comment.begin.js"}},end:"(?=\\')|\\*/",endCaptures:{0:{name:"punctuation.definition.comment.end.js"}},name:"comment.block.js"}]}]}]}]},"attributes-interpolated":{begin:"(?<!:|=)\\s*({)",contentName:"meta.embedded.expression.astro source.tsx",end:"(\\})",patterns:[{include:"source.tsx"}]},"attributes-keyvalue":{begin:"([_@$[:alpha:]][:._\\-$[:alnum:]]*)",beginCaptures:{0:{patterns:[{match:".*",name:"entity.other.attribute-name.astro"}]}},end:"(?=\\s*+[^=\\s])",name:"meta.attribute.$1.astro",patterns:[{begin:"=",beginCaptures:{0:{name:"punctuation.separator.key-value.astro"}},end:"(?<=[^\\s=])(?!\\s*=)|(?=/?>)",patterns:[{include:"#attributes-value"}]}]},"attributes-value":{patterns:[{include:"#interpolation"},{match:"([^\\s\"'=<>`/]|/(?!>))+",name:"string.unquoted.astro"},{begin:"(['\"])",beginCaptures:{0:{name:"punctuation.definition.string.begin.astro"}},end:"\\1",endCaptures:{0:{name:"punctuation.definition.string.end.astro"}},name:"string.quoted.astro"},{begin:"(`)",end:"\\1",name:"string.template.astro",patterns:[{include:"source.tsx#template-substitution-element"},{include:"source.tsx#string-character-escape"}]}]},comments:{begin:"\x3c!--",captures:{0:{name:"punctuation.definition.comment.astro"}},end:"--\x3e",name:"comment.block.astro",patterns:[{match:"\\G-?>|\x3c!--(?!>)|<!-(?=--\x3e)|--!>",name:"invalid.illegal.characters-not-allowed-here.astro"}]},frontmatter:{begin:"\\A(-{3})\\s*$",beginCaptures:{1:{name:"comment"}},contentName:"source.ts",end:"(^|\\G)(-{3})|\\.{3}\\s*$",endCaptures:{2:{name:"comment"}},patterns:[{include:"source.ts"}]},interpolation:{patterns:[{begin:"\\{",beginCaptures:{0:{name:"punctuation.section.embedded.begin.astro"}},contentName:"meta.embedded.expression.astro source.tsx",end:"\\}",endCaptures:{0:{name:"punctuation.section.embedded.end.astro"}},patterns:[{begin:"\\G\\s*(?={)",end:"(?<=})",patterns:[{include:"source.tsx#object-literal"}]},{include:"source.tsx"}]}]},scope:{patterns:[{include:"#comments"},{include:"#tags"},{include:"#interpolation"},{begin:"(?<=>|})",end:"(?=<|{)",name:"text.astro"}]},tags:{patterns:[{include:"#tags-raw"},{include:"#tags-lang"},{include:"#tags-void"},{include:"#tags-general-end"},{include:"#tags-general-start"}]},"tags-end-node":{captures:{1:{name:"meta.tag.end.astro punctuation.definition.tag.begin.astro"},2:{name:"meta.tag.end.astro",patterns:[{include:"#tags-name"}]},3:{name:"meta.tag.end.astro punctuation.definition.tag.end.astro"},4:{name:"meta.tag.start.astro punctuation.definition.tag.end.astro"}},match:"(</)(.*?)\\s*(>)|(/>)"},"tags-general-end":{begin:"(</)([^/\\s>]*)",beginCaptures:{1:{name:"meta.tag.end.astro punctuation.definition.tag.begin.astro"},2:{name:"meta.tag.end.astro",patterns:[{include:"#tags-name"}]}},end:"(>)",endCaptures:{1:{name:"meta.tag.end.astro punctuation.definition.tag.end.astro"}},name:"meta.scope.tag.$2.astro"},"tags-general-start":{begin:"(<)([^/\\s>/]*)",beginCaptures:{0:{patterns:[{include:"#tags-start-node"}]}},end:"(/?>)",endCaptures:{1:{name:"meta.tag.start.astro punctuation.definition.tag.end.astro"}},name:"meta.scope.tag.$2.astro",patterns:[{include:"#tags-start-attributes"}]},"tags-lang":{begin:"<(script|style)",beginCaptures:{0:{patterns:[{include:"#tags-start-node"}]}},end:"</\\1\\s*>|/>",endCaptures:{0:{patterns:[{include:"#tags-end-node"}]}},name:"meta.scope.tag.$1.astro meta.$1.astro",patterns:[{begin:"\\G(?=\\s*[^>]*?(type|lang)\\s*=\\s*(['\"]|)(?:text\\/)?(application\\/ld\\+json)\\2)",end:"(?=</|/>)",name:"meta.lang.json.astro",patterns:[{include:"#tags-lang-start-attributes"}]},{begin:"\\G(?=\\s*[^>]*?(type|lang)\\s*=\\s*(['\"]|)(module)\\2)",end:"(?=</|/>)",name:"meta.lang.javascript.astro",patterns:[{include:"#tags-lang-start-attributes"}]},{begin:"\\G(?=\\s*[^>]*?(type|lang)\\s*=\\s*(['\"]|)(?:text/|application/)?([\\w\\/+]+)\\2)",end:"(?=</|/>)",name:"meta.lang.$3.astro",patterns:[{include:"#tags-lang-start-attributes"}]},{include:"#tags-lang-start-attributes"}]},"tags-lang-start-attributes":{begin:"\\G",end:"(?=/>)|>",endCaptures:{0:{name:"punctuation.definition.tag.end.astro"}},name:"meta.tag.start.astro",patterns:[{include:"#attributes"}]},"tags-name":{patterns:[{match:"[A-Z][a-zA-Z0-9_]*",name:"support.class.component.astro"},{match:"[a-z][\\w0-9:]*-[\\w0-9:-]*",name:"meta.tag.custom.astro entity.name.tag.astro"},{match:"[a-z][\\w0-9:-]*",name:"entity.name.tag.astro"}]},"tags-raw":{begin:"<([^/?!\\s<>]+)(?=[^>]+is:raw).*?",beginCaptures:{0:{patterns:[{include:"#tags-start-node"}]}},contentName:"source.unknown",end:"</\\1\\s*>|/>",endCaptures:{0:{patterns:[{include:"#tags-end-node"}]}},name:"meta.scope.tag.$1.astro meta.raw.astro",patterns:[{include:"#tags-lang-start-attributes"}]},"tags-start-attributes":{begin:"\\G",end:"(?=/?>)",name:"meta.tag.start.astro",patterns:[{include:"#attributes"}]},"tags-start-node":{captures:{1:{name:"punctuation.definition.tag.begin.astro"},2:{patterns:[{include:"#tags-name"}]}},match:"(<)([^/\\s>/]*)",name:"meta.tag.start.astro"},"tags-void":{begin:"(<)(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)(?=\\s|/?>)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.astro"},2:{name:"entity.name.tag.astro"}},end:"/?>",endCaptures:{0:{name:"punctuation.definition.tag.begin.astro"}},name:"meta.tag.void.astro",patterns:[{include:"#attributes"}]}},scopeName:"source.astro",embeddedLangs:["json","javascript","typescript","stylus","sass","css","scss","less","postcss","tsx"]});var g=[...a.default,...s.default,...o.default,...r.default,...i.default,...c.default,...u.default,...d.default,...l.default,...m.default,p]}}]);