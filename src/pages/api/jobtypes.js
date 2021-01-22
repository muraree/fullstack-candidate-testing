const filters = require('../../data/filters.json')

const handler = (req, res) => {
    res.statusCode = 200
    res.json(filters.job_type)
}

export default handler