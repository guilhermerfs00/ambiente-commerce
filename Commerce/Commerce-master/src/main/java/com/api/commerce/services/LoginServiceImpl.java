package com.api.commerce.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.api.commerce.dto.LoginDTO;
import com.api.commerce.entities.Login;
import com.api.commerce.repository.LoginRepository;

@Service
public class LoginServiceImpl implements LoginService{

	@Autowired
	private LoginRepository loginRepository;

	@Override
	public boolean validarService(LoginDTO login) {
		List<Login> adms = new ArrayList<Login>();
		adms = loginRepository.findAll();
		
		if(adms.contains(login)) {
			return true;
		}
		else {
			return false;
		}
	}

}
