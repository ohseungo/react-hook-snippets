import { ChangeEvent, useState } from "react";

const useInput = (initialValue: any, validator?: (value: any) => boolean) => {
  const [value, setValue] = useState<any>(initialValue);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    let isUpdatedValueValid = true;
    if (validator) {
      isUpdatedValueValid = validator(event.target.value);
    }
    if (isUpdatedValueValid) setValue(event.target.value);
  };

  return { value, onChange };
};

export default useInput;
