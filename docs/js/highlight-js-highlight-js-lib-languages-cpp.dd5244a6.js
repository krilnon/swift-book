/*!
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2021 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
 */
"use strict";(self["webpackChunkswift_docc_render"]=self["webpackChunkswift_docc_render"]||[]).push([[450],{4375:function(e,t,n){function a(e){const t=e.regex,n=e.COMMENT("//","$",{contains:[{begin:/\\\n/}]}),a="decltype\\(auto\\)",r="[a-zA-Z_]\\w*::",i="<[^<>]+>",s="(?!struct)("+a+"|"+t.optional(r)+"[a-zA-Z_]\\w*"+t.optional(i)+")",c={className:"type",begin:"\\b[a-z\\d_]*_t\\b"},o="\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",l={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'("+o+"|.)",end:"'",illegal:"."},e.END_SAME_AS_BEGIN({begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,end:/\)([^()\\ ]{0,16})"/})]},d={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},u={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{keyword:"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},e.inherit(l,{className:"string"}),{className:"string",begin:/<.*?>/},n,e.C_BLOCK_COMMENT_MODE]},_={className:"title",begin:t.optional(r)+e.IDENT_RE,relevance:0},p=t.optional(r)+e.IDENT_RE+"\\s*\\(",m=["alignas","alignof","and","and_eq","asm","atomic_cancel","atomic_commit","atomic_noexcept","auto","bitand","bitor","break","case","catch","class","co_await","co_return","co_yield","compl","concept","const_cast|10","consteval","constexpr","constinit","continue","decltype","default","delete","do","dynamic_cast|10","else","enum","explicit","export","extern","false","final","for","friend","goto","if","import","inline","module","mutable","namespace","new","noexcept","not","not_eq","nullptr","operator","or","or_eq","override","private","protected","public","reflexpr","register","reinterpret_cast|10","requires","return","sizeof","static_assert","static_cast|10","struct","switch","synchronized","template","this","thread_local","throw","transaction_safe","transaction_safe_dynamic","true","try","typedef","typeid","typename","union","using","virtual","volatile","while","xor","xor_eq"],f=["bool","char","char16_t","char32_t","char8_t","double","float","int","long","short","void","wchar_t","unsigned","signed","const","static"],g=["any","auto_ptr","barrier","binary_semaphore","bitset","complex","condition_variable","condition_variable_any","counting_semaphore","deque","false_type","future","imaginary","initializer_list","istringstream","jthread","latch","lock_guard","multimap","multiset","mutex","optional","ostringstream","packaged_task","pair","promise","priority_queue","queue","recursive_mutex","recursive_timed_mutex","scoped_lock","set","shared_future","shared_lock","shared_mutex","shared_timed_mutex","shared_ptr","stack","string_view","stringstream","timed_mutex","thread","true_type","tuple","unique_lock","unique_ptr","unordered_map","unordered_multimap","unordered_multiset","unordered_set","variant","vector","weak_ptr","wstring","wstring_view"],b=["abort","abs","acos","apply","as_const","asin","atan","atan2","calloc","ceil","cerr","cin","clog","cos","cosh","cout","declval","endl","exchange","exit","exp","fabs","floor","fmod","forward","fprintf","fputs","free","frexp","fscanf","future","invoke","isalnum","isalpha","iscntrl","isdigit","isgraph","islower","isprint","ispunct","isspace","isupper","isxdigit","labs","launder","ldexp","log","log10","make_pair","make_shared","make_shared_for_overwrite","make_tuple","make_unique","malloc","memchr","memcmp","memcpy","memset","modf","move","pow","printf","putchar","puts","realloc","scanf","sin","sinh","snprintf","sprintf","sqrt","sscanf","std","stderr","stdin","stdout","strcat","strchr","strcmp","strcpy","strcspn","strlen","strncat","strncmp","strncpy","strpbrk","strrchr","strspn","strstr","swap","tan","tanh","terminate","to_underlying","tolower","toupper","vfprintf","visit","vprintf","vsprintf"],h=["NULL","false","nullopt","nullptr","true"],w=["_Pragma"],y={type:f,keyword:m,literal:h,built_in:w,_type_hints:g},v={className:"function.dispatch",relevance:0,keywords:{_hint:b},begin:t.concat(/\b/,/(?!decltype)/,/(?!if)/,/(?!for)/,/(?!switch)/,/(?!while)/,e.IDENT_RE,t.lookahead(/(<[^<>]+>|)\s*\(/))},k=[v,u,c,n,e.C_BLOCK_COMMENT_MODE,d,l],x={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:y,contains:k.concat([{begin:/\(/,end:/\)/,keywords:y,contains:k.concat(["self"]),relevance:0}]),relevance:0},E={className:"function",begin:"("+s+"[\\*&\\s]+)+"+p,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:y,illegal:/[^\w\s\*&:<>.]/,contains:[{begin:a,keywords:y,relevance:0},{begin:p,returnBegin:!0,contains:[_],relevance:0},{begin:/::/,relevance:0},{begin:/:/,endsWithParent:!0,contains:[l,d]},{relevance:0,match:/,/},{className:"params",begin:/\(/,end:/\)/,keywords:y,relevance:0,contains:[n,e.C_BLOCK_COMMENT_MODE,l,d,c,{begin:/\(/,end:/\)/,keywords:y,relevance:0,contains:["self",n,e.C_BLOCK_COMMENT_MODE,l,d,c]}]},c,n,e.C_BLOCK_COMMENT_MODE,u]};return{name:"C++",aliases:["cc","c++","h++","hpp","hh","hxx","cxx"],keywords:y,illegal:"</",classNameAliases:{"function.dispatch":"built_in"},contains:[].concat(x,E,v,k,[u,{begin:"\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<",end:">",keywords:y,contains:["self",c]},{begin:e.IDENT_RE+"::",keywords:y},{match:[/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,/\s+/,/\w+/],className:{1:"keyword",3:"title.class"}}])}}n.r(t),n.d(t,{default:function(){return a}})}}]);