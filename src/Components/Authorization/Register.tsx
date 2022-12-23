import { joiResolver } from "@hookform/resolvers/joi";
import { PATHS } from "@src/common/enum";
import { IRegister } from "@src/common/interface";
import { registerSchema } from "@src/common/schemas";
import { useUserActions } from "@src/store/actions";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import styles from "./style.module.scss";

const Register = () => {
  const { signUpAsyncActions } = useUserActions();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IRegister>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
    resolver: joiResolver(registerSchema),
  });
  const registerHandler = (data: IRegister) => {
    const { email, password, name } = data;
    signUpAsyncActions({ email, password, name });
    reset();
  };
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Register</p>
      <div className={styles.inputsWrapper}>
        <div className={styles.inputBlock}>
          <input
            {...register("name")}
            className={styles.inputBlock__input}
            placeholder="name:"
          />
          {errors && errors.name && (
            <p className={styles.inputBlock__error}>{errors.name.message}</p>
          )}
        </div>
        <div className={styles.inputBlock}>
          <input
            {...register("email")}
            className={styles.inputBlock__input}
            placeholder="email:"
          />
          {errors && errors.email && (
            <p className={styles.inputBlock__error}>{errors.email.message}</p>
          )}
        </div>
        <div className={styles.inputBlock}>
          <input
            {...register("password")}
            className={styles.inputBlock__input}
            placeholder="password:"
          />
          {errors && errors.password && (
            <p className={styles.inputBlock__error}>
              {errors.password.message}
            </p>
          )}
        </div>
      </div>
      <button onClick={handleSubmit(registerHandler)} className={styles.button}>
        Register
      </button>
      <p className={styles.register}>
        Already have the accoutn ?{" "}
        <Link to={PATHS.LOGIN}>
          <span className={styles.register__link}>Login</span>
        </Link>
      </p>
    </div>
  );
};

export default Register;
