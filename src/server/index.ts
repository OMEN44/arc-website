import express from "express";
import helmet from "helmet";
import compression from "compression";

const app = express();
app.use(helmet());
app.use(compression());

const frontendFiles = process.cwd() + "/dist";
app.use(express.static(frontendFiles));
app.get("/*", (_, res) => res.sendFile(frontendFiles + "/index.html"));

app.get("/api/", (_, res) => res.send("Hello from the API!"));

app.listen(8000, () => console.log("Listening at http://localhost:8000/api/"));
