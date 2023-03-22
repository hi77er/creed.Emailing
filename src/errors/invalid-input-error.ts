import { ValidationError } from "express-validator";
import {
  BaseCustomError,
  INVALID_INPUT_ERR_MSG
} from ".";
import {
  SerializedErrorField,
  SerializeErrorOutput
} from "./types/serialized-error-output";

export type InvalidInputConstructorErrorsParam = ValidationError[];

export class InvalidInputError extends BaseCustomError {
  private errorMessage = INVALID_INPUT_ERR_MSG;
  protected statusCode = 422;
  protected errors: ValidationError[] | undefined;

  constructor(errors?: InvalidInputConstructorErrorsParam) {
    super(INVALID_INPUT_ERR_MSG);

    this.errors = errors;

    Object.setPrototypeOf(this, InvalidInputError.prototype);
  }

  getStatusCode() { return this.statusCode; };
  serializeErrorOutput(): SerializeErrorOutput { return this.parseValidationErrors(); };

  private parseValidationErrors(): SerializeErrorOutput {
    const parseErrors: SerializedErrorField = {};

    if (this.errors && this.errors.length > 0) {
      this.errors.forEach((error) => {
        if (parseErrors[error.param]) {
          parseErrors[error.param].push(error.msg);
        } else {
          parseErrors[error.param] = [error.msg];
        }
      });
    }

    return {
      errors: [{
        message: this.errorMessage,
        fields: parseErrors
      }]
    };
  }
};