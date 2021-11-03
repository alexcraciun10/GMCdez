import { FormControl, InputAdornment, TextField } from '@mui/material';
import React from 'react';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';

export default function Home() {
    return (
        <>
          
                <Box xl={3} sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <FormControl sx={{ m: 3, minWidth: 500}}>
                        <TextField
                            id="outlined-search"
                            type="search"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </FormControl>
                </Box>
            
        </>
    );
}
