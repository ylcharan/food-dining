"use strict";
exports.__esModule = true;
var human_avif_1 = require("../../public/human.avif");
var ReviewCard = function () {
    return (React.createElement("div", { className: "w-full bg-white mb-[20px] rounded-[20px] flex p-[20px]" },
        React.createElement("div", { className: "flex gap-[8px] items-center" },
            React.createElement("img", { src: human_avif_1["default"].src, alt: "", className: "w-[60px] h-[60px] rounded-full object-cover" }),
            React.createElement("div", { className: "text-[24px]" }, "Arundathi"))));
};
exports["default"] = ReviewCard;
