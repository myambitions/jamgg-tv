type FunctionType = (...args: any[]) => any;
type ActionCreatorsMapObject = { [actionCreator: string]: FunctionType };

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<
  A[keyof A]
>;

export interface Message {
  from: string;
  text: string;
  date: Date;
}

export interface Channel {
  value: number;
  img?: string;
  title: string;
}
