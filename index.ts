import { Elysia, t } from 'elysia'
import * as console from "node:console";

new Elysia()
    .get('/', () => 'hello')

    .get('/users', () => 'users', {
        query: t.Object({
            name: t.String()
        })
    })

    .get('/shows', () => 'Shows', {
        query: t.Object({
            name: t.String(),
            genre: t.String(),
            viewedBy: t.String()
        })
    })

    .put('/shows/:id', ({ params }) => params, {
        params: t.Object({
            id: t.String()
        })
    })

    .put('/shows/:id/status', ({ params }) => params, {
        params: t.Object({
            id: t.String()
        })
    })

    .put('/shows/:id/rating', ({ params }) => params, {
        params: t.Object({
            id: t.String()
        })
    })
    
    .delete('/shows/:id', ({ params }) => params, {
        params: t.Object({
            id: t.String()
        })
    })
    
    .onError(({}) => {
        console.error('Error occurred')
        return "Not a route // API broke lmao"
    })
    
    .listen(3000)