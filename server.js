const path = require("path");
const fs = require("fs");
const { execSync } = require('child_process');
const express = require("express");
const cors = require("cors");

const init = () => {
  execSync('npm run build');

  const app = express();
  const port = 3005;
  app.use(cors());

  app.get("/api/*", (req, res) => {
    let data;

    try {
      const js = fs.readFileSync(path.join(`${__dirname}/server${req.path}.js`), 'utf8').trim();
      const func = eval(js)

      data = { success: true, data: func(req.query) }
    } catch {
      data = { success: false }
    }

    res.json(data)
  })

  app.get("*", (req, res) => {
    if (req.url === "/") {
      res.sendFile(path.join(`${__dirname}/dist/index.html`));
    } else if (/\.(css|js|png|ico)/.test(req.url)) {
      res.sendFile(path.join(`${__dirname}/dist${req.url}`));
    } else {
      console.log(req.url);
    }
  })

  app.listen(port, () => {
    console.log("Сервер подключен", port);
  });
}

init();
