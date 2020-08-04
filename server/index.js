var express = require("express");
var app = express();
var sqlQuery = require("./sql");

app.get("/", (req, res) => {
  res.send("这是答题App服务器");
});
app.get("/api/rtimu", async (req, res) => {
  //随机获取10个题目
  // console.log(req.query);
  res.append("Access-Control-Allow-Origin", "*");
  res.append("Access-Control-Conent-Type", "*");
  let page = req.query.page ? req.query.page : 1;
  let strSql = `select * from quizzes limit ${page * 10},10`;
  let result = await sqlQuery(strSql);
  // console.log(result);
  res.json(Array.from(result));
});
app.listen(8080, () => {
  console.log("serser start: http://localhost:8080/");
});
