import ApplicationModel from '../models/application.mongoose.js';

async function createApplication(body, freelancerId) {
  return ApplicationModel.create({
    ...body,
    freelancerId,
  });
}

async function getApplications() {
  return ApplicationModel.find();
}

async function getJobApplications(jobId) {
  return ApplicationModel.find({ jobId: jobId });
}

async function getApplication(filter) {
  return ApplicationModel.findOne(filter);
}

async function updateApplication(id, body) {
  return ApplicationModel.updateOne({ _id: id }, body);
}

async function deleteApplication(id) {
  return ApplicationModel.findByIdAndDelete(id);
}

async function deleteApplications() {
  return ApplicationModel.deleteMany();
}
export {
  createApplication,
  getApplications,
  getJobApplications,
  getApplication,
  updateApplication,
  deleteApplication,
  deleteApplications,
};
