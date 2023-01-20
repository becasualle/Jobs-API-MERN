const getAllJobs = async (req, res) => {
  return res.send("getAllJobs");
};

const getJob = async (req, res) => {
  return res.send("getJob");
};

const createJob = async (req, res) => {
  return res.send("createJob");
};

const updateJob = async (req, res) => {
  return res.send("updateJob");
};

const deleteJob = async (req, res) => {
  return res.send("deleteJob");
};

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
