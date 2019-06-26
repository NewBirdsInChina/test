var request = require('request'); 
var body = []; 
var auth = "Basic " +Buffer.from("lixinyu:2c794521-cba9-4356-9a11-63d35249fcdf ").toString("base64"); 
request.get({ 
	url: 'https://api.10646.cn/rws/api/v1/smsMessages?accountId=100020620&fromDate=2016-04-18T17%3A31%3A34%2B00%3A00&pageSize=50&pageNumber=1', 
	headers : {"Authorization" : auth}
}, 
	function(error, response, body) { 
		if(error) { 
			console.log('Error:', error); 
			return; 
		} else {
			// return statusCode  
			console.log(response.statusCode); 
			// return contentType 
			console.log(response.headers['content-type']); 
			console.log(body); 
		} 
	} 
)