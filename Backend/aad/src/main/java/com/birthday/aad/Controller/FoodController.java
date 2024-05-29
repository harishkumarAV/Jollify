package com.birthday.aad.Controller;

import com.birthday.aad.Entity.Food;
import com.birthday.aad.Service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/foods")
@CrossOrigin(origins = "http://localhost:5173")
public class FoodController {

    private final FoodService foodService;

    @Autowired
    public FoodController(FoodService foodService) {
        this.foodService = foodService;
    }

    @PostMapping("/create")
    public ResponseEntity<Food> createFood(@RequestBody Food food) {
        return ResponseEntity.status(HttpStatus.CREATED).body(foodService.createFood(food));
    }

    @GetMapping("/all")
    public ResponseEntity<List<Food>> getAllFoods() {
        return ResponseEntity.ok(foodService.getAllFoods());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Food> getFoodById(@PathVariable int id) {
        Optional<Food> food = foodService.getFoodById(id);
        return food.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/update")
    public ResponseEntity<Food> updateFood(@RequestBody Food food) {
        return ResponseEntity.ok(foodService.updateFood(food));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteFood(@PathVariable int id) {
        foodService.deleteFood(id);
        return ResponseEntity.noContent().build();
    }
}
