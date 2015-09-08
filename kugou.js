/* 
* author  : tate_fan
* datetime: 2015年 09月 01日 星期二 17:25:48 CST
*/

(function() {
    var md5 = require("md5");
    var cli = new(require("node-rest-client").Client)();
    var Q = require("q");
    var urls = require("./utils");
    var kugou = module.exports = {
        search: function(keyword, pagesize, page) {
            var deferred = Q.defer();
            pagesize = typeof pagesize !== "undefined" ? pagesize: 9;
            page = typeof page !== "undefined" ? page: 1;
            if (typeof(keyword) === "undefined") {
                throw new Error("keyword must be not empty");
            }
            var args = {};
            args.parameters = {
                pagesize: pagesize,
                keyword: keyword,
                page: page,
                cmd: 100
            };
            args.headers = {
                "Content-Type": "application/json"
            };
            cli.registerMethod("searchByName", urls.searchbyname, "GET");
            cli.methods.searchByName(args, function(data, response) {
                if (response.statusCode !== 200) {
                    deferred.reject(new Error(response.statusMessge));
                } else {
                    deferred.resolve(JSON.parse(data));
                }
            });
            return deferred.promise;
        },
        complete: function(keyword) {
            var deferred = Q.defer();
            if (typeof(keyword) === "undefined") {
                throw new Error("keyword must be not empty");
            }
            var args = {};
            args.parameters = {
                keyword: keyword,
                cmd: 302
            };
            args.headers = {
                "Content-Type": "application/json"
            };
            cli.registerMethod("completeJIT", urls.complete, "GET");
            cli.methods.completeJIT(args, function(data, response) {
                if (response.statusCode !== 200) {
                    deferred.reject(new Error(response.statusMessge));
                } else {
                    deferred.resolve(JSON.parse(data));
                }
            });
            return deferred.promise;
        },
        getsonginfo: function(hash) {
            var deferred = Q.defer();
            if (typeof(hash) === "undefined") {
                throw new Error("hash value must be not empty");
            }
            var args = {};
            args.parameters = {
                acceptMap3: 1,
                key: md5(hash + "kgcloud"),
                hash: hash,
                pid: 6,
                cmd: 3
            };
            args.headers = {
                "Content-Type": "application/json"
            };
            cli.registerMethod("getsong", urls.mp3, "GET");
            cli.methods.getsong(args, function(data, response) {
                if (response.statusCode !== 200) {
                    deferred.reject(new Error("error" + response.statusMessge));
                } else {
                    deferred.resolve(JSON.parse(data));
                }
            });
            return deferred.promise;
        }
    };
})();

