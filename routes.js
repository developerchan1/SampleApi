const todoList = require('./controller');

module.exports = function(app) {

    app.route('/api/getAllEmployeeData')
        .get(todoList.getAllData);

    app.route('/api/login')
        .post(todoList.employeeLogin);

};