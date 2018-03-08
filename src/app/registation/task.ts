export class Task{

    taskId:string;
    ime:string;
    korisnickoIme:string;

    constructor(taskId:string, ime:string, korisnickoIme:string){
        this.taskId = taskId;
        this.ime=ime;
        this.korisnickoIme=korisnickoIme;
    }

}