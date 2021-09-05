import JobModel from '../models/jobs.mongoose.js';

async function createJob(body, author) {
  return JobModel.create({
    ...body,
    employer,
  });
}

async function getJobs(filter) {
  return JobModel.find(filter).populate('employer', 'id fullName role email');
}

async function getJob(id) {
  return JobModel.findById(id).populate('employer', 'id fullName role email');
}

async function updateJob(id, body) {
  return JobModel.updateOne({ _id: id }, body);
}

async function deleteJob(id) {
  return JobModel.findByIdAndDelete(id);
}

async function deleteJobs() {
  return JobModel.deleteMany();
}

export { createJob, getJobs, getJob, updateJob, deleteJob, deleteJobs };
