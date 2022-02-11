enum errors {
  INVALID_HASH = "Invalid hash",
  NOT_ALLOWED = "Not allowed",
  INVALID_REQUEST = "Invalid request",
  INVALID_PARAMS = "Invalid request params",
  INPUT_TOO_SHORT = "Input too short",

  INTERNAL = "Internal Error",
  NONE = "",
}

export type errorType =
  | errors.NONE
  | errors.INTERNAL
  | errors.INPUT_TOO_SHORT
  | errors.INVALID_HASH
  | errors.INVALID_PARAMS
  | errors.INVALID_REQUEST
  | errors.NOT_ALLOWED;

export default errors;
