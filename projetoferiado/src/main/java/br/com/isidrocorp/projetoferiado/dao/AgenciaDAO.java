package br.com.isidrocorp.projetoferiado.dao;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import br.com.isidrocorp.projetoferiado.model.Agencia;
import br.com.isidrocorp.projetoferiado.model.Feriado;

public interface AgenciaDAO extends CrudRepository<Agencia,Integer>{

	public ArrayList<Agencia> findByOrderByNumero();
}
