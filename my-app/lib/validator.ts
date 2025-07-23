import { z, ZodType } from 'zod';

export type zinfer<T extends ZodType> = z.infer<T>;

export const credentialValidator = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const UserValidator = {
  id: z.string().transform(Number),
  name: z.string().min(1),
  image: z.nullable(z.string()),
};
export const userUpdateValidator = z.object(UserValidator);

const PostCreateValidator = {
  title: z.string().min(1),
  folder: z.string().transform(Number),
  writer: z.string().transform(Number),
  content: z.nullable(z.string()),
};
export const postCreateValidator = z.object(PostCreateValidator);
