import { PrismaClient } from './src/generated/prisma/client';
new PrismaClient({ DOES_NOT_EXIST: 1 });
