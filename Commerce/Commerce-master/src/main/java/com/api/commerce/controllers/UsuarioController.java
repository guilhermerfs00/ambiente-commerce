package com.api.commerce.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.api.commerce.cofig.Converter;
import com.api.commerce.dto.LoginDTO;
import com.api.commerce.dto.UsuarioDTO;
import com.api.commerce.entities.Usuario;
import com.api.commerce.returnDTO.ReturnDTO;
import com.api.commerce.services.LoginService;
import com.api.commerce.services.UsuarioService;

@RestController
@CrossOrigin
@RequestMapping("/usuario")
public class UsuarioController {

	@Autowired
	private Converter converter;

	@Autowired
	private UsuarioService usuarioService;
	
	@Autowired
	private LoginService loginService;

	@RequestMapping(value = "/pageLoader", method = RequestMethod.GET)
	public ReturnDTO ListPageLoader() {

		List<Usuario> usuario = usuarioService.listaUsuario();

		return new ReturnDTO.Builder()
				//.setCode()
				.setContent(usuario)
				.build();
	}

	@PostMapping("/salvar")
	public ReturnDTO saveProduct(@RequestBody UsuarioDTO usuario) {
		try {
			usuarioService.saveUsuario(converter.map(usuario, Usuario.class));
			return new ReturnDTO.Builder()
					//.setCode(1L)
					.setContent(usuario)
					.build();
		} catch (Exception e) {
			return new ReturnDTO.Builder()
					.setManssager(e.getMessage())
					//.setCode(1L)
					.build();
		}
	}

	@PutMapping("/alterar/{id}")
	public ResponseEntity<Boolean> alterarUsuario(@PathVariable(value = "id") Long id, @RequestBody UsuarioDTO usuario) {
		usuarioService.alterarUsuario(id, converter.map(usuario, Usuario.class));
		return ResponseEntity.ok(true);
	}

	@RequestMapping(value = "/lista", method = RequestMethod.GET)
	public List<Usuario> lista() {
			List<Usuario> usuario = usuarioService.listaUsuario();
			return usuario;
	}

	@DeleteMapping("/deletar/{id}")
	public ResponseEntity<Boolean> deletarPorId(@PathVariable("id") Long id) {
		usuarioService.deletarPorId(id);
		return ResponseEntity.ok(true);
	}
	
	@PostMapping("/verificar-login")
	public ReturnDTO verificarLogin(@RequestBody LoginDTO login) {
		try {
			loginService.validarService(login);
			return new ReturnDTO.Builder()
					.setCode(1L)
					.setContent(login)
					.build();
		} catch (Exception e) {
			return new ReturnDTO.Builder()
					.setManssager(e.getMessage())
					.setCode(1L)
					.build();
		}
	}

}
