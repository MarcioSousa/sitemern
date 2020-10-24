//cSpell:Ignore Cabecalho, Empresa, tollbarTitle, Secundaria, Teste, secao, secoes, Produtos, Reservada, titulo, servicos, Serviços
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Link from '@material-ui/core/Link'
import { makeStyles} from '@material-ui/core/styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import ApartmentIcon from '@material-ui/icons/Apartment'

const usesStyles = makeStyles((theme) => ({
    toolbarTitle: {
        flex: 1
    },
    toolbarSecundaria:{
        justifyContent: 'space-between'
    }
}))

const Cabecalho = () => {
    const classes = usesStyles()

    const secoes = [
        {titulo: 'Produtos', url:'/produtos'},
        {titulo: 'Serviços', url:'/servicos'},
        {titulo: 'SAC', url:'/sac'},
        {titulo: 'FAQ', url:'/faq'},
        {titulo: 'Área Reservada', url:'/login'},
    ]

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
            <Toolbar component="nav" className={classes.toolbarSecundaria}>
                    {secoes.map((secao) => (
                    <Link color="secondary" noWrap variant="body2" key={secao.titulo} href={secao.url} >{secao.titulo}</Link> 
                    ))}
                </Toolbar>
        </React.Fragment>
    )
}

export default Cabecalho