import mongoose from "mongoose";

const emailSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        type: {
            type: Integer,
            required: true,
            trim: true,
            lowercase: true,
        },
    },
    { collection: "emails" },
    { bufferTimeoutMS: 1000 }
);

const Emails = mongoose.model("emails", emailSchema);

export default Emails;
