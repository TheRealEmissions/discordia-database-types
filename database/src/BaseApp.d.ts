import Base from "ts-modular-bot-file-design";
import { Dependency } from "ada-types";
import Events from "ts-modular-bot-addon-events-types";
import { Database } from "./Enums/Database";
import { Model } from "./Model/Model";
import { Schema, SchemaType } from "./Types/SchemaType";
import { DatabaseSchema } from "./Decorators/DatabaseSchema";
declare abstract class BaseApp extends Base {
    constructor();
    type: Dependency;
    name: string;
    load: boolean;
    private static database;
    private static getDatabaseFromConfig;
    static getDatabase(): Database;
    private static schemas;
    static addSchema<T extends Schema>(name: string, model: SchemaType<T>): void;
    static getSchema<T extends Schema>(name: string): SchemaType<T>;
    static getSchemas(): Map<string, SchemaType<Schema>>;
    abstract init(): Promise<void>;
    get Schema(): typeof DatabaseSchema;
    get Model(): typeof Model;
    static Events: typeof Events;
    getEvents(): import("ts-modular-bot-addon-events-types/events/src/App").default;
    getDependencies(): Dependency[];
}
export default BaseApp;
