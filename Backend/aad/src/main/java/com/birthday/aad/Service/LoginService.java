package com.birthday.aad.Service;

import com.birthday.aad.Entity.Login;
import com.birthday.aad.Repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LoginService {

    private final LoginRepository loginRepository;

    @Autowired
    public LoginService(LoginRepository loginRepository) {
        this.loginRepository = loginRepository;
    }

    // Create operation
    public Login createLogin(Login login) {
        return loginRepository.save(login);
    }

    // Read operation
    public List<Login> getAllLogins() {
        return loginRepository.findAll();
    }

    public Optional<Login> getLoginById(int id) {
        return loginRepository.findById(id);
    }

    // Update operation
    public Login updateLogin(Login login) {
        return loginRepository.save(login);
    }

    // Delete operation
    public void deleteLogin(int id) {
        loginRepository.deleteById(id);
    }
}
