import type { ErrorDto } from "@api";

export class ErrorHelper {
  static isErrorCode = (error: ErrorDto, code: string) => {
    return error.code === code;
  };

  static containsError = (
    errors: ErrorDto[] | null | undefined,
    code: string
  ) => {
    return (errors || []).findIndex((e) => e.code === code) !== -1;
  };
}
