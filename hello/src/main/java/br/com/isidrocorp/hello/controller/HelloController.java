package br.com.isidrocorp.hello.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.isidrocorp.hello.model.Produto;

@RestController
public class HelloController {
	
		
	@GetMapping("/hello")
	public String sayHello() {
		return "Oi!!! Ufa... Agora vai!";
	}

	@GetMapping("/produto")
	public Produto mostrarProduto() {
		Produto p = new Produto();
		p.setId(987654);
		p.setDescricao("Computador TOP de linha");
		p.setPreco(3854.76);
		return p;
		
	}
	
}
