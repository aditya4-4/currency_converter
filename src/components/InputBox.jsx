import propTypes from "prop-types";
import { useId } from "react";

function InputBox({
  label,
  amount = 0,
  onAmountChange,
  selectCurrency = "usd",
  onCurrencyChange,
  currencyOptions = [],
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          className="text-black/40 mb-2 inline-block"
          htmlFor={amountInputId}
        >
          {label}
        </label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          id={amountInputId}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          disabled={amountDisable}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

InputBox.propTypes = {
  label: propTypes.string.isRequired,
  className: propTypes.string,
  amount: propTypes.number.isRequired,
  onAmountChange: propTypes.func,
  onCurrencyChange: propTypes.func.isRequired,
  currencyOptions: propTypes.array.isRequired,
  selectCurrency: propTypes.string.isRequired,
  amountDisable: propTypes.bool,
  currencyDisable: propTypes.bool,
};

export default InputBox;
