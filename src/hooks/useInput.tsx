import { useState } from "react";

export const useInput = (initialValue: string ) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: (e: unknown) => {
        setValue(e.target.value);
      },
    },
  };
};