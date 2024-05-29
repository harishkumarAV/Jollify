package com.birthday.aad.Controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.birthday.aad.Dto.Request.AuthenticationRequest;
import com.birthday.aad.Dto.Request.RegisterRequest;
import com.birthday.aad.Dto.Response.AuthenticationResponse;
import com.birthday.aad.Entity.Login;
import com.birthday.aad.Entity.Register;
import com.birthday.aad.Service.AuthenticationService;

import lombok.RequiredArgsConstructor;
@RestController
@CrossOrigin("http://localhost:5173")
@RequestMapping("/auth")	
@RequiredArgsConstructor
public class AuthenticationController 
{
    @Autowired
	private AuthenticationService service;
	
	
	@PostMapping("/register")
	public ResponseEntity<String> register(@RequestBody RegisterRequest request) 
	{
		service.register(request);
		return ResponseEntity.ok("Registered Successfully");
    }
	@GetMapping("/getRegister")
    public List<Register> getRegisterDetails()
    {
   	 return service.getRegister();
    }
	@PutMapping("/putRegister")
    public String updateRegisterDetails(@RequestBody Register registerEntity,@RequestParam int id)
    {
    	registerEntity.setId(id);
   	    service.updateRegister(registerEntity);
   	    return ("Successfully Updated");
    }
    
    @DeleteMapping("/deleteRegister")
    public String deleteRegisterDetails(@RequestParam int id)
    {
        service.deleteRegister(id);
   	 return ("Successfully Deleted");
    }
	@PostMapping("/authenticate")
	public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) 
	{
		 return ResponseEntity.ok(service.authenticate(request));
	}
	 @GetMapping("/getUser")
	    public List<Login> getUserDetails()
	    {
	   	 return service.getUser();
	    }
	 @PutMapping("/putUser")
	    public String updateUserDetails(@RequestBody Login login,@RequestParam int id)
	    {
	   	 login.setId(id);
	   	 service.updateUser(login);
	   	 return ("Successfully Updated");
	    }
	    
	    @DeleteMapping("/deleteUser")
public String deleteUserDetails(@RequestParam int id) {
    service.deleteUser(id);
    return "Successfully Deleted";
}	
}