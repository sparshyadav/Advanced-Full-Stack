import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://sparshyadavmrt:tqLP0R3Fmukv@ep-mute-sun-a1ekljgp.ap-southeast-1.aws.neon.tech/Sparsh?sslmode=require"
})

async function connect() {
    await client.connect();
}
connect();

async function createPost() {
    const query = `CREATE TABLE posts(
        id SERIAL PRIMARY KEY,
        postname varchar(50) UNIQUE NOT NULL
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE CURRENT_TIMESTAMP
    )`;

    let result = await client.query(query);
    console.log(result);
}
