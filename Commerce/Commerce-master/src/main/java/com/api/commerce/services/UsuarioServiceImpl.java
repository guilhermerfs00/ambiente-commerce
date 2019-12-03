package com.api.commerce.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.commerce.entities.Usuario;
import com.api.commerce.repository.UsuarioRepository;

@Service
public class UsuarioServiceImpl implements UsuarioService {

	@Autowired
	private UsuarioRepository usuarioRepository;

	@Override
	public void saveUsuario(Usuario usuario) {
		usuarioRepository.save(usuario);
	}

	@Override
	public void alterarUsuario(Long id, Usuario usuario) {
		usuarioRepository.save(usuario);
	}

	@Override
	public void deletarPorId(Long id) {
		usuarioRepository.deleteById(id);

	}

	@Override
	public List<Usuario> listaUsuario() {
		return usuarioRepository.findAll();
	}
}
