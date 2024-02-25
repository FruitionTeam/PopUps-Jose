import express from "express";
import db from "../db/email-services.mjs";
import { ObjectId } from "mongodb";

const session = require("express-session");

const app = express();
const port = 8000;

app.get("/users", (req, res) => {
    const email = req.query.email;
    if (email) {
        db.getEmails(email)
            .then((email) => {
                res.status(200).json(email);
            })
            .catch(() => {
                res.status(404).json({ error: "email not found" });
            });
    } else {
        db.getEmails()
            .then((emails) => {
                res.status(200).json({ email_list: emails });
            })
            .catch((error) => {
                res.status(500).json({ error });
            });
    }
});

app.post("/signup", async (req, res) => {
    db.addEmail(req.body).then((error) => {
        if (error == 500) {
            return res.status(500).send("Unable to sign up");
        }
    });
});
