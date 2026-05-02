import { PrismaClient } from "../../generated/prisma/client"

interface Env {
	DATABASE_URL: string
}

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		if (!env.DATABASE_URL || !env.DATABASE_URL.startsWith("prisma://")) {
			return new Response(
				`Invalid DATABASE_URL format. Received prefix: ${String(env.DATABASE_URL).slice(0, 20)}`,
				{ status: 500 }
			)
		}

		const prisma = new PrismaClient({
			accelerateUrl: env.DATABASE_URL,
		})

		try {
			const response = await prisma.users.create({
				data: {
					email: "test" + Math.random() + "@example.com",
					password: "test-password"
				}
			})

			console.log(JSON.stringify(response))
			return new Response(`User created: ${response.id}`)
		} catch (e: any) {
			const details = {
				name: e?.name,
				message: e?.message,
				code: e?.code,
				stack: e?.stack,
				cause: e?.cause,
			}
			console.error("Prisma error", JSON.stringify(details))
			return new Response(JSON.stringify(details, null, 2), {
				status: 500,
				headers: { "content-type": "application/json" },
			})
		}
	},
}
