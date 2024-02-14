import express from "express";
import path from "path";
import fs from "fs";

import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "../src/App";
const app = express();

app.use(express.static(path.resolve('public',"index.html")))


 fs.writeFileSync(path.resolve('public',"index.html"),
	`<html>
			<body>
				<div id="root">${ReactDOMServer.renderToString(<App />)}</div>
			</body>
		</html>`
	,'utf-8')



