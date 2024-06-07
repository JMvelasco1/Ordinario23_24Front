
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Video } from "../../types.ts";



export const handler:Handlers = {
    GET:async(req:Request,ctx:FreshContext<unknown,Video>) => {
    
        const data = ctx.params; 
        console.log(data);
        const response = await fetch(`${Deno.env.get("API_URL")}/${data.id}`); 
        console.log(response); 
        

        ctx.render(); 
    }


}


const Page = (props:PageProps<Video>)=>{
    
}