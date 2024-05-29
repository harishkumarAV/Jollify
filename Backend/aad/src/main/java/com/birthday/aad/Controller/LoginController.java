
package com.birthday.aad.Controller;

import com.birthday.aad.Entity.Login;
import com.birthday.aad.Service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/login")
@CrossOrigin(origins = "http://localhost:5173")
public class LoginController {

    private final LoginService loginService;

    @Autowired
    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @PostMapping("/create")
    public ResponseEntity<Login> createLogin(@RequestBody Login login) {
        return ResponseEntity.status(HttpStatus.CREATED).body(loginService.createLogin(login));
    }

    @GetMapping("/all")
    public ResponseEntity<List<Login>> getAllLogins() {
        return ResponseEntity.ok(loginService.getAllLogins());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Login> getLoginById(@PathVariable int id) {
        Optional<Login> login = loginService.getLoginById(id);
        return login.map(ResponseEntity::ok)
                    .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/update")
    public ResponseEntity<Login> updateLogin(@RequestBody Login login) {
        return ResponseEntity.ok(loginService.updateLogin(login));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteLogin(@PathVariable int id) {
        loginService.deleteLogin(id);
        return ResponseEntity.noContent().build();
    }
}
