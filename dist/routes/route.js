"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const server_1 = require("../server");
const main = () => {
    server_1.app.get('/', (req, res) => {
        res.status(200).json({ message: "Todo Correto" });
    });
};
exports.main = main;
//# sourceMappingURL=route.js.map