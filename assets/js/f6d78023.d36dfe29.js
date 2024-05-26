"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[9016],{3905:(n,e,t)=>{t.d(e,{Zo:()=>s,kt:()=>f});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c=r.createContext({}),u=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},s=function(n){var e=u(n.components);return r.createElement(c.Provider,{value:e},n.children)},p="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,c=n.parentName,s=l(n,["components","mdxType","originalType","parentName"]),p=u(t),d=o,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return t?r.createElement(f,i(i({ref:e},s),{},{components:t})):r.createElement(f,i({ref:e},s))}));function f(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=n,l[p]="string"==typeof n?n:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6926:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const a={},i="\u2699\ufe0f Configuration",l={unversionedId:"configuration/index",id:"configuration/index",title:"\u2699\ufe0f Configuration",description:"\ud83d\udcc2 File Structure",source:"@site/docs/configuration/index.md",sourceDirName:"configuration",slug:"/configuration/",permalink:"/configuration/",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/main/docs/configuration/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u2328\ufe0f Keymaps",permalink:"/keymaps"},next:{title:"lazy.nvim",permalink:"/configuration/lazy.nvim"}},c={},u=[{value:"\ud83d\udcc2 File Structure",id:"-file-structure",level:2},{value:"Icons &amp; Colorscheme",id:"icons--colorscheme",level:2},{value:"Default Settings",id:"default-settings",level:3}],s={toc:u};function p(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ufe0f-configuration"},"\u2699\ufe0f Configuration"),(0,o.kt)("h2",{id:"-file-structure"},"\ud83d\udcc2 File Structure"),(0,o.kt)("p",null,"The files under config will be automatically loaded at the appropriate time,\nso you don't need to require those files manually. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"./configuration/general"},"general settings"),"."),(0,o.kt)("p",null,"You can add your custom plugin specs under ",(0,o.kt)("inlineCode",{parentName:"p"},"lua/plugins/"),". All files there\nwill be automatically loaded by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/folke/lazy.nvim"},"lazy.nvim"),".\nFor more information, see ",(0,o.kt)("a",{parentName:"p",href:"/configuration/plugins"},"configuring plugins"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:"{4-7,9-11}","{4-7,9-11}":!0},"~/.config/nvim\n\u251c\u2500\u2500 lua\n\u2502\xa0\xa0 \u251c\u2500\u2500 config\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 autocmds.lua\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 keymaps.lua\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 lazy.lua\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 options.lua\n\u2502\xa0\xa0 \u2514\u2500\u2500 plugins\n\u2502\xa0\xa0     \u251c\u2500\u2500 spec1.lua\n\u2502\xa0\xa0     \u251c\u2500\u2500 **\n\u2502\xa0\xa0     \u2514\u2500\u2500 spec2.lua\n\u2514\u2500\u2500 init.toml\n")),(0,o.kt)("h2",{id:"icons--colorscheme"},"Icons & Colorscheme"),(0,o.kt)("p",null,"Icons & colorscheme can be configured as options for the ",(0,o.kt)("strong",{parentName:"p"},"LazyVim")," plugin."),(0,o.kt)("p",null,"For example in ",(0,o.kt)("inlineCode",{parentName:"p"},"lua/plugins/core.lua")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'return {\n  {\n    "LazyVim/LazyVim",\n    opts = {\n      colorscheme = "catppuccin",\n    }\n  }\n}\n')),(0,o.kt)("h3",{id:"default-settings"},"Default Settings"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  -- colorscheme can be a string like `catppuccin` or a function that will load the colorscheme\n  ---@type string|fun()\n  colorscheme = function()\n    require("tokyonight").load()\n  end,\n  -- load the default settings\n  defaults = {\n    autocmds = true, -- lazyvim.config.autocmds\n    keymaps = true, -- lazyvim.config.keymaps\n    -- lazyvim.config.options can\'t be configured here since that\'s loaded before lazyvim setup\n    -- if you want to disable loading options, add `package.loaded["lazyvim.config.options"] = true` to the top of your init.lua\n  },\n  news = {\n    -- When enabled, NEWS.md will be shown when changed.\n    -- This only contains big new features and breaking changes.\n    lazyvim = true,\n    -- Same but for Neovim\'s news.txt\n    neovim = false,\n  },\n  -- icons used by other plugins\n  -- stylua: ignore\n  icons = {\n    misc = {\n      dots = "\udb80\uddd8",\n    },\n    dap = {\n      Stopped             = { "\udb80\udc55 ", "DiagnosticWarn", "DapStoppedLine" },\n      Breakpoint          = "\uf192 ",\n      BreakpointCondition = "\uf059 ",\n      BreakpointRejected  = { "\uf06a ", "DiagnosticError" },\n      LogPoint            = ".>",\n    },\n    diagnostics = {\n      Error = "\uf057 ",\n      Warn  = "\uf071 ",\n      Hint  = "\uf0eb ",\n      Info  = "\uf05a ",\n    },\n    git = {\n      added    = "\uf0fe ",\n      modified = "\uf14b ",\n      removed  = "\uf146 ",\n    },\n    kinds = {\n      Array         = "\uea8a ",\n      Boolean       = "\udb82\ude19 ",\n      Class         = "\ueb5b ",\n      Codeium       = "\udb81\ude26 ",\n      Color         = "\ueb5c ",\n      Control       = "\uea68 ",\n      Collapsed     = "\uf460 ",\n      Constant      = "\udb80\udfff ",\n      Constructor   = "\uf423 ",\n      Copilot       = "\uf4b8 ",\n      Enum          = "\uf15d ",\n      EnumMember    = "\uf15d ",\n      Event         = "\uea86 ",\n      Field         = "\uf02b ",\n      File          = "\uea7b ",\n      Folder        = "\ue5ff ",\n      Function      = "\udb80\ude95 ",\n      Interface     = "\uf0e8 ",\n      Key           = "\uea93 ",\n      Keyword       = "\ueb62 ",\n      Method        = "\udb80\ude95 ",\n      Module        = "\uf487 ",\n      Namespace     = "\udb82\uddae ",\n      Null          = "\ue299 ",\n      Number        = "\udb80\udfa0 ",\n      Object        = "\uea8b ",\n      Operator      = "\ueb64 ",\n      Package       = "\uf487 ",\n      Property      = "\uf02b ",\n      Reference     = "\ueb36 ",\n      Snippet       = "\ueb66 ",\n      String        = "\ueab1 ",\n      Struct        = "\udb80\uddbc ",\n      TabNine       = "\udb80\udfda ",\n      Text          = "\uea93 ",\n      TypeParameter = "\uea92 ",\n      Unit          = "\uea96 ",\n      Value         = "\uea93 ",\n      Variable      = "\udb80\udc2b ",\n    },\n  },\n  ---@type table<string, string[]|boolean>?\n  kind_filter = {\n    default = {\n      "Class",\n      "Constructor",\n      "Enum",\n      "Field",\n      "Function",\n      "Interface",\n      "Method",\n      "Module",\n      "Namespace",\n      "Package",\n      "Property",\n      "Struct",\n      "Trait",\n    },\n    markdown = false,\n    help = false,\n    -- you can specify a different filter for each filetype\n    lua = {\n      "Class",\n      "Constructor",\n      "Enum",\n      "Field",\n      "Function",\n      "Interface",\n      "Method",\n      "Module",\n      "Namespace",\n      -- "Package", -- remove package since luals uses it for control flow structures\n      "Property",\n      "Struct",\n      "Trait",\n    },\n  },\n}\n')))}p.isMDXComponent=!0}}]);