import { HttpException, HttpStatus } from '@nestjs/common';

export const ErrorMessageHandler = (
  message: string,
  httpStatus: HttpStatus,
) => {
  throw new HttpException(message, httpStatus);
};
