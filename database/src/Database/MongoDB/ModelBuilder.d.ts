import Mongoose from "mongoose";
import { Schema } from "../../Types/SchemaType.js";
export declare class ModelBuilder {
    static models: Map<string, Mongoose.Model<Schema, {}, {}, {}, Mongoose.Document<unknown, {}, Schema> & Omit<Schema & Required<{
        _id: string;
    }>, never>, any>>;
    static build(): void;
}
