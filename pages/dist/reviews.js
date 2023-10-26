"use strict";
exports.__esModule = true;
var ReviewCard_1 = require("@/components/ReviewCard");
var Reviews = function () {
    return (React.createElement("div", { className: "w-full min-h-screen bg-[#f0f4ff] py-[35px]" },
        React.createElement("div", { className: "base-wrapper" },
            React.createElement("div", { className: "robot py-3 w-full md:w-[50%] text-center md:text-left transition-all duration-300 cursor-pointer text-[#291D89] hover:text-[#4e67eb] font-bold text-[48px]" }, "Reviews"),
            React.createElement("div", { className: "flex flex-col text-black" },
                React.createElement(ReviewCard_1["default"], null),
                React.createElement(ReviewCard_1["default"], null),
                React.createElement(ReviewCard_1["default"], null)))));
};
exports["default"] = Reviews;
