package com.birthday.aad.Repository;

import com.birthday.aad.Entity.Food;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FoodRepository extends JpaRepository<Food, Integer> {
}
