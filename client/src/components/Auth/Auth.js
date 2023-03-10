import React from 'react'

import {Avatar, Button ,Paper, Grid, Typography, Container} from '@material-ui/core'
import {GoogleLogin} from '@react-oauth/google'

import { useHistory } from 'react-router-dom';
import { AUTH } from '../../constants/actionTypes';


import { useDispatch } from 'react-redux';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles'
import Input from './Input'
import Icon from './Icon'
import { useLocation } from 'react-router-dom';
import {signin, signup} from '../../actions/auth'


const initialState ={firstname:"",lastname:"",email:"",password:"",confirmPassword:""}
const Signup=()=>{
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()
    const dispatch = useDispatch()
    const [showPassword,setShowPassword]=React.useState(false)
    const [isSignup,setIsSignup]= React.useState(false)
    const [formData,setFormData] = React.useState(initialState)

    const handleSubmit=(e)=>{
        e.preventDefault()
        
        if (isSignup){
            dispatch(signup(formData, history))

        }else{
            dispatch(signin(formData, history))

        }
    }

    const handleChange=(e)=>{
        e.preventDefault()
        setFormData({...formData,[e.target.name]:e.target.value})

    }

    const switchMode=()=>{
        setIsSignup((prevSignup)=>!prevSignup)
        setShowPassword(false)
    }

    const handleShowPassword=()=>setShowPassword((prevShowPassword)=>!prevShowPassword)

    const googleSuccess = async (res)=>{
        const result= res?.profileObj //cannot get property porfileObj of undefined
        const token = res?.tokenId

        try {
            dispatch({type:AUTH, data :{result,token}})
            history.push("/")
        } catch (error) {
            console.log(error)
        }

    }
    const googleFailure=()=>{
        alert("Google Sign in was unsuccessfull. Try Again Later")
    }



    return(
        <Container component='main' maxWidth="xs">
            <Paper className={classes.paper} elevation ={3}>
                <Avatar className={classes.Avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant='h5'>{isSignup?'Sign up': 'Sign in'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing ={2}>
                        {
                            isSignup && (
                                <>
                                    <Input
                                        name='firstname' 
                                        label ='First Name' 
                                        handleChange={handleChange}
                                        autoFocus 
                                        half
                                    />
                                    <Input 
                                        name='lastname' 
                                        label ='Last Name' 
                                        handleChange={handleChange} 
                                        half
                                    />
                                </>
                            )}
                            <Input name='email' label='Email Address' handleChange={handleChange} type='email'/> 
                            <Input name ='password' label='Password' handleChange={handleChange} type={showPassword?"text":"password"} handleShowPassword={handleShowPassword}/> 

                            {isSignup && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password" />}


                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color='primary' className={classes.submit}>
                        { isSignup ? 'Sign Up' : 'Sign In' }
                    </Button>
                    <GoogleLogin 
                        clientId='745001391526-nigrkb6gmfbh3jiql97drcncapceh418.apps.googleusercontent.com'
                        render={(renderProps)=>(
                            <Button 
                            className={classes.googleButton} 
                            color="primary" 
                            fullWidth 
                            onClick={renderProps.onCLick} 
                            disabled={renderProps.disabled} 
                            startIcon={<Icon />} 
                            variant='contained'>
                                Google Sign In    
                            </Button>
                        )}
                        onSuccess={(response) => googleSuccess(response)}
                        onError={googleFailure}
                        cookiePolicy='single_host_origin'
                    />
                    
                    <Grid container justifyContent='flex-end'>
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup? 'Already have an account? Sign In': "Don't have an account? Sign Up"}</Button>
                        </Grid>

                    </Grid>

                </form>

            </Paper>
        </Container>

    )
}
export default Signup

