import { Handlers, FreshContext, RouteConfig } from "$fresh/server.ts";
/*import {jwt} from "jsonwebtoken"; 


export const config:RouteConfig = {
    skipInheritedLayouts:true,
}; 
export const handler:Handlers = {
    GET:async(req:Request,ctx:FreshContext) => {
        if(ctx.route ==="/login" ||ctx.route ==="/register"){
            const resp = await ctx.next(); 
            return resp; 
        }

        const {auth} = getCookies(req.headers); 
        if(!auth){
            return new Response("",{
                status:307,
                headers:{location:"/login"},
            }); 
        }
        const payload = jwt.verify(auth,Deno.env.get("JWT")); 
        if(!payload){
            return new Response ("",{
                status:307,
                headers:{location:"/login"},
            }); 
        }
        ctx.state.email = payload.email; 
        ctx.state.id = payload.id; 
        ctx.state.name = payload.name; 
        const resp = await ctx.next(); 
        return resp; 
    }
}
*/