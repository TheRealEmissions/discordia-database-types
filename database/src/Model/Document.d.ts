import { DocumentConstructor } from "../Types/DocumentConstructor";
import { Schema } from "../Types/SchemaType";
export declare class Document<T extends Schema> {
    data: Required<T>;
    private schemaName;
    private deleted;
    private outdated;
    constructor(data: Required<T>, schemaName: string);
    save(): Promise<Document<T>>;
    delete(): Promise<Document<T>>;
    overwrite(data: Partial<DocumentConstructor<T>>): this;
}
