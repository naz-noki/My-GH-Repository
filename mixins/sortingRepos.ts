import Irepos from '../types/Trepos';

export default (repos:Irepos, typeOfSorting:string):Irepos => {
    if(typeOfSorting === 'old'){
        return repos.sort((a,b)=>{
            if(new Date(a.dateCreated) === new Date(b.dateCreated)) return 0;
            else if(new Date(a.dateCreated) < new Date(b.dateCreated)) return -1;
            else return 1;
        });
    } else if(typeOfSorting === 'new'){
        return repos.sort((a,b)=>{
            if(new Date(a.dateUpdated) === new Date(b.dateUpdated)) return 0;
            else if(new Date(a.dateUpdated) > new Date(b.dateUpdated)) return -1;
            else return 1;
        });
    }
    else return repos.sort();
}