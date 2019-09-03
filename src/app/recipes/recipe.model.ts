export class Recipe {

    public name: string;
    public description: string;
    public imagePath: string;

// se crea un constructor para que se pueda instanciar esto con una nueva 
//palabra clave y pasar los argumentos 
constructor (name: string, desc: string, imagePath:string){

    this.name = name;
    this.description= desc;
    this.imagePath= imagePath;
}

}