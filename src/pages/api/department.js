const filters = require('../../data/filters.json')

const handler = (req, res) => {
    res.statusCode = 200
    res.json(filters.department)
}
  
export default handler