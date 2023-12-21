import { TextField } from "@mui/material";
import { AnyCnameRecord } from "dns";
import React, { useState, ChangeEvent } from "react";

interface TextInputProps {
  value: any;
  onChange?: (e: any) => void;
  placeholder?: string;
  editable?: boolean;
  width?: any;
  type?: any;
  id?: any;
  maxLength?: number; // Add maxLength as a prop
  size?: any;
  sx?: any;
  label?: any;
  backgroundColor?: any;
}

const TextInput: React.FC<TextInputProps> = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const borderColor = isHovered ? "#000" : "#D6D6D6";
  return (
    <TextField
      size={props.size ? props.size : "large" || "large"}
      disabled={props.editable}
      fullWidth
      placeholder={props.placeholder}
      value={props.value}
      type={props.type}
      label={props.label}
      inputProps={{
        maxLength: props.maxLength,
      }}
      onChange={props.onChange}
      id={props.id}
      variant="outlined"
      sx={{
        "& fieldset": {
          borderRadius: "15px",
          borderWidth: "1.5px",
          borderColor: "#D6D6D6",
          textAlign: "left",
          fontSize: 14,
        },
        ...props.sx, // Keep any additional styles from props.sx
      }}
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
