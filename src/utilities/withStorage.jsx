import React, { useEffect, useState } from "react";
import { getStorage, removeStorage, setStorage } from "./utility";

export default function withLocalStorage(WrappedComp) {
    function HOC(props) {
        const [isLocalStorage, setIsLocalStorage] = useState(true);

        const checkIsLocalStorage = () => {
            const testKey = "test";
            try {
                setStorage(testKey, testKey);
                removeStorage(testKey);
                setIsLocalStorage(true);
            } catch (error) {
                console.error(error);
                setIsLocalStorage(false);
            }
        };
        useEffect(() => {
            checkIsLocalStorage();
        }, []);

        const load = (key) => {
            if (isLocalStorage) {
                return getStorage(key);
            }
            return null;
        };

        const save = (key, data) => {
            if (isLocalStorage) {
                setStorage(key, data);
            }
        };

        const remove = (key) => {
            if (isLocalStorage) {
                removeStorage(key);
            }
        };

        return (
            <WrappedComp load={load} save={save} remove={remove} {...props} />
        );
    }

    return HOC;
}
