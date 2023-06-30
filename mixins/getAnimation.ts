export default ():boolean=>{
    const position:number = Math.floor(window.scrollY);
    if(position >= 550 ) return true;
    else return false;
};



