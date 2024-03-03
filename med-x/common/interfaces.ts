import React from "react";

export interface Subject {
  name: string;
  rawData: string;
}

export interface System {
  name: string;
  subjects: string[];
}

export interface SystemsContextType {
  systems: System[];
  subjects: Subject[];
  refreshData: Function;
}

export const SystemsContext = React.createContext<SystemsContextType>({
  systems: [],
  subjects: [],
  refreshData: () => console.warn("refreshData not implemented"),
});
