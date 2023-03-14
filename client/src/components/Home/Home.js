import React from 'react'

import { Container, Grow, Grid, Paper, AppBar, TextField, Button} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import ChipInput from 'material-ui-chip-input'

import Posts from '../Posts/Posts'
import Form from '../Form/Form'
import {getPosts} from '../../actions/posts'

import Pagination from '../Pagination'
import useStyles from '../styles';


function useQuery(){
    return new URLSearchParams(useLocation().search)
}
const Home = () =>{
    const [currentId, setCurrentId] = React.useState(0)
    const dispatch = useDispatch()
    const classes = useStyles();
    const query= useQuery()
    const history=useHistory()

    React.useEffect(()=>{
        dispatch(getPosts())
    },[currentId,dispatch])
    return (
        <Grow in>
            <Container>
                <Grid  container justifyContent ='space-between' alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form  currentId={currentId} setCurrentId={setCurrentId}/>
                        <Paper className={classes.pagination} elevation ={6}>
                            <Pagination />
                        </Paper>
                    </Grid>

                </Grid>
            </Container>
        </Grow>
    )
}

export default Home