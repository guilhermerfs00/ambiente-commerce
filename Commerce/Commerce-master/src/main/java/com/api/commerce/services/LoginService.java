package com.api.commerce.services;

import org.springframework.stereotype.Service;

import com.api.commerce.dto.LoginDTO;

@Service
public interface LoginService {

	boolean validarService(LoginDTO login);
}
