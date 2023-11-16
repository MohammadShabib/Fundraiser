import React, { createContext, useState, useContext } from 'react';

const MoneyRaisedContext = createContext();

export const useMoneyRaised = () => {
    return useContext(MoneyRaisedContext);
};

export const MoneyRaisedProvider = ({ children }) => {
    const [totalMoneyRaised, setTotalMoneyRaised] = useState(0);
    const [totalMoney, setTotalMoney] = useState(0);
    const increaseMoney = (amount) => {
        setTotalMoney(amount);
    };

    const increaseMoneyRaised = (amount) => {
        setTotalMoneyRaised(totalMoneyRaised + amount);
    };

    const decreaseMoneyRaised = (amount) => {
        setTotalMoneyRaised(totalMoneyRaised - amount);
    };

    return (
        <MoneyRaisedContext.Provider value={{ totalMoneyRaised, increaseMoneyRaised, decreaseMoneyRaised, totalMoney, setTotalMoney }}>
            {children}
        </MoneyRaisedContext.Provider>
    );
};
