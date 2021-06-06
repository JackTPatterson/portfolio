var express = require("express");
var path = require("path");


var routes = require("./routes");

var app = express();


app.set("port", process.env.PORT || 3000);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(routes);
app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next){
    res.status(404);
  
    res.format({
      html: function () {
        res.render('404', { url: req.url })
      },
    })
  });

app.listen(app.get("port"), function () {
    console.log("Server has started on port " + app.get("port"))
})