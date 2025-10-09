/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
import { Hono, Next } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { env } from 'hono/adapter'

const app = new Hono()

// GET route for the root path
app.get('/', async (c) => {
	return c.json({ message: "Welcome to the API! Use POST to create users." })
})

// GET route to fetch all users
app.get('/users', async (c) => {
	try {
		const { DATABASE_URL } = env<{ DATABASE_URL: string }>(c)

		const prisma = new PrismaClient({
			datasourceUrl: DATABASE_URL,
		}).$extends(withAccelerate())

		const users = await prisma.user.findMany({
			select: {
				id: true,
				name: true,
				email: true
				// Excluding password for security
			}
		})

		return c.json({ users })
	} catch (error) {
		console.error("Error fetching users:", error)
		return c.json({ error: "Failed to fetch users" }, 500)
	}
})

// POST route to create a user
app.post('/', async (c) => {
	try {
		// Todo add zod validation here
		const body: {
			name: string;
			email: string;
			password: string
		} = await c.req.json()

		const { DATABASE_URL } = env<{ DATABASE_URL: string }>(c)

		const prisma = new PrismaClient({
			datasourceUrl: DATABASE_URL,
		}).$extends(withAccelerate())

		console.log("Creating user:", body.name, body.email)

		const user = await prisma.user.create({
			data: {
				name: body.name,
				email: body.email,
				password: body.password // In production, hash this password!
			},
			select: {
				id: true,
				name: true,
				email: true
			}
		})

		return c.json({ message: "User created successfully", user })
	} catch (error) {
		console.error("Error creating user:", error)
		return c.json({ error: "Failed to create user" }, 500)
	}
})

export default app