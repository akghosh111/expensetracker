import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { expenseRoute } from './routes/expenses'
import { authRoute } from './routes/auth'
const app = new Hono()

app.use(logger())


const apiRoutes= app.basePath("/api").route("/expenses", expenseRoute).route("/", authRoute)

export default app;

export type ApiRoutes = typeof apiRoutes