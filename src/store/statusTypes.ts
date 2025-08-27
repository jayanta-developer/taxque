export enum STATUSES {
  LOADING = "loading",
  IDLE = "idle",
  ERROR = "error"
}

export interface LocationData {
  state: string;
  city: string;
  pin: string;
}
