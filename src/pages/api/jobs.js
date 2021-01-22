const jobs = require('../../data/jobs.json')

const handler = (req, res) => {
  res.statusCode = 200;
  res.json(jobs);
};

export default handler;
