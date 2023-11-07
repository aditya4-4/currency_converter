import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchCurrencyData() {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        );
        const data = await response.json();
        setData(data[currency]);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    console.log("I am useCurrency hook");
    fetchCurrencyData();
  }, [currency]);


  return data;
}

export default useCurrencyInfo;
