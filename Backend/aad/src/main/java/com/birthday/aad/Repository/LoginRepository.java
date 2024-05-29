
package com.birthday.aad.Repository;

import com.birthday.aad.Entity.Login;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepository extends JpaRepository<Login, Integer> {
}
