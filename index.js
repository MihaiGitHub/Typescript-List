"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1["default"].get(url).then(function (response) {
    // tell typescript what type of data this is
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var finished = todo.completed;
    console.log("\n        The TO DO with ID: ".concat(id, "\n        Has a title of: ").concat(title, "\n        Is it finished? ").concat(finished, "\n    "));
});
