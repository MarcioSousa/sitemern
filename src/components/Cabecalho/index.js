//cSpell:Ignore Cabecalho, Empresa, tollbarTitle
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ApartmentIcon  from '@material-ui/icons/Apartment'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

const usesStyles = makeStyles((theme) => ({
    toolbarTitle: {
        flex: 1
    }
}))

const Cabecalho = () => {
    const classes = usesStyles()

    return (
        <React.Fragment>
            <AppBar position="relative">
                <Toolbar>
                    <ApartmentIcon />
                    <Typography component="h1" color="inherit" align="center" noWrap className={classes.toolbarTitle}>
                        Empresa Delta
                    </Typography> 
                    <Button variant="contained" startIcon={<LockOutlinedIcon/>} color="secondary" size="small" href="/Login">
                        Login
                    </Button>
                </Toolbar>
            </AppBar> 
        </React.Fragment>
    )
}

export default Cabecalho