'use server';

import prisma from '../db';

export const getUsers = async () => prisma.user.findMany();

export const getUser = async (email: string) =>
  prisma.user.findUnique({
    where: {
      email,
    },
  });
