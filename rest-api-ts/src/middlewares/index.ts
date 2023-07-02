import express from "express"
import { get, merge } from "lodash"

import { getUserBySessionToken } from "../models/users"

export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const sessionToken = req.cookies['cookie']

        if(!sessionToken){
            return res.sendStatus(403)
        }

        const existingUser = await getUserBySessionToken(sessionToken)

        if(!existingUser){
            return res.sendStatus(403)
        }  
        
        merge(req, { identity: existingUser })
        return next()
    } catch (error) {
        console.log(error);
        res.sendStatus(400)
    }
}

export const isOwner = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const { id } = req.params
        const currrentUserId = get(req, 'identity._id') as string

        if(!currrentUserId){
            return res.sendStatus(403)
        }
        
        if(currrentUserId.toString() != id) {
            return res.sendStatus(403)
        }
        return next()
    } catch (error) {
        console.log(error);
        res.sendStatus(400)
    }
}