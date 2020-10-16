package br.com.isidrocorp.projetoferiado.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.isidrocorp.projetoferiado.dao.UsuarioDAO;
import br.com.isidrocorp.projetoferiado.model.Usuario;

@CrossOrigin("*")
@RestController
public class UsuarioController {

	@Autowired
	private UsuarioDAO dao;

	@PostMapping("/login")
	public ResponseEntity<Usuario> login(@RequestBody Usuario dadosUserLogin) {
		Usuario resultado = dao.findByRacfOrFuncional(dadosUserLogin.getRacf(), dadosUserLogin.getFuncional());
		if (resultado != null) { // encontrou
			if (resultado.getSenha().equals(dadosUserLogin.getSenha())) {
				return ResponseEntity.ok(resultado);
			} else {
				return ResponseEntity.status(401).build();
			}
		} else {
			return ResponseEntity.notFound().build();
		}

	/* selecionando só por RACF
	public ResponseEntity<Usuario> login(@RequestBody Usuario dadosUserLogin) {
		Usuario resultado = dao.findByRacf(dadosUserLogin.getRacf());
		if (resultado != null) { // encontrou
			if (resultado.getSenha().equals(dadosUserLogin.getSenha())) {
				return ResponseEntity.ok(resultado);
			} else {
				return ResponseEntity.status(401).build();
			}
		} else {
			return ResponseEntity.notFound().build();
		}
	 */
		
	}
}
