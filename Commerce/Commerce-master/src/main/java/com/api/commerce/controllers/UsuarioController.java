package com.api.commerce.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.commerce.cofig.Converter;
import com.api.commerce.dto.UsuarioDTO;
import com.api.commerce.entities.Usuario;
import com.api.commerce.services.UsuarioService;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

	@Autowired
	private Converter converter;

	@Autowired
	private UsuarioService usuarioService;

	@PostMapping("/salvar")
	public ResponseEntity<Boolean> saveProduct(@RequestBody UsuarioDTO usuario) {
		usuarioService.saveUsuario(converter.map(usuario, Usuario.class));
		return ResponseEntity.ok(true);
	}

	@DeleteMapping("/deletar")
	public ResponseEntity<Boolean> deletarUsuario(@RequestBody UsuarioDTO usuario) {
		usuarioService.deletarUsuario(converter.map(usuario, Usuario.class));
		return ResponseEntity.ok(true);
	}

	@PutMapping("/alterar")
	public ResponseEntity<Boolean> alterarUsuario(@RequestBody UsuarioDTO usuario) {
		usuarioService.alterarUsuario(converter.map(usuario, Usuario.class));
		return ResponseEntity.ok(true);
	}

	@PostMapping("/buscarPorId/{id}")
	public ResponseEntity<Optional<Usuario>> alterarUsuario(@PathVariable("id") Long id) {
			Optional<Usuario> usuario = usuarioService.alterarUsuario(id);
			return ResponseEntity.ok(usuario);
	}
}
