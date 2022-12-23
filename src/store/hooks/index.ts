import { TypedUseSelectorHook, useSelector } from "react-redux";

import { reducer } from "../store";

export type RootState = ReturnType<typeof reducer>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
