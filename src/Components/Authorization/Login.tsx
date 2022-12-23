import { joiResolver } from "@hookform/resolvers/joi";
import { PATHS } from "@src/common/enum";
import { ILogin } from "@src/common/interface";
import { loginSchema } from "@src/common/schemas";
import { useAuth } from "@src/hooks";
import { useUserActions } from "@src/store/actions";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import styles from "./style.module.scss";

export const Login = () => {
  const { getAsyncUserAction } = useUserActions();

  const isAuth = useAuth();
  const navigate = useNavigate();

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

  useEffect(() => {
    if (isAuth) {
      navigate(PATHS.MAIN_PAGE);
    }
  }, [isAuth]);

  const login = (data: ILogin) => {
    getAsyncUserAction({ email: data.email, password: data.password });
    reset();
  };
  // if (isLoading) return <Loader />;
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Login</p>
      <div className={styles.inputsWrapper}>
        <div className={styles.inputBlock}>
          <input
            {...register("email")}
            className={styles.inputBlockInput}
            placeholder="email:"
          />
          {errors && errors.email && (
            <p className={styles.inputBlockError}>{errors.email.message}</p>
          )}
        </div>
        <div className={styles.inputBlock}>
          <input
            {...register("password")}
            className={styles.inputBlockInput}
            placeholder="password:"
          />
          {errors && errors.password && (
            <p className={styles.inputBlockError}>{errors.password.message}</p>
          )}
        </div>
      </div>
      <button onClick={handleSubmit(login)} className={styles.button}>
        Enter
      </button>
      <p className={styles.register}>
        Haven`t the account yet?{" "}
        <Link to={PATHS.REGISTER}>
          <span className={styles.registerLink}>Registare it.</span>
        </Link>
      </p>
    </div>
  );
};
