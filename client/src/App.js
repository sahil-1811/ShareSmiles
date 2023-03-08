import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'

import {useDispatch} from 'react-redux'
import {getPosts} from './actions/posts'
import memories from './images/memories.png'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './styles'

const App = () => {
    const [currentId, setCurrentId] = React.useState(0)
    const classes =useStyles()
    const dispatch = useDispatch()

    React.useEffect(()=>{
        dispatch(getPosts())
    },[currentId,dispatch])




    return (
        <Container maxWidth ='lg'>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant ="h3" align="center">ShareSmiles</Typography>
                <img className={classes.image} src ={memories} alt="memories" height ="80" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justifyContent ='space-between' alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form  currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>

                    </Grid>
                </Container>
            </Grow>

        </Container>
    )
}

export default App