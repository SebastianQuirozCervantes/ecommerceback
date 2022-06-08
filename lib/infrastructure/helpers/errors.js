export class InvalidUserError extends Error {
    constructor(msg, path, type = 'invalid') {
      super(msg);
      this.status = 400;
      this.name = 'InvalidPropertyError';
      this.path = path;
      this.type = type;
    }
  }

export class UnauthorizedError extends Error {
    constructor(msg, path, type) {
      super(msg);
      this.status = 401;
      this.name = 'UnauthorizedError';
      this.path = path;
      this.type = type;
    }
}

export class ForbiddenError extends Error {
  constructor(msg, path, type) {
    super(msg);
    this.status = 403;
    this.name = 'ForbiddenError';
    this.path = path;
    this.type = type;
  }
}