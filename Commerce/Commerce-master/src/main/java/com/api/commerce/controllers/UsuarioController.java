package com.api.commerce.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@CrossOrigin
@RequestMapping("/usuario")
public class UsuarioController {

	@Autowired
	private Converter converter;

	@Autowired
	private UsuarioService usuarioService;

	@PostMapping("/salvar")
	public ResponseEntity<UsuarioDTO> saveProduct(@RequestBody UsuarioDTO usuario) {
		usuarioService.saveUsuario(converter.map(usuario, Usuario.class));
		return ResponseEntity.ok(usuario);
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

	@PostMapping("/deletarPorId/{id}")
	public ResponseEntity<Boolean> deletarPorId(@PathVariable("id") Long id) {
		usuarioService.deletarPorId(id);
		return ResponseEntity.ok(true);
	}

}
