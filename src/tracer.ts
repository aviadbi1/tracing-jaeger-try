const serviceName = "my-awesome-service";
import { initTracer } from "jaeger-client";
import { logger } from "./logger";

import { PrometheusMetricsFactory } from "jaeger-client";
import promClient from "prom-client";
const metrics = new PrometheusMetricsFactory(promClient, serviceName);

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
  logger,
  tags: {
    serviceName: "1.1.2"
  }

  // metrics: metrics,
};

console.log(process.env.JAEGER_AGENT_HOST);

export const tracer = initTracer(config, options);
