import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;

@Injectable()
export class AuthService {
	private user: firebase.User;

	constructor(public afAuth: AngularFireAuth) {
		afAuth.authState.subscribe(user => {
			this.user = user;
		});
	}

	signInWithEmail(credentials) {
		console.log('Sign in with email');
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
	}

	signUp(credentials) {
		return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
		.then(function(response) {//Adds the user to a table.
			console.log(response.user.uid);
	  		var updates = {};
			updates['/clientes/' + response.user.uid] = { 
				Clasificacion: credentials.clasification, 
				ClaveCliente: credentials.keyClient,
				Contraseña: credentials.password,
				Correo: credentials.email,
				Direccion: credentials.address,
				Estatus: credentials.status,
				Id: credentials.id,
				NombreEmpresa: credentials.companyName,
				NombreRepresentante: credentials.representativeName,
				RTN: credentials.rtn,
				Saldo: credentials.salary,
				Telefono1: credentials.telephone1,
				Telefono2: credentials.telephone2 };
			firebase.database().ref().update(updates);
	  });
	}

	get authenticated(): boolean {
		return this.user !== null;
	}

	getEmail(){
		return this.user && this.user.email;
	}

	signOut(): Promise<void> {
		return this.afAuth.auth.signOut();
	}

}