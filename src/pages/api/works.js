const filters = require('../../data/filters.json')

const handler = (req, res) => {
  res.statusCode = 200;
  res.json(filters.work_schedule);
};

export default handler;
