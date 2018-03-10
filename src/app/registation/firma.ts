export class Firma {
	ime: string;
	udaljenost: number;
	kategorija: number;
	korisnickoIme: string;

	constructor(ime:string, udaljenost:number, kategorija:number, korisnickoIme:string){
		this.ime = ime;
		this.udaljenost = udaljenost;
		this.kategorija = kategorija;
		this.korisnickoIme = korisnickoIme;
	}
	
}