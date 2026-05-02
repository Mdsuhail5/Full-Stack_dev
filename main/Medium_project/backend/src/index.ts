import { Hono } from "hono";
import { PrismaClient } from "./generated/prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from 'hono/jwt'
type Bindings = {
  DATABASE_URL: string;
};

type Variables = {
  prisma: PrismaClient;
};

const app = new Hono<{ Bindings: Bindings; Variables: Variables }>();

app.post('/api/v1/user/signup', async (c) => {
  const body = await c.req.json()
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  } as any).$extends(withAccelerate())

  try {
    const user = await (prisma as any).user.create({
      data: {
        email: body.email,
        name: body.name,
        password: body.password
      }
    })
    const JWT_SECRET = 'mypool-app'
    const token = await sign({ id: user.id }, JWT_SECRET)
    return c.json({ jwt: token })
  } catch (e: any) {
    return c.json({ error: e.message }, 500)
  }
})

app.post("/api/v1/user/signin", (c) => {
  return c.text("Hello from signin endpoint");
});

app.post("/api/v1/blog", (c) => {
  return c.text("Hello from postendpoint all the blogs");
});

app.put("/api/v1/blog", (c) => {
  return c.text("Hello from blogs put endpoint");
});

app.get('/api/v1/blog/bulk', (c) => {
  return c.text('Hello form all the bulk blogs')
})

app.get('/api/v1/blog/:id', (c) => {
  return c.text('Hello from blog the id')
})
export default app
