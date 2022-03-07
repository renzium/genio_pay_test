import React, { useEffect, useState} from "react";
import TextField from "./TextField";
import Search from "./Search";
import Multiline from "./Multiline";
import Dropdown from "./Dropdown";
import FeatherIcon from "../icon/FeatherIcon";

interface Props {
  className?: string;
  fieldStyle: string;
  inputType?: string;
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
  list?: string[];
  disabled?: boolean;
  outline?: boolean;
  labelBg?: string;
  defaultValue?: string;
  readOnly?: boolean;
  formikObject?: any;
  onClick?:(e:boolean)=> void;
  setValue?: (val: string) => void;
}

const handleToggleShowPassword = (id: any): void => {
  const field: HTMLInputElement | null = document.querySelector(`#${id}`);

  if (!field) return;

  if (field.type === "password") {
    field.type = "text";
  } else {
    field.type = "password";
  }
};

const FormGroup = (props: Props): JSX.Element => {
  const {
    className,
    fieldStyle,
    onClick,
    inputType,
    label,
    placeholder,
    required,
    list = [],
    defaultValue,
    disabled,
    readOnly,
    outline = true,
    setValue,
    labelBg,
    formikObject,
    name,
  } = props;

  const [showLabel, setShowLabel] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [listOpen, setListOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { handleChange: formikHandleChange, ...formikFieldProps } =
    formikObject.getFieldProps(name);

  const toggleLabel = (e: any) => {
    if (e.target.value) {
      setShowLabel(true);
    } else {
      setShowLabel(false);
    }
    if (formikObject) {
      formikHandleChange(e);
    } else {
      setValue && setValue(e.target.value);
    }
  };

  const handleBlur = (e: any) => {
    toggleLabel(e);
    e.target?.value?.length
      ? document.querySelector(`#${label}`)?.classList.add("contentFilled")
      : document.querySelector(`#${label}`)?.classList.remove("contentFilled");
  };

  const toggleList = (open?: boolean) => {
    if (readOnly) return;

    if (open) {
      setListOpen(true);
      document.querySelector(`#${label}`)?.classList.add("isOpen");
    } else {
      setListOpen(false);
      document.querySelector(`#${label}`)?.classList.remove("isOpen");
    }
  };

  const handleSelect = (e: any, item: string) => {
    e.preventDefault();
    e.stopPropagation();
    setSearchVal(item);
    toggleList(false);
    setShowLabel(true);
    setValue && setValue(item);
    document.querySelector(`#${label}`)?.classList.add("contentFilled");
  };

  useEffect(() => {
    if (defaultValue?.length) {
      setShowLabel(true);
    }
  }, [defaultValue]);

  const isNotValid = (name: string) =>
    formikObject.errors[name] && formikObject.touched[name];
  let inputClass: string;
  if (inputType === "password") {
    inputClass = `password ${
      isNotValid(name)
        ? "error"
        : formikObject.touched[name]
        ? "contentFilled"
        : " "
    }`;
  } else {
    inputClass = `${
      isNotValid(name)
        ? "error"
        : formikObject.touched[name]
        ? "contentFilled"
        : " "
    }`;
  }

  return (
    <>
      {fieldStyle === "shortText" && (
        <TextField
          id={label}
          className={inputClass}
          disabled={disabled}
          outline={outline}
          labelBg={labelBg}
        >
          <input
            className={`textSmall`}
            type={showPassword ? "text" : inputType}
            id={name}
            name={name}
            placeholder={placeholder}
            onBlur={handleBlur}
            onChange={toggleLabel}
            required={required}
            defaultValue={defaultValue}
            {...formikFieldProps}
            disabled={disabled}
            readOnly={readOnly}
            autoComplete="off"
            onClick={onClick}
          />
          {/* {formikFieldProps.value?.length > 0 && (
            <label htmlFor={name}>{label}</label>
          )} */}
          {inputType === "password" && (
            <FeatherIcon
              className="toggleShow cursorPointer"
              iconName={showPassword ? "eye" : "eye-off"}
              onClick={() => {
                setShowPassword((prev) => !prev);
                handleToggleShowPassword(label);
              }}
            />
          )}
          {formikObject.touched[name] ? (
            <div className="errorText">{formikObject.errors[name]}</div>
          ) : null}
        </TextField>
      )}
      {fieldStyle === "multiline" && (
        <Multiline
          id={label}
          className={className}
          disabled={disabled}
          outline={outline}
          labelBg={labelBg}
        >
          <>
            {formikFieldProps.value.length > 0 && (
              <label htmlFor={name}>{label}</label>
            )}
            <textarea
              id={label}
              name={name}
              placeholder={placeholder}
              required={required}
              defaultValue={defaultValue}
              {...formikFieldProps}
              onBlur={handleBlur}
              disabled={disabled}
              readOnly={readOnly}
              autoComplete="off"
            />
            {formikObject.touched[name] ? (
              <div className="errorText">{formikObject.errors[name]}</div>
            ) : null}
          </>
        </Multiline>
      )}
      {fieldStyle === "search" && (
        <Search
          id={label}
          className={className}
          disabled={disabled}
          outline={outline}
          labelBg={labelBg}
        >
          <div className="header">
            <FeatherIcon className="icon left" iconName="search" />
            <input
              type="text"
              id={label}
              name={label}
              value={searchVal}
              required={required}
              onChange={(e) => setSearchVal(e.target.value)}
              onBlur={handleBlur}
              className="searchInput"
              placeholder={placeholder}
              onFocus={() => toggleList(true)}
              autoComplete="off"
              readOnly={readOnly}
            />
            {listOpen && (
              <FeatherIcon
                className="icon right"
                iconName="search"
                onClick={() => toggleList()}
              />
            )}
          </div>
          <div className="list">
            {!!list?.length &&
              list
                .filter((item) => item.toLowerCase().match(searchVal))
                .map((item) => (
                  <button
                    key={item}
                    className="listItem"
                    onClick={(e) => handleSelect(e, item)}
                  >
                    {item}
                  </button>
                ))}
          </div>
        </Search>
      )}

      {fieldStyle === "dropdown" && (
        <Dropdown
          id={label}
          className={className}
          disabled={disabled}
          outline={outline}
          labelBg={labelBg}
        >
          <div className="header">
            <input
              type="text"
              id={label}
              name={label}
              required={required}
              value={searchVal}
              placeholder={placeholder}
              autoComplete="off"
              onChange={(e) =>{ 
                setSearchVal(e.target.value)
                setListOpen(true)
              }}
              // {...formikFieldProps}
            />
            <FeatherIcon
              className="icon right toggle"
              iconName="chevron-down"
              onClick={() => {
                setListOpen(!listOpen);
                // toggleList()
              }}
            />
          </div>
          {showLabel && <label htmlFor={label}>{placeholder}</label>}
          <div className={listOpen ? "isOpen" : "list"}>
            {!!list?.length &&
              list
              .filter((item) => item.toLowerCase().match(searchVal))
              .map((item) => (
                <button
                  key={item}
                  className="listItem"
                  onClick={(e) => handleSelect(e, item)}
                >
                  {item}
                </button>
              ))}
          </div>
        </Dropdown>
      )}
    </>
  );
};

export default FormGroup;
