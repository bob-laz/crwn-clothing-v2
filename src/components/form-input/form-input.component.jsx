import { Input, FormInputLabel, Group } from "./form-input.styles.js";

const FormInput = ({ labelText, ...labelProps }) => {
  return (
    <Group>
      <Input {...labelProps} />
      {labelText && (
        <FormInputLabel $shrink={labelProps.value.length}>
          {labelText}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
