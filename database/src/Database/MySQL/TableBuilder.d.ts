import { MySQL } from "./MySQL";
export declare class TableBuilder {
    private static tablesBuilt;
    private static getDataType;
    static build(cl: MySQL): Promise<void>;
}
