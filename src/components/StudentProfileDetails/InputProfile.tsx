import { TextField } from '@mui/material';
import React, { useState, ChangeEvent } from 'react';

interface TextInputProps {
  value: any;
  onChange?: (e: any) => void;
  placeholder?: string;
  editable?: boolean;
  width?: any;
  type?: any;
  id?: any;
  maxLength?: number; // Add maxLength as a prop
}

const TextInput: React.FC<TextInputProps> = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const borderColor = isHovered ? '#000' : '#D6D6D6';
  return (
    <TextField
      disabled={props.editable}
      fullWidth
      placeholder={props.placeholder}
      value={props.value}
      type={props.type}
      inputProps={{
        maxLength: props.maxLength,
      }}
      onChange={props.onChange}
      id={props.id}
      variant="outlined"
    />
    // <input
    //   type={props.type}
    //   value={props.value}
    //   id={props.id}
    //   onChange={props.onChange}
    //   maxLength={props.maxLength}
    //   placeholder={props.placeholder}
    //   style={{border: `1.5px solid ${borderColor}`, borderRadius:'5px',padding:'10px',backgroundColor:'#F2F5F9',width:props.width,fontSize:'13px'}}
    //   readOnly={props.editable}
    //   onMouseEnter={handleMouseEnter}
    //   onMouseLeave={handleMouseLeave}

    // />
  );
};

export default TextInput;
