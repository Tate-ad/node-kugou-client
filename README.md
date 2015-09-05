node-kugou-client
================

1. install

    `npm install node-kugou-client`

2. how to use

    ```javascript

    var kugou = require("node-kugou-client");

    kugou.search("jiaju").then(function(data){
        console.log(data);
    }).
    catch(function(error){
        console.log(error)
    })

    ```

3. methods

    ```javascript

    kugou.search("jiaju")
    kugou.complete("jiaju")
    kugou.getsonginfo("F9C5D096E393DBC017CBED9815E37685")

    ```
