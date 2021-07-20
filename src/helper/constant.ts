type NumberValueType =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9";
type OperationsValueType = "+" | "-" | "*" | "/";
type OtherValueType = "." | "=" | "AC";
export type ValueType = NumberValueType | OperationsValueType | OtherValueType;

export type KindOfType = "number" | "operation" | "decimal" | "equal" | "clear";

export interface KeyValue {
  id: string;
  type: KindOfType;
  value: ValueType;
}

export const keyData: KeyValue[] = [
  {
    id: "zero",
    type: "number",
    value: "0",
  },
  {
    id: "one",
    type: "number",
    value: "1",
  },
  {
    id: "two",
    type: "number",
    value: "2",
  },
  {
    id: "three",
    type: "number",
    value: "3",
  },
  {
    id: "four",
    type: "number",
    value: "4",
  },
  {
    id: "five",
    type: "number",
    value: "5",
  },
  {
    id: "six",
    type: "number",
    value: "6",
  },
  {
    id: "seven",
    type: "number",
    value: "7",
  },
  {
    id: "eight",
    type: "number",
    value: "8",
  },
  {
    id: "nine",
    type: "number",
    value: "9",
  },
  {
    id: "add",
    type: "operation",
    value: "+",
  },
  {
    id: "subtract",
    type: "operation",
    value: "-",
  },
  {
    id: "multiply",
    type: "operation",
    value: "*",
  },
  {
    id: "divide",
    type: "operation",
    value: "/",
  },
  {
    id: "decimal",
    type: "decimal",
    value: ".",
  },
  {
    id: "equals",
    type: "equal",
    value: "=",
  },
  {
    id: "clear",
    type: "clear",
    value: "AC",
  },
];
