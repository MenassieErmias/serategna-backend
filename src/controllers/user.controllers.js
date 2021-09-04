import {
  createUser,
  deleteUser,
  deleteUsers,
  getUsers,
  loginUser,
} from '../../services/user/auth.js';

async function httpGetUsers(req, res) {
  res.status(200).json(await getUsers());
}

async function httpDeleteUser(req, res) {
  res.status(200).json(await deleteUser(req.params.id));
}

async function httpDeleteUsers(req, res) {
  res.status(200).json(await deleteUsers());
}

async function httpCreateUser(req, res) {
  await createUser(req.body);
  return res
    .status(201)
    .json(
      'A confirmation mail has been sent to you, please confirm your email address'
    );
}

async function httpLoginUser(req, res) {
  return res.status(200).json(await loginUser(req.body));
}

export {
  httpCreateUser,
  httpLoginUser,
  httpDeleteUser,
  httpDeleteUsers,
  httpGetUsers,
};
