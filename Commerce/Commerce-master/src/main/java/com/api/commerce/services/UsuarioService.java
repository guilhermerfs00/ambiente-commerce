package com.api.commerce.services;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.api.commerce.entities.Usuario;

@Service
public interface UsuarioService {

	void saveUsuario(Usuario usuario);

	void alterarUsuario(Usuario usuario);

	Optional<Usuario> alterarUsuario(Long id);

	void deletarPorId(Long id);

}
