'use server';

import { revalidatePath } from 'next/cache';
import { auth } from '../auth';
import prisma from '../db';
import { postCreateValidator } from '../validator';

export const getAllFolders = async () =>
  prisma.folder.findMany({
    include: {
      _count: { select: { Post: true } },
    },
  });

export const getFolder = async (id: number) =>
  prisma.folder.findUnique({
    where: { id },
    include: {
      Post: true,
    },
  });

export const getPosts = async (folder: number) =>
  prisma.post.findMany({
    where: {
      folder,
    },
    include: {
      Folder: true,
    },
  });

export async function createPost(formData: FormData) {
  const session = await auth();
  if (!session?.user.id) throw new Error('Need Login!');

  formData.append('writer', session?.user.id);

  const formEntries = Object.fromEntries(formData.entries());
  // console.log('🚀 formEntries:', formEntries);
  const validate = postCreateValidator.safeParse(formEntries);

  if (!validate.success) throw validate.error;
  const data = validate.data;
  const rs = await prisma.post.create({
    data,
  });

  revalidatePath('/board');

  return rs;
}
