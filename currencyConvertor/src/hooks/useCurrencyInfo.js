import {useEffect, useState} from "react";
function useCurrencyInfo(currency) {
    useEffect(() => {

        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`);

    },[]);
}
