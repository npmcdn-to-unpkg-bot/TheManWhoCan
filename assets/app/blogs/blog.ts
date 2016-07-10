export class Blog {
    content: string;
    title: string;
    tags: string;
    id: string;

    constructor(content: string, title: string, tags?: string, id?: string){
        this.content = content
        this.title = title
        this.tags = tags
        this.id = id
    }
}