import { createContext } from "react";
import * as SQLite from "expo-sqlite";

const DatabaseContext = createContext(null);
const { Provider } = DatabaseContext;

const db = SQLite.openDatabase("db.db");

// payments table
db.transaction((tx) => {
  tx.executeSql(
    "create table if not exists payments (id integer primary key not null, client varchar(255), amount decimal(10,2), description text, datetime datetime);"
  );
});

// notes table
db.transaction((tx) => {
  tx.executeSql(
    "create table if not exists notes (id integer primary key not null, title varchar(255), body text, datetime datetime);"
  );
});

const DatabaseProvider = ({ children }) => {
  return <Provider value={db}>{children}</Provider>;
};

export { DatabaseContext, DatabaseProvider };
