import { useAppSelector } from "@src/store/hooks";

export const useAuth = () => {
  const { user, isLoading } = useAppSelector((store) => store.userReducer);
  return !!(!isLoading && user.name);
};

export const useLoading = () => {
  const userDataLoading = useAppSelector(
    (store) => store.userReducer.isLoading,
  );
  return userDataLoading;
};
