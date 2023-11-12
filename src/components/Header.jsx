import { AppBar,Toolbar } from "@mui/material"
const logo='https://cdn.dribbble.com/users/299/screenshots/5648722/codepen-logo-gifc2.gif';

const Header= () =>{
    return (
        <AppBar position="static" style={{background: 'black', height: '9vh' }}>
            <Toolbar>
                <img src={logo} height={50} />
            </Toolbar>
        </AppBar>
    );
}

export default Header;