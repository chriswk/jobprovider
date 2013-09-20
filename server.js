var express = require("express")
var app = express();
app.use(express.logger());

app.get('/', function (req, res) {
	var ads = [{
		ad: {
			id: 1,
			title: "My job",
			orgname: "FINN.no"
		}
		},{
		ad: {
			id: 2,
			title: "My other job",
			orgname: "FINN.no" 
		}
	}];
	if (req.query.callback && req.query.callback != "") {
		res.jsonp({ ads: ads})
	} else {
		res.json({ads: ads})
	}
});

app.listen(2999);