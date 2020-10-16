package br.com.isidrocorp.projetoferiado.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity // aqui eu defino que Agencia será uma entidade armazenavel
@Table(name = "itmn330_agencia") // aqui eu especifico o nome da tabela correspondente
public class Agencia {

	@Id // aqui eu indico que é chave primária
	@GeneratedValue(strategy = GenerationType.IDENTITY) // aqui eu falo que é AUTO_INCREMENT
	@Column(name = "id_agencia") // aqui eu falo o nome da coluna correspondente
	private int id;

	@Column(name = "numero_agencia", unique = true)
	private int numero;

	@Column(name = "nome_agencia", length = 100)
	private String nome;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getNumero() {
		return numero;
	}

	public void setNumero(int numero) {
		this.numero = numero;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

}
