import jobs from '../../data/jobs'

export default async (req, res) => {
  res.statusCode = 200
  const { sort, sortOrder, search } = req.query;
  const fn = {
    asc: (a, b) => a[sort].length - b[sort].length,
    desc: (a, b) => b[sort].length - a[sort].length,
  };
  // @todo: implement filters and search
  // @todo: implement automated tests

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  const result = await new Promise((resolve) => setTimeout(() => {
    let totalJobs = jobs;
    totalJobs = jobs
      .filter((job) => job.name.toLowerCase().includes(search.toLowerCase()))
      .sort(fn[sortOrder]);

    resolve(totalJobs)
  }, 1000 * Math.random()))

  res.json({ jobs: result })
}
