var kugou = require("./kugou");

kugou.complete("jiaju").then(function(data) {
    console.log(data);
}).
catch(function(error) {
    console.log(error);
});

kugou.search("jiaju", 12).then(function(data) {
    console.log(data);
}).
catch(function(error) {
    console.log(error);
});

kugou.getsonginfo("F9C5D096E393DBC017CBED9815E37685").then(function(data) {
    console.log(data);
}).
catch(function(error) {
    console.log(error);
});

