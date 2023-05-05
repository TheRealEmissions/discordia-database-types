import { DocumentConstructor } from "../Types/DocumentConstructor.js";
import { Schema } from "../Types/SchemaType.js";
import { SearchQuery } from "../Types/SearchQuery.js";
import { Document } from "./Document.js";
export declare abstract class Model<T extends Schema> {
    getSchema(): object;
    getSchemaName(): string;
    findAll(query?: SearchQuery<T>): Promise<Document<Required<Schema & T>>[]>;
    findAllAndDelete(query?: SearchQuery<T>): Promise<Document<Required<Schema & T>>[]>;
    findAllAndUpdate(query: SearchQuery<T> | undefined, data: Partial<DocumentConstructor<T>>): Promise<Document<Required<Schema & T>>[]>;
    replaceAll(query: SearchQuery<T> | undefined, data: DocumentConstructor<T>): Promise<Document<Required<Schema & T>>[]>;
    findOne(query: SearchQuery<T>): Promise<Document<Required<Schema & T>> | null>;
    findOneAndDelete(query: SearchQuery<T>): Promise<Document<Required<Schema & T>> | null>;
    findOneAndUpdate(query: SearchQuery<T>, data: DocumentConstructor<T>): Promise<Document<Required<Schema & T>> | null>;
    replaceOne(query: SearchQuery<T>, data: DocumentConstructor<T>): Promise<Document<Required<Schema & T>>>;
    new(data: DocumentConstructor<T>): Document<Required<Schema & T>>;
    create(data: DocumentConstructor<T>): Promise<Document<Required<Schema & T>>>;
    createMany(data: DocumentConstructor<T>[]): Promise<Document<Required<Schema>>[]>;
    deleteOne(query: SearchQuery<T>): Promise<Document<Required<Schema>>>;
    deleteMany(query: SearchQuery<T>): Promise<Document<Required<Schema>>[]>;
    updateOne(query: SearchQuery<T>, data: Partial<DocumentConstructor<T>>): Promise<Document<Required<Schema>>>;
    updateMany(query: SearchQuery<T>, data: Partial<DocumentConstructor<T>>): Promise<Document<Required<Schema>>[]>;
    count(query?: SearchQuery<T>): Promise<number>;
    exists(query: SearchQuery<T>): Promise<boolean>;
}
