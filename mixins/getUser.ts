import Iuser from '../types/Iuser';

export default async (userName:string):Promise<Iuser> => {
    const link:string = 'https://api.github.com/users/';
    const res:any = await fetch(`${link}${userName}`);
    const data:any = await res.json();
    return {
        id: data.id,
        avatar: data.avatar_url,
        bio: data.bio === null ? 'Classified information' : data.bio,
        company: data.company === null ? 'Classified information' : data.company,
        followers: data.followers,
        following: data.following,
        html_url: data.html_url,
        login: data.login,
        name: data.name,
    }
}