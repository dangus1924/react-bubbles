import React from 'react';;
import { Redirect, Route } from 'react-router-dom';

export default function PrivateRoute(props) {

    const {
        componet: Componet,
        ...rest
    } = props

    return (
        <Route {...rest} render={(renderProps) => {
            if (localStorage.getItem("token")) {
                return <Componet {...renderProps} />
            } else {
                return <Redirect to="/login" />
            }
        }} />
    )
}