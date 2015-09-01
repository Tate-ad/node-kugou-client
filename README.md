node-kugou-client
================

1. install

    `npm install node-kugou-client`

2. useage

    ```
    var kugou = require("kugou");
    kugou.search("jiaju").then(function(data){
        console.log(JSON.parse(data));
    }).
    catch(function(error){
        console.log(error)
    })
    ```

3. methods

    ```
    kugou.search("jiaju")
    kugou.complete("jiaju")
    kugou.getinfo("F9C5D096E393DBC017CBED9815E37685")
    ```
