import { useContext } from 'react';
import Editor from './Editor';
import { Box } from '@mui/material';

import { DataContext } from '../context/DataProvider';

const Code=()=>{

    const {html,sethtml,css,setcss,js,setjs} = useContext(DataContext);

    return(
        <Box style={{
            display: 'flex',
            background:'black'
        }}>
        <Editor 
            heading='HTML'
            icon='/'
            color='red'
            value={html}
            onChange={sethtml}
        />
        <Editor
            heading='CSS'
            icon='*'
            color='blue'
            value={css}
            onChange={setcss}

        />
        <Editor
            heading='JS'
            icon='( )'
            color='yellow'
            value={js}
            onChange={setjs}
        />
        </Box>
    )

}

export default Code;