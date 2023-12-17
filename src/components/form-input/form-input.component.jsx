import "./form-input.styles.scss";

const FormInput = ({ labelText, ...labelProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...labelProps} />
      {labelText && (
        <label
          className={`${
            labelProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {labelText}
        </label>
      )}
    </div>
  );
};

export default FormInput;
