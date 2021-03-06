package com.api.commerce.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.commerce.entities.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

	void save(Optional<Usuario> userAux);

}
