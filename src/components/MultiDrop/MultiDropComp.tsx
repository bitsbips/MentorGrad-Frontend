import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import "./MultiDrop.css";

interface Props {
  name?: string;

  onChange?: (e: any) => void;
  value: any;
  width: any;
  id: any;
  padding?: any;
  placeholder?: any;
  label: string;
  data: {
    id: number;
    value: string;
    label: string;
  }[];
}
const MultiDropComp: React.FC<Props> = (props) => {
  return (
    <div style={{ width: props.width, borderRadius:"15px" }} className="multi-drop-container">
      <MultiSelect
        options={props.data}
        className="dark"
        value={props.value}
        onChange={props.onChange}
        overrideStrings={{ selectSomeItems: props.label }} // <- to override strings
        labelledBy="ndwndiw"
      />
    </div>
  );
};

export default MultiDropComp;
