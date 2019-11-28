package com.api.commerce.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.api.commerce.entities.Usuario;

@Service
public interface UsuarioService {

	void saveUsuario(Usuario usuario);

	void alterarUsuario(Long id, Usuario usuario);

	void deletarPorId(Long id);

	List<Usuario> listaUsuario();
}
