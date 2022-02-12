import { errorType } from "../utils/errors";

export interface IError {
    message: string;
    state: boolean;
    type: errorType;
}