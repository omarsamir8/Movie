import React, { useEffect } from "react";
import TextField from '@mui/material/TextField';
import { useSearch } from "../../SearchContext";
const NavBar:React.FC=()=>{
    const { searchValue,setSearchValue } = useSearch();
    useEffect(()=>{
        console.log(searchValue);
    },[searchValue])
    return(
        <>
        <TextField
            label="Search For Movies Or TV Series"
            type="search"
            variant="outlined"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            fullWidth
            InputProps={{
              style: { color: "white" }, // تغيير لون النص داخل الإدخال
            }}
            InputLabelProps={{
              style: { color: "white" }, // تغيير لون النص في الـ label
            }}
            sx={{
                "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "transparent" }, // لون الإطار
               "&:hover fieldset": { borderColor: "lightgray" }, // لون الإطار عند التمرير
                "&.Mui-focused fieldset": { borderColor: "white" }, // لون الإطار عند التركيز
                },
            }}
        />
        </>
    )
}
export default NavBar;