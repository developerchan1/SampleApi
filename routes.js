'use strict';

module.exports = function(app) {
    var todoList = require('./controller');

    app.route('/api/getAllEmployeeData')
        .get(todoList.getAllData);

    app.route('/api/login')
        .post(todoList.employeeLogin);
    
};