const https = require("https");

https.get("https://coderbyte.com/api/challenges/json/age-counting", (resp) => {

    // console.log("statusCode: ", resp.statusCode);
    // console.log("headers: ", resp.headers);

    // let data = "";

    // parse json data here...
   
    console.log(resp.data);

});
