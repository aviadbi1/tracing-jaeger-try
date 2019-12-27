import express from "express";

import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.SERVER_PORT;

import { Span } from "opentracing";
import { tracer } from "./tracer";

// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get("/", (req, res) => {
  const span: Span = tracer.startSpan("do-work");
  span.log({ hi: "hi there log" });
  span.finish();
  res.send("Hello World!");
});
