import {Elysia, t} from 'elysia'
import * as console from "node:console";
import db from "./db/connection.ts";
import shows from "./db/tables/Show.ts";
import {eq} from "drizzle-orm";

new Elysia()
    .get('/', () => 'hello')

    .get('/users', () => {
        
        
    }, {
        query: t.Object({
            name: t.String()
        })
    })

    .get('/shows', ({query}) => {
        // This gets and returns all the Shows
        return db.select().from(shows).where({
            title: query.title,
            genre: query.genre,
            rating: t.Number(),
            available: query.available
        });
        
    }, {
        query: t.Object({
            title: t.String(),
            genre: t.String(), 
            rating: t.Number(),
            available: t.Number()
        })
    })

    .put('/shows/:id', async ({ params, body }) => {
        console.log(params.id)
        db.insert(shows).values(body)
    }, {
        params: t.Object({
            id: t.String()
        }),
        body: t.Object({
            title: t.String(),
            genre: t.String(),
            rating: t.Number(),
            available: t.Boolean()
        })
    })

    .put('/shows/:title/status', ({ params }) => {
        db.update(shows).set({ available: false }).where(eq(shows.title, params.title));
    }, {
        params: t.Object({
            title: t.String()
        })
    })

    .put('/shows/:title/rating', ({ params, body }) => {
        db.update(shows).set({ rating: body.rating }).where(eq(shows.title, params.title));
    }, {
        params: t.Object({
            title: t.String()
        }),
        body: t.Object({
            rating: t.Number()
        })
    })
    
    .delete('/shows/:title', ({ params }) => {
        db.delete(shows).where(eq(shows.title, params.title));
    }, {
        params: t.Object({
            title: t.String()
        })
    })
    
    .onError(({}) => {
        console.error('Error occurred')
        return "Not a route // API broke lmao"
    })
    
    .listen(3000)