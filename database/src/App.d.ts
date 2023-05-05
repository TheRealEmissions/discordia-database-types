import BaseApp from "./BaseApp.js";
import { IDatabase } from "./Database/IDatabase.js";
import { Schema } from "./Types/SchemaType.js";
declare class App extends BaseApp {
    constructor();
    private static databaseClass;
    static getDatabaseClass(): IDatabase<Schema>;
    init(): Promise<void>;
    private loadMongoDB;
}
export default App;
