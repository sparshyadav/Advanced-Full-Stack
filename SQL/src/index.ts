import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://sparshyadavmrt:tqLP0R3Fmukv@ep-mute-sun-a1ekljgp.ap-southeast-1.aws.neon.tech/Sparsh?sslmode=require"
})

async function connect() {
    await client.connect();
}

connect();