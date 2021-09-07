import {
  createApplication,
  getApplication,
  getApplications,
  getAuditionPostApplications,
} from '../services/application.services.js';
import { ErrorResponse } from '../../utils/errorResponse.js';

async function httpCreateApplication(req, res) {
  const alreadyApplied = await getApplication({
    auditionPostId: req.body.auditionPostId,
    applicantId: req.user._id,
  });
  if (alreadyApplied) throw new ErrorResponse('you have already applied', 400);

  return res.status(201).json(createApplication(req.body, req.user._id));
}

async function httpGetApplications(req, res) {
  return res.status(200).json(await getApplications());
}

async function httpGetAuditionPostApplications(req, res) {
  return res
    .status(200)
    .json(await getAuditionPostApplications(req.params.auditionPostId));
}

async function httpGetApplication(req, res) {
  const application = await getApplication({ _id: req.params.id });
  if (!application) {
    throw new ErrorResponse('Application does not exist', 404);
  }
  return res.status(200).json(application);
}

export {
  httpCreateApplication,
  httpGetApplications,
  httpGetAuditionPostApplications,
  httpGetApplication,
};
