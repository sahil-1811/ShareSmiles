import React from 'react'

import {Avatar, Button ,Paper, Grid, Typography, Container, TextField} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles'
import Input from './Input'

const Auth=()=>{
    const classes = useStyles()
    const [showPassword,setShowPassword]=React.useState(false)
    const [isSignup,setIsSignup]= React.useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("Submitted")
    }

    const handleChange=(e)=>{
        e.preventDefault()
        console.log("Sumittrd")

    }

    const switchMode=()=>{
        setIsSignup((prevSignup)=>!prevSignup)
        handleShowPassword(false)
    }

    const handleShowPassword=()=>setShowPassword((prevShowPassword)=>!prevShowPassword)

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
export default Auth

