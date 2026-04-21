import { Hono } from 'hono';
import { PrismaClient } from './generated/prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';
import { decode, sign, verify } from 'hono/jwt'
// Define the env bindings for Cloudflare Workers
const app = new Hono<{
  Bindings: {
    ACCELERATE_URL: string;
  },
  Variables: {
    prisma: any
  }
}>();

app.use('*', async (c, next) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.ACCELERATE_URL,
  }).$extends(withAccelerate());
  c.set('prisma', prisma);
  await next();
});

app.post('/api/v1/signup', async (c) => {
  const prisma = c.get('prisma');

  const body = await c.req.json();

  const user = await prisma.user.create({
    data: {
      email: body.email,
      name: body.name,
      password: body.password
    }
  });

  const mysecert = "medium-blog-pool"
  const token = await sign({ id: user.id }, mysecert)

  return c.json({ jwt: token });
});

app.post('/api/v1/signin', (c) => {
  return c.text('signin route');
});

app.get('/api/v1/blog/:id', (c) => {
  const id = c.req.param('id');
  console.log(id);
  return c.text('get blog route');
});

app.post('/api/v1/blog', (c) => {
  return c.text('signin route');
});

app.put('/api/v1/blog', (c) => {
  return c.text('signin route');
});

export default app;
