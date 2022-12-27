import joi from "joi";

export const loginSchema = joi.object({
  email: joi
    .string()
    .email({ tlds: { allow: false } })
    .required(),
  password: joi
    .string()
    .min(4)
    .message("Password should be bigger than 4 symbols")
    .max(20)
    .message("Password should be less than 20 symbols")
    .required(),
});

export const registerSchema = joi.object({
  email: joi
    .string()
    .email({ tlds: { allow: false } })
    .required(),
  password: joi
    .string()
    .min(4)
    .message("Password should be bigger than 4 symbols")
    .max(20)
    .message("Password should be less than 20 symbols")
    .required(),
  name: joi
    .string()
    .min(4)
    .message("Name should be bigger than 4 symbols")
    .max(20)
    .message("Name should be less than 20 symbols")
    .required(),
});

export const createNewRoomSchema = joi.object({
  roomName: joi
    .string()
    .min(4)
    .message("The name of room shouldn`t be less than 4 symbols")
    .max(20)
    .message("The name of room shouldn`t be more than 20 symbols")
    .required(),
});
