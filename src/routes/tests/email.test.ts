import request from "supertest";
import app from "../../app";
import { expect, it } from '@jest/globals';
// import { IUserDocument, User } from "../../models";

// INFO: Valid values

it('should know simple truths', async () => {
  expect(true).toEqual(!false);
  // await request(app)
  //   .post('/auth/signup')
  //   .send({ password, firstName, lastName })
  //   .expect(422);
});