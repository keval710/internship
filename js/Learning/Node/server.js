const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(
      JSON.stringify([{ data: "" }, { data: "" }, { data: "" }, { data: "" }])
    );
    res.end();
  })
  .listen(5000);
