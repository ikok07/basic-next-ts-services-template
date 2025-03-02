import { pgTable } from "drizzle-orm/pg-core/table";
import { uuid } from "drizzle-orm/pg-core";
import { v4 as uuidv4 } from "uuid";

export const testScheme = pgTable("test", {
  id: uuid()
    .primaryKey()
    .$default(() => uuidv4()),
});
