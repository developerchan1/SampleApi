'use strict';

exports.ok = function(values, res) {
  var data = {
      'status': 200,
      'values': values
  };
  res.json(data);
  res.end();
};

exports.notFound = function(res) {
  var data = {
      'status': 404,
      'error': "Resource not found"
  };
  res.status(404).json(data);
  res.end();
};

exports.error = function(reason, res) {
  var data = {
      'status': 400,
      'reason': reason
  };
  res.status(400).json(data);
  res.end();
};