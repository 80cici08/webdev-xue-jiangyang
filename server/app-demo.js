module.exports =function (app) {
  app.get("/api/hello", test);
  function test(req, res) {
    res.status(200).send("hello...");
  }
}
