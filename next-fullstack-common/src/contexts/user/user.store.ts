import { atom, selector } from "recoil";
import { persistAtom } from "../persist";

export interface UserState {
  id: number;
  displayName: string;
  authenticated: boolean;
}

export const key = "user";
export const defaultState: UserState = {
  id: 0,
  displayName: "fff",
  authenticated: false,
};

export const userState = atom<UserState>({
  key,
  default: defaultState,
  effects_UNSTABLE: [persistAtom],
});
