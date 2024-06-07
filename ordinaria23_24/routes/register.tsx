import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { User } from "../types.ts";
/*import {jwt} from "jsonwebtoken";

type Data = {
    message?:string, 
}
    
export const handler:Handlers = {
    POST: async(req:Request,ctx:FreshContext<unknown,Data>)=>{
        const url= new URL(req.url); 
        const form = await req.formData();
        const email = form.get("email")?.toString() || ""; 
        const password = form.get("password")?.toString() || ""; 
        const name = form.get("name")?.toString() ||""; 
        
        const JWT = Deno.env.get("JWT"); 

        if(!JWT){
            throw new Error ("JWT no se encuentra en el entorno"); 
        }

        const response = await fetch(`${Deno.env.get("API_URL")}/register`,
        {   
            method:"POST",
            headers:{
            "Content-Type":"application/json",
        },
            body:JSON.stringify({
            email,
            password,
            name
            }),

        },
    );
    if(response.status == 500){
        throw new Error("Error inesperado"); 
    }
    if(response.status == 400){
        throw new Error("UserID no encontrado")
    }

    if(response.status == 200){
        const data:Omit<User, "password" |"favs"> = await response.json(); 
        const token = jwt.sign(
            {
                email,
                id:data.id,
                name:data.name,
            },
            Deno.env.get("JWT"),{
                expiresIn:"24h",
            },
        ); 
        const headers = new Headers(); 
       
        setCookie(headers,{
            name:"auth",
            value:"token",
            sameSite:"Lax",
            domain:url.hostname,
            path:"/",
            secure:true,
        }); 
    }
}
}

const Page = (props:PageProps<Data>)=>(
    <Register message = {props.data?.message}/>
)
export default Page; */