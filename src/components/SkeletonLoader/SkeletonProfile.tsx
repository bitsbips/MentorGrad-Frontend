import { Skeleton } from "@mui/material";
import React, { FC } from "react";


const SkeletonProfile :FC =() => {
    return(
        <div style={{padding:'10px'}}>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} animation="wave"  />
        <Skeleton variant="rectangular" width={'100%'} height={60} animation="wave" sx={{marginTop:'3%'}}/>
        <Skeleton variant="rectangular" width={'100%'} height={60} animation="wave" sx={{marginTop:'3%'}}/>
        <Skeleton variant="rectangular" width={'100%'} height={60} animation="wave" sx={{marginTop:'3%'}}/>

    </div>
    )
}
export default SkeletonProfile;