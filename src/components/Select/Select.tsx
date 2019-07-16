import React, { useState } from "react";
import './Select.scss';

interface Options {
  text: string;
  id: string | number;
}

interface SelectProps {
  placeholder: string;
  options: Options[];
  selected: string;
  onSelect: Function;
}

const Select: React.FC<SelectProps> = (props) => {
  const { placeholder, options, selected, onSelect } = props;
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={`select p-3 relative flex justify-between border border-solid rounded ${selected ? 'border-main-200 text-main-300' : 'border-white'}`} onClick={() => {setOpen(!isOpen)}}>
        {selected || placeholder}
        <span className={isOpen ? 'rotate-180' : ''}>&#9660;</span>
        <div className={`select__options absolute pt-2 pb-2 left-0 right-0 border border-white border-solid rounded ${isOpen ? '' : 'hidden'}`}>
            {options.map(({text, id}) => {
              return <div className={`p-2 ${selected === text ? 'text-main-200' : ''}`} onClick={e => {e.preventDefault(); onSelect(text)}} key={id}>{text}</div>
            })}
        </div>
    </div>
  );
};

export default Select;
