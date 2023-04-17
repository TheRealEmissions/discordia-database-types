import { Schema } from "../../Types/SchemaType";
import { IDatabase } from "../IDatabase";
import MYSQL from "mysql2/promise";
export declare class MySQL implements IDatabase<Schema> {
    constructor();
    private host;
    setHost(host: string): void;
    private user;
    setUser(user: string): void;
    private password;
    setPassword(password: string): void;
    private database;
    setDatabase(database: string): void;
    private waitForConnections;
    setWaitForConnections(waitForConnections: boolean): void;
    private connectionLimit;
    setConnectionLimit(connectionLimit: number): void;
    private queueLimit;
    setQueueLimit(queueLimit: number): void;
    private maxIdle;
    setMaxIdle(maxIdle: number): void;
    private idleTimeout;
    setIdleTimeout(idleTimeout: number): void;
    private connection;
    getConnection(): MYSQL.Pool;
    private setConnection;
    connect(): Promise<void>;
}
