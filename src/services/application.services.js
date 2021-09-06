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

export {
  createApplication,
  getApplications,
  getJobApplications,
  getApplication,
};
