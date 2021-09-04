import UserModel from '../../models/user.mongoose.js';
import { ErrorResponse } from '../../utils/errorResponse.js';
import {
  generatePasswordHash,
  validatePassword,
} from '../../utils/hashpassword.js';
import { generateJWT } from '../../utils/generateJWT.js';

async function getUser(filter, projection = {}) {
  return UserModel.findOne(filter, projection);
}

async function getUsers() {
  return UserModel.find();
}

async function deleteUser(id) {
  await UserModel.findByIdAndDelete(id);
  return {
    message: 'Success',
  };
}

async function deleteUsers() {
  return UserModel.deleteMany();
}

async function createUser(user) {
  const emailExists = getUser({ email: user.email });
  if (emailExists) throw new ErrorResponse('This email address is in use', 400);
  user.password = await generatePasswordHash(user.password);
  return UserModel.create(user);
}

async function loginUser({ email, password }) {
  const user = await getUser({ email });

  if (!user) throw new ErrorResponse('User not found', 404);
  const matchPassword = await validatePassword(password, user.password);

  if (!matchPassword) throw new ErrorResponse('Wrong credentials', 400);

  const token = await generateJWT(user._id);
  return {
    id: user._id,
    fullName: user.fullName,
    email: user.email,
    role: user.role,
    phoneNumber: user.phoneNumber,
    token,
  };
}

export { getUser, getUsers, deleteUser, deleteUsers, createUser, loginUser };
