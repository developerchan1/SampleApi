exports.ok = (values, res) => {
  const data = {
      'status': 200,
      'values': values
  };
  res.json(data);
  res.end();
};

exports.notFound = (res) => {
  const data = {
      'status': 404,
      'error': "Resource not found"
  };
  res.status(404).json(data);
  res.end();
};

exports.error = (reason, res) => {
  const data = {
      'status': 400,
      'reason': reason
  };
  res.status(400).json(data);
  res.end();
};