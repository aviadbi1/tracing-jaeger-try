"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bunyan_1 = __importDefault(require("bunyan"));
exports.logger = bunyan_1.default.createLogger({
    name: "just-tracing",
    streams: [
        {
            level: "debug",
            stream: process.stdout // log INFO and above to stdout
        }
    ],
    // Any other fields are added to all log records as is.
    project: "just-tracing-project"
});
//# sourceMappingURL=logger.js.map