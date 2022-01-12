import { useContext } from "react";
import { DatabaseContext } from "../context/DatabaseContext";

export default function useDatabase() {
  const db = useContext(DatabaseContext);
  return db;
}
