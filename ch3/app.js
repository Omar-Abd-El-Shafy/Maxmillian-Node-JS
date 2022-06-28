const http = require("http");
console.log("hello");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write(
      '<form action="/message" method="POST"><input type="text" name="message"></input> <button type="submit">Send</button></form>'
    );

    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  res.setHeader("content-type", "text/html");
  res.write("<html>");
  res.write("<body>");
  res.write("<h1> HELLO </h1>");

  res.write("</body>");
  res.write("</html>");
  return res.end();
});

server.listen(3000);
