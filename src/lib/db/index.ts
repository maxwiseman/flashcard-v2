import { drizzle } from "drizzle-orm/planetscale-serverless";
import { connect } from "@planetscale/database";
import "dotenv/config";
import * as computers from "./schema/computers";
import * as auth from "./schema/auth";

// create the connection
const connection = connect({
  url: process.env.DATABASE_URL!,
});

export const db = drizzle(connection, { schema: { ...auth, ...computers } });
