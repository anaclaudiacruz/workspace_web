package br.com.isidrocorp.projetoferiado.dao;

import org.springframework.data.repository.CrudRepository;
import br.com.isidrocorp.projetoferiado.model.Usuario;

public interface UsuarioDAO extends CrudRepository<Usuario,Integer>{

	// se é findby = select 
	public Usuario findByRacfAndSenha(String racf, String senha);
	public Usuario findByRacf(String racf);
	public Usuario findByRacfOrFuncional(String racf, String funcional);
}
