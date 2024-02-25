import React from "react";

export interface Subject {
  name: string;
  rawData: string;
}

export interface System {
  name: string;
  subjects: Subject[];
}

export interface SystemsContextType {
  systems: System[];
  subjects: Subject[];
}

export const SystemsContext = React.createContext<SystemsContextType>({
  systems: [],
  subjects: [],
});
