export class Place {
    name: string;
    description: string;
    image: string;
    tag: string;

    constructor(name: string, description: string, image: string, tag: string) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.tag = tag;
    }
}