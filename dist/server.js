"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = express_1.default();
const port = process.env.SERVER_PORT;
const tracer_1 = require("./tracer");
// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.get("/", (req, res) => {
    const span = tracer_1.tracer.startSpan("do-work");
    span.log({ hi: "hi there log" });
    span.finish();
    res.send("Hello World!");
});
//# sourceMappingURL=server.js.map