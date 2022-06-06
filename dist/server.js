"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const config_1 = __importDefault(require("./util/config"));
const route_1 = require("./routes/route");
//import { conect } from './util/connection';
exports.app = (0, express_1.default)();
dotenv_1.default.config();
//examples
const port = config_1.default.PORT;
const numb = config_1.default.number;
const name = config_1.default.string;
(0, route_1.main)();
exports.app.listen(port, () => {
    console.log('\nServer running in ----> "http://localhost:3000"\n');
});
//# sourceMappingURL=server.js.map