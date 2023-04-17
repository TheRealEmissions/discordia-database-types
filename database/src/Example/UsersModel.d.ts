import { Model } from "../Model/Model.js";
import { Schema, SchemaType } from "../Types/SchemaType.js";
interface UserSchema extends Schema {
    type?: string;
    another?: number;
    wow: boolean;
}
export declare class UsersModel extends Model<UserSchema> {
    static x: SchemaType<UserSchema>;
}
export {};
