import { errorType } from "../utils/static/errors";

export interface IError {
    message: string;
    state: boolean;
    type: errorType;
}