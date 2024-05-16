package com.example.api;


import com.example.api.models.Category;
import com.example.api.models.Dish;
import com.example.api.models.Ingredients;
import com.example.api.models.Recipe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class DishesController {

    @Autowired
    private DishesService dishesService;

    @ExceptionHandler
    public ResponseEntity<String> handleExceptions(Exception exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }

    // CREATE

    @PostMapping("/dish")
    public ResponseEntity<Dish> createDish(@RequestBody Dish dish) {
        Dish newDish = dishesService.addDish(dish);
        return ResponseEntity.status(HttpStatus.CREATED).body(newDish);
    }

    //READ

    @GetMapping("/dishes")
    public ResponseEntity<List<Dish>> getDishes(@RequestParam(required = false) String dishName, @RequestParam(defaultValue = "200") int limit) {

        if (dishName != null) {
            List<Dish> dishes = dishesService.findDishesByName(dishName);
            return ResponseEntity.ok().body(dishes);
        }
        return ResponseEntity.status(HttpStatus.OK).body(dishesService.getAllDishes(limit));
    }


    @GetMapping("/ingredients")
    public ResponseEntity<List<Ingredients>> getIngredients() {
        return ResponseEntity.status(HttpStatus.OK).body(dishesService.getAllIngredients());
    }

    @GetMapping("/categories")
    public ResponseEntity<List<Category>> getCategory() {
        return ResponseEntity.status(HttpStatus.OK).body(dishesService.getAllCategories());
    }

    @GetMapping("/recipes")
    public ResponseEntity<List<Recipe>> getRecipes() {
        return ResponseEntity.status(HttpStatus.OK).body(dishesService.getAllRecipes());
    }

    @GetMapping("/dish/random")
    public ResponseEntity<Dish> getRandomDish() {
        return ResponseEntity.status(HttpStatus.OK).body(dishesService.getRandomDish());
    }

    @GetMapping("/dish/{id}")
    public ResponseEntity<Dish> getDishById(@PathVariable long id) {
        return ResponseEntity.status(HttpStatus.OK).body(dishesService.getDishById(id));
    }

//    // DELETE

    @DeleteMapping("/dish/{id}")
    public ResponseEntity<Void> deleteDishById(@PathVariable long id) {
        dishesService.deleteDishById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

}