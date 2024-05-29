package com.birthday.aad.Repository;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.birthday.aad.Entity.Register;


@Repository
public interface RegisterRepository extends JpaRepository<Register,Integer> 
{
     Optional<Register>findByUsername(String username);
    
} 
