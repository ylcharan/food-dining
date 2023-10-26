"use strict";
exports.__esModule = true;
var router_1 = require("next/router");
var react_1 = require("react");
var cg_1 = require("react-icons/cg");
var Menu_1 = require("@/components/Menu");
var bi_1 = require("react-icons/bi");
function Header() {
    var router = router_1.useRouter();
    var _a = react_1.useState(false), isMenuOpen = _a[0], setIsMenuOpen = _a[1];
    return (react_1["default"].createElement("div", { className: "min-h-[80px] border-b-[1.5px] bg-[#f0f4ff] border-[#291d89] " },
        react_1["default"].createElement("div", { className: "base-wrapper text-[48px] flex items-center justify-center " },
            react_1["default"].createElement("div", { onClick: function () {
                    setIsMenuOpen(false);
                    router.push("/");
                }, className: "header-title py-3 w-full md:w-[50%] text-center md:text-left transition-all duration-300 cursor-pointer font-extrabold text-[#291D89] hover:text-[#4e67eb]" }, "Food and Dining"),
            react_1["default"].createElement("div", { className: "hidden md:flex gap-[20px] items-center justify-end w-[50%] text-[18px]" },
                react_1["default"].createElement("div", { onClick: function () { return router.push("/signup"); } },
                    react_1["default"].createElement(bi_1.BiUser, { className: "text-[40px] hover-link" })),
                react_1["default"].createElement("div", { onClick: function () { return setIsMenuOpen(!isMenuOpen); } },
                    react_1["default"].createElement(cg_1.CgMenuRight, { className: "text-[40px] hover-link" }),
                    react_1["default"].createElement(Menu_1["default"], { isOpen: isMenuOpen }))))));
}
exports["default"] = Header;
