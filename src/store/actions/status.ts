export const LOADING = "LOADING";
export const DONE = "DONE";
export const SET_TAB = `SET_TAB`;
export const setCurrentTab = (payload: string) => ({ type: SET_TAB, payload });
