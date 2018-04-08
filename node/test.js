var fs = require('fs');
var https = require('https');


fs.writeFile(__dirname + "/index.html", "<h1> Yay</h1>", function(err){
    if(err) {
        return console.log(err);
    } else {
        return console.log("file created");
    }

});

var myPhotoLocation = "https://raw.githubusercontent.com/LearnWebCode/welcome-to-git/master/images/dog.jpg";

https.get(myPhotoLocation, function(response) {
    response.pipe(fs.createWriteStream(__dirname + "/dog.jpg"));
});

