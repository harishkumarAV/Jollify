package com.birthday.aad.Service;

import com.birthday.aad.Entity.Food;
import com.birthday.aad.Repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FoodService {

    private final FoodRepository foodRepository;

    @Autowired
    public FoodService(FoodRepository foodRepository) {
        this.foodRepository = foodRepository;
    }

    public Food createFood(Food food) {
        return foodRepository.save(food);
    }

    public List<Food> getAllFoods() {
        return foodRepository.findAll();
    }

    public Optional<Food> getFoodById(int id) {
        return foodRepository.findById(id);
    }

    public Food updateFood(Food food) {
        return foodRepository.save(food);
    }

    public void deleteFood(int id) {
        foodRepository.deleteById(id);
    }
}
