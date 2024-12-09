import jwt from "jsonwebtoken";

export const getToken = (email, user) => {
  const token = jwt.sign(
    { identifier: user._id },
    process.env.PASSPORT_JWT_SECRETKEY
  );
  return token;
};
