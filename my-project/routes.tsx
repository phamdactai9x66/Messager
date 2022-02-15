import React, { Component } from 'react'
import { Route } from 'react-router-dom'

interface propertyPage {
    namePath: string,
    Component: Component | any,
    chileds?: any[],
    indexDefault?: {
        Component: any
    }
}

export const pagesClient: Array<propertyPage> = [
    {
        namePath: "awda",
        Component: 'awdaw'
    }
]


export const pageAdmin: Array<propertyPage> = [
    {
        namePath: "awd",
        Component: "awd"
    }
]


export const renderRoutes = (pages: Array<propertyPage>) => {
    return pages.map((e, index: number) => {
        return <Route path={e.namePath} key={index}>
            {e?.indexDefault ? <Route index element={e.indexDefault.Component} /> : null}
        </Route>
    })
}