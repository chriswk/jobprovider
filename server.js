var express = require("express");
var simplexml = require("simplexml");
var app = express();
app.use(express.logger());

var ads = [{
		id: 1,
		title: "My job",
		orgname: "FINN.no"
	}
	,{
		id: 2,
		title: "My other job",
		orgname: "FINN.no" 
}];

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', ['Content-Type', "X-Requested-With"]);

    next();
}


app.all("/*", allowCrossDomain);

app.get('/json', function (req, res) {
	if (req.query.callback && req.query.callback != "") {
		res.jsonp({ ads: ads})
	} else {
		res.json({ads: ads})
	}
});

app.get('/xml', function (req, res) {
	res.type("xml");
	res.send(simplexml.toXML(ads));
	res.send(200);
});

var port = process.env.PORT || 5000

app.listen(port, function () {
	console.log("Listening on port: " +port);
});