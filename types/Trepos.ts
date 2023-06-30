interface Irepos {
    name: string,
    url: string,
    dateCreated: string,
    dateUpdated: string,
}

type Trepos = Irepos[];

export default Trepos;