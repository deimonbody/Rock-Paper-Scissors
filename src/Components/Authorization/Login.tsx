import { joiResolver } from "@hookform/resolvers/joi";
import { PATHS } from "@src/common/enum";
import { ILogin } from "@src/common/interface";
import { loginSchema } from "@src/common/schemas";
import { useUserActions } from "@src/store/actions";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import styles from "./style.module.scss";

export const Login = () => {
  const { getAsyncUserAction } = useUserActions();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILogin>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: joiResolver(loginSchema),
  });

  const login = (data: ILogin) => {
    getAsyncUserAction({ email: data.email, password: data.password });
    reset();
  };
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Login</p>
      <div className={styles.inputsWrapper}>
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
      <button onClick={handleSubmit(login)} className={styles.button}>
        Enter
      </button>
      <p className={styles.register}>
        Haven`t the account yet?{" "}
        <Link to={PATHS.REGISTER}>
          <span className={styles.register__link}>Registare it.</span>
        </Link>
      </p>
    </div>
  );
};
