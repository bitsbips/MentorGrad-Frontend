import React, { useState, useEffect, useContext } from "react";
import { Stack, Typography, Slider, TextField } from "@mui/material";
import { Context } from "../Context/ContextStates";

export default function RangeInput() {
  const minmin = 0;
  const maxmax = 1000;
  const {priceRangeValue , setPriceRangeValue} = useContext(Context)
  const handlePriceRangeChange = (event, newValue) => {
    setPriceRangeValue(newValue);
  };

  console.log(priceRangeValue);

  return (
    <>
  
      <Stack direction="row" justifyContent="space-between" alignItems="center" style={{marginTop:'1px'}}>
        <TextField
          label=""
          type="number"
          variant="outlined"
          InputLabelProps={{
            shrink: false,
          }}
          size="small"
          
          sx={{ width: "42%",borderRadius:'5px',
          '& fieldset': {borderWidth: '1.5px', 
          borderColor: '#D6D6D6',borderRadius:'5px'  }
        }}
          value={priceRangeValue[0]}
          onChange={(e) => {
            setPriceRangeValue([Number(e.target.value), priceRangeValue[1]]);
          }}
        />
        <Typography> -- </Typography>
        <TextField
          label=""
          type="number"
          variant="outlined"
                 size="small"

          InputLabelProps={{ shrink: true }}
          sx={{ width: "42%",
          '& fieldset': {borderWidth: '1.5px', 
          borderColor: '#D6D6D6', borderRadius:'5px'}
        }}
          value={priceRangeValue[1]}
          onChange={(e) => {
            setPriceRangeValue([priceRangeValue[0], Number(e.target.value)]);
          }}
        />
      </Stack>
      <Slider
        getAriaLabel={() => "Price range"}
        value={priceRangeValue}
        onChange={handlePriceRangeChange}
        valueLabelDisplay="auto"
        min={minmin}
        max={maxmax}
      />
    </>
  );
}