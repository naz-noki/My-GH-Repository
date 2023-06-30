import Trepos from "../types/Trepos";

export default async (userName:string):Promise<Trepos> => {
    const res:any = await fetch(`https://api.github.com/users/${userName}/repos`);
    const data:any = await res.json();

    for(let i = 0; i<data.length; i++){
        data[i] = {
            name: data[i].name,
            url: data[i].html_url,
            dateCreated: data[i].created_at,                
            dateUpdated: data[i].updated_at,                
        }
    }
    
    return data;
}