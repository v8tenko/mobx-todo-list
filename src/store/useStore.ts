import {RootContext, RootStore} from "./RootStore";
import {useContext} from "react";

export function useStore<T>(functor: ((state: RootStore) => T)): T {
    const root = useContext<RootStore>(RootContext)
    return functor(root)
}

