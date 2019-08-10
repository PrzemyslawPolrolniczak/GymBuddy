import React, { useState } from "react";
import "./Select.scss";

interface Options {
  text: string;
  id?: string | number;
}

interface BaseProps {
  options: Options[];
  selected: string;
  onSelect: Function;
}

interface OptionsProps extends BaseProps {
  isOpen: boolean;
  top?: boolean;
}

interface SelectProps extends BaseProps {
  topOptions?: Options[];
  placeholder?: string;
  extendClass?: string;
  withChevron?: boolean;
}

const Options: React.FC<OptionsProps> = ({
  options,
  isOpen,
  selected,
  onSelect,
  top = false
}) => {
  return (
    <div
      className={`options rounded ${isOpen ? "" : "hidden"} ${
        top ? "options--top" : ""
      }`}
    >
      {options.map(({ text, id }) => {
        return (
          <div
            className={`options__option ${
              selected === text ? "options__option--selected" : ""
            }`}
            onClick={() => {
              onSelect(text);
            }}
            key={id}
          >
            {text}
          </div>
        );
      })}
    </div>
  );
};

const Select: React.FC<SelectProps> = ({
  selected,
  extendClass,
  placeholder,
  withChevron,
  topOptions,
  options,
  onSelect
}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div
      className={`select ${extendClass} ${selected ? "select--selected" : ""}`}
      onClick={() => {
        setOpen(!isOpen);
      }}
    >
      {selected || placeholder}
      {withChevron && (
        <span className={isOpen ? "rotate-180" : ""}>&#9660;</span>
      )}
      <Options options={options} {...{ isOpen, selected, onSelect }} />
      {topOptions && (
        <Options options={topOptions} {...{ isOpen, selected, onSelect }} top />
      )}
    </div>
  );
};

export default Select;
