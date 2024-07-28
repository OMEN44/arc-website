import express from "express";
import helmet from "helmet";
import compression from "compression";
// import cors from "cors";

const app = express();
// app.use(cors());
app.use(
    helmet({
        contentSecurityPolicy: {
            directives: {
                frameSrc: ["youtube.com", "www.youtube.com"],
            },
        },
    })
);
app.use(compression());

const frontendFiles = process.cwd() + "/dist";
app.use(express.static(frontendFiles));
app.use((req, res, next) => {
    if (!req.url.includes("api")) {
        res.sendFile(frontendFiles + "/index.html");
    } else next();
});

app.listen(8000, () => console.log("Listening at http://localhost:8000/api/"));
