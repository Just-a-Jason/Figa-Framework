import FigaScreen from "../Core/FigaScreen";

export type Constructor<T> = new (...args: any[]) => T;

export type RoutesMap = Record<string, Constructor<FigaScreen> | FigaScreen>;
