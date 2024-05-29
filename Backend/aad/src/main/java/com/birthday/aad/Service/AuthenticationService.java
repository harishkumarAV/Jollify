package com.birthday.aad.Service;




import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.birthday.aad.Dto.Request.AuthenticationRequest;
import com.birthday.aad.Dto.Request.RegisterRequest;
import com.birthday.aad.Dto.Response.AuthenticationResponse;
import com.birthday.aad.Entity.Login;
import com.birthday.aad.Entity.Register;
import com.birthday.aad.Entity.Enumerate.Role;
import com.birthday.aad.Repository.LoginRepository;
import com.birthday.aad.Repository.RegisterRepository;

import java.util.List;

@Service
public class AuthenticationService {
    private final RegisterRepository repository;
    private final LoginRepository loginRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtservice;
    private final AuthenticationManager authenticationManager;

    public AuthenticationService(RegisterRepository repository,
                                  LoginRepository loginRepository,
                                  PasswordEncoder passwordEncoder,
                                  JwtService jwtservice,
                                  AuthenticationManager authenticationManager) {
        this.repository = repository;
        this.loginRepository = loginRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtservice = jwtservice;
        this.authenticationManager = authenticationManager;
    }

    public AuthenticationResponse register(RegisterRequest request) {
        var user = Register.builder()
                .username(request.getUsername())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .confirmpassword(request.getConfirmpassword())
                .role(Role.USER)
                .build();
        repository.save(user);
        var jwtToken = jwtservice.generateToken(user);

        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );
        var user = repository.findByUsername(request.getUsername())
                .orElseThrow();

        var jwtToken = jwtservice.generateToken(user);

        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public List<Register> getRegister() {
        return repository.findAll();
    }

    public void updateRegister(Register registerEntity) {
        repository.save(registerEntity);
    }

    public void deleteRegister(int id) {
        repository.deleteById(id);
    }

    public List<Login> getUser() {
        return loginRepository.findAll();
    }

    public void updateUser(Login login) {
        loginRepository.save(login);
    }

    public void deleteUser(int userId) {
        loginRepository.deleteById(userId);
    }
}