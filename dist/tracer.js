"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const serviceName = "my-awesome-service";
const jaeger_client_1 = require("jaeger-client");
const logger_1 = require("./logger");
const jaeger_client_2 = require("jaeger-client");
const prom_client_1 = __importDefault(require("prom-client"));
const metrics = new jaeger_client_2.PrometheusMetricsFactory(prom_client_1.default, serviceName);
// See schema https://github.com/jaegertracing/jaeger-client-node/blob/master/src/configuration.js#L37
const config = {
    reporter: {
        agentHost: "222.222.222.222",
        logSpans: true
    },
    sampler: {
        param: 1,
        type: "const"
    },
    serviceName
};
const options = {
    logger: logger_1.logger,
    tags: {
        serviceName: "1.1.2"
    }
    // metrics: metrics,
};
console.log(process.env.JAEGER_AGENT_HOST);
exports.tracer = jaeger_client_1.initTracer(config, options);
//# sourceMappingURL=tracer.js.map