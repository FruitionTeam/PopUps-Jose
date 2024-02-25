import mongoose from "mongoose";
import model from "../models/email-mvp-db.js";

import dotenv from "dotenv";

mongoose.set("debug", true);
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    // "mongodb://localhost:27017/users",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);
//.catch((error) => console.log(error));

function addEmail(email) {
    const emailToAdd = new model(email);
    const promise = emailToAdd.save().catch((e) => {
        return 500;
    });
    return promise;
}

function getEmails(email) {
    let promise;
    if (email) {
        promise = findEmail(email);
    } else {
        promise = userModel.find();
    }
    return promise;
}

async function findEmail(email) {
    return model.findOne({ email: email }).then((user) => {
        return user;
    });
}

export default {
    addEmail,
    getEmails,
};
