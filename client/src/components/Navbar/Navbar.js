import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography , Avatar, Button } from '@material-ui/core'
import decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import memories from '../../images/memories.png'
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles'
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navbar = () =>{
    const classes = useStyles()
    const dispatch = useDispatch();
    const history = useHistory()
    const location = useLocation()

    const [user,setUser]=React.useState(JSON.parse(localStorage.getItem('profile')))
    // const user = null

    React.useEffect(()=>{
        const token =user?.token
        setUser(JSON.parse(localStorage.getItem('profile')))
    },[location])


    const logout = () => {
        dispatch({ type: actionType.LOGOUT });
    
        history.push('/auth');
    
        setUser(null);
      };


    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component ={Link} to="/" className={classes.heading} variant ="h3" align="center">ShareSmiles</Typography>
                <img className={classes.image} src ={memories} alt="memories" height ="80" />
            </div>
            <Toolbar className={classes.toolbar}>
                {user?.result ? (
                    <div className={classes.profile}>
                        <Avatar className = {classes.purple} alt = {user?.result.name} src = {user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant ="h6">{user?.result.name}</Typography>
                        <Button variant ="contained" className={classes.logout} color = "secondary" onClick={logout}>Logout</Button>
                    </div>

                ) :(
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}
export default Navbar


