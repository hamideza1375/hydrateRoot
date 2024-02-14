import express from "express";
import React from "react";
import { StaticRouter } from "react-router-dom/server";
import { renderToString } from "react-dom/server";
import path from "path";
import fs from "fs";

import App from "./src/App";

const app = express();

app.use(express.static("./build", { index: false }));


app.get("/*", (req, res) => {
  const reactApp = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
  const templateFile = path.resolve("./build/index.html");
  const data = fs.readFileSync(templateFile, "utf-8")
  res.send(data.replace('<div id="root"></div>', `<div  id="root">${reactApp}</div>`))
});


app.listen(5000, () => { console.log("server is running on the 5000") }); 