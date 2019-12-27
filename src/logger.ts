import bunyan from "bunyan";

export const logger = bunyan.createLogger({
  name: "just-tracing", // Required
  streams: [
    {
      level: "debug",
      stream: process.stdout // log INFO and above to stdout
    }
  ],

  // Any other fields are added to all log records as is.
  project: "just-tracing-project"
});
