package com.api.commerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.commerce.entities.Login;

@Repository
public interface LoginRepository extends JpaRepository<Login, Long> {

}
