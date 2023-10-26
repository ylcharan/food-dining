"use strict";
exports.__esModule = true;
var react_1 = require("react");
var HotelCard_1 = require("../HotelCard");
var hotel_1_avif_1 = require("../../public/hotel-1.avif");
var hotel_2_avif_1 = require("../../public/hotel-2.avif");
var hotel_3_jpeg_1 = require("../../public/hotel-3.jpeg");
var hotel_4_jpeg_1 = require("../../public/hotel-4.jpeg");
var hotel_5_webp_1 = require("../../public/hotel-5.webp");
var hotel_6_jpeg_1 = require("../../public/hotel-6.jpeg");
var hotel_7_jpeg_1 = require("../../public/hotel-7.jpeg");
function Hero() {
    var data = [
        {
            img: hotel_1_avif_1["default"],
            distance: 2.1,
            hotelName: "Red Cherry",
            isOpen: true,
            rating: 2.3
        },
        {
            img: hotel_2_avif_1["default"],
            distance: 15,
            hotelName: "Novotel",
            isOpen: true,
            rating: 4.2
        },
        {
            img: hotel_3_jpeg_1["default"],
            distance: 5.5,
            hotelName: "Tajhotel",
            isOpen: true,
            rating: 4.8
        },
        {
            img: hotel_4_jpeg_1["default"],
            distance: 25,
            hotelName: "The Lodhi",
            isOpen: true,
            rating: 3.9
        },
        {
            img: hotel_5_webp_1["default"],
            distance: 55,
            hotelName: "The Roseate",
            isOpen: true,
            rating: 4.1
        },
        {
            img: hotel_6_jpeg_1["default"],
            distance: 30,
            hotelName: "Taj Exotica",
            isOpen: true,
            rating: 2.6
        },
        {
            img: hotel_7_jpeg_1["default"],
            distance: 87,
            hotelName: "Ritz Carlton",
            isOpen: true,
            rating: 4.6
        },
    ];
    return (react_1["default"].createElement("div", { className: "w-full min-h-screen bg-[#f0f4ff] py-[35px]" },
        react_1["default"].createElement("div", { className: "base-wrapper" },
            react_1["default"].createElement("div", { className: "robot py-3 w-full md:w-[50%] text-center md:text-left transition-all duration-300 cursor-pointer text-[#291D89] hover:text-[#4e67eb] font-bold text-[48px]" }, "Restaurants"),
            react_1["default"].createElement("div", { className: "grid grid-cols-3 items-center gap-[30px]" }, data.map(function (e, i) { return (react_1["default"].createElement(HotelCard_1["default"], { key: i, imgSrc: e.img, distance: e.distance, hotelName: e.hotelName, isOpen: e.isOpen, rating: e.rating })); })))));
}
exports["default"] = Hero;
