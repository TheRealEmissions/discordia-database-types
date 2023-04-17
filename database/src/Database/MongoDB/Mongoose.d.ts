import { Schema } from "../../Types/SchemaType.js";
import { IDatabase } from "../IDatabase.js";
import MongoDB from "mongoose";
import { SearchQuery } from "../../Types/SearchQuery.js";
import { DocumentConstructor } from "../../Types/DocumentConstructor.js";
type MongoSchema = Omit<Schema, "_id"> & {
    _id?: string | MongoDB.Types.ObjectId;
};
export declare class Mongoose implements IDatabase<Schema> {
    constructor();
    private uri;
    setUri(uri: string): void;
    private models;
    getModel<T extends MongoSchema>(modelName: string): MongoDB.Model<T>;
    connect(): Promise<void>;
    private transformQuery;
    findAll<T extends MongoSchema>(modelName: string, query?: SearchQuery<T>): Promise<object[]>;
    findAllAndDelete<T extends MongoSchema>(modelName: string, query?: SearchQuery<T>): Promise<object[]>;
    findAllAndUpdate<T extends MongoSchema>(modelName: string, query: SearchQuery<T>, data: DocumentConstructor<T>): Promise<object[]>;
    replaceAll<T extends MongoSchema>(modelName: string, query: SearchQuery<T>, data: DocumentConstructor<T>): Promise<object[]>;
    findOne<T extends MongoSchema>(modelName: string, query: SearchQuery<T>): Promise<object | null>;
    findOneAndDelete<T extends MongoSchema>(modelName: string, query: SearchQuery<T>): Promise<object | null>;
    findOneAndUpdate<T extends MongoSchema>(modelName: string, query: SearchQuery<T>, data: DocumentConstructor<T>): Promise<object | null>;
    replaceOne<T extends MongoSchema>(modelName: string, query: SearchQuery<T>, data: DocumentConstructor<T>): Promise<object | null>;
    create<T extends MongoSchema>(modelName: string, data: DocumentConstructor<T>): Promise<object>;
    createMany<T extends MongoSchema>(modelName: string, data: DocumentConstructor<T>[]): Promise<object[]>;
    updateOne<T extends MongoSchema>(modelName: string, query: SearchQuery<T>, data: DocumentConstructor<T>): Promise<object | null>;
    updateMany<T extends MongoSchema>(modelName: string, query: SearchQuery<T>, data: DocumentConstructor<T>): Promise<object[]>;
    deleteOne<T extends MongoSchema>(modelName: string, query: SearchQuery<T>): Promise<object | null>;
    deleteMany<T extends MongoSchema>(modelName: string, query: SearchQuery<T>): Promise<object[]>;
}
export {};
