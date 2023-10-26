"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var navigation_1 = require("next/navigation");
function SignupPage() {
    var router = navigation_1.useRouter();
    var _a = react_1["default"].useState({
        email: "",
        password: "",
        username: ""
    }), user = _a[0], setUser = _a[1];
    var _b = react_1["default"].useState(false), buttonDisabled = _b[0], setButtonDisabled = _b[1];
    var _c = react_1["default"].useState(false), loading = _c[0], setLoading = _c[1];
    react_1.useEffect(function () {
        if (user.email.length > 0 &&
            user.password.length > 0 &&
            user.username.length > 0) {
            setButtonDisabled(false);
        }
        else {
            setButtonDisabled(true);
        }
    }, [user]);
    return (react_1["default"].createElement("div", { className: "bg-[#f0f4f5]" },
        react_1["default"].createElement("div", { className: "flex flex-col items-center justify-center min-h-screen py-2 mx-auto  w-[300px] text-[#291d89]" },
            react_1["default"].createElement("h1", null, loading ? "Processing" : "Signup"),
            react_1["default"].createElement("hr", null),
            react_1["default"].createElement("label", { htmlFor: "username", className: "mr-auto text-[#291d89]" }, "username"),
            react_1["default"].createElement("input", { className: "p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black w-full", id: "username", type: "text", value: user.username, onChange: function (e) { return setUser(__assign(__assign({}, user), { username: e.target.value })); }, placeholder: "username" }),
            react_1["default"].createElement("label", { htmlFor: "email", className: "mr-auto text-[#291d89]" }, "email"),
            react_1["default"].createElement("input", { className: "p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black w-full", id: "email", type: "text", value: user.email, onChange: function (e) { return setUser(__assign(__assign({}, user), { email: e.target.value })); }, placeholder: "email" }),
            react_1["default"].createElement("label", { htmlFor: "password", className: "mr-auto text-[#291d89]" }, "password"),
            react_1["default"].createElement("input", { className: "p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black w-full", id: "password", type: "password", value: user.password, onChange: function (e) { return setUser(__assign(__assign({}, user), { password: e.target.value })); }, placeholder: "password" }),
            react_1["default"].createElement("button", { onClick: function () { return router.push("/"); }, className: (buttonDisabled ? "opacity-50" : "") + " btn-primary !px-[150px]" }, "Signup"))));
}
exports["default"] = SignupPage;
