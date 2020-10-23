//cSpell:Ignore NaoEncontrado, Inicio
import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import NaoEncontrado from '../src/pages/NaoEncontrado'
import Inicio from '../src/pages/Inicio'
import Login from '../src/pages/Login'

export default function Rotas(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Inicio} />
                <Route exact path="/login" component={Login} />
                <Route component={NaoEncontrado} />
            </Switch>
        </BrowserRouter>

    )
}