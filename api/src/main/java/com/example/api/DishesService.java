package com.example.api;

import com.example.api.models.Category;
import com.example.api.models.Dish;
import com.example.api.models.Ingredients;
import com.example.api.models.Recipe;
import com.example.api.repositories.CategoriesRepository;
import com.example.api.repositories.DishesRepository;
import com.example.api.repositories.IngredientsRepository;
import com.example.api.repositories.RecipesRepository;
import com.example.api.responses.Option;
import com.example.api.responses.OptionContract;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class DishesService {
    @Autowired
    DishesRepository dishesRepository;
    @Autowired
    IngredientsRepository ingredientsRepository;
    @Autowired
    CategoriesRepository categoriesRepository;
    @Autowired
    RecipesRepository recipesRepository;


    //CREATE
//    public Dish addDish(Dish dish) {
//
//
//    }


    //READ

    public List<Dish> findDishesByName(String dishName) {
        return dishesRepository.findByDish(dishName);
    }


//    public List<Dish> getDishesByDishName(String dishName, int limit) {
//        String formattedDishName = dishName.replace("-", " ");
//
//        List<Dish> dishes = dishesRepository.getDishByDishName(formattedDishName);
//
//        return dishes
//                .stream()
//                .limit(limit)
//                .collect(Collectors.toList());
//    }

    public List<Dish> getAllDishes(int limit) {
        return dishesRepository
                .getAllByOrderById()
                .stream()
                .limit(limit)
                .collect(Collectors.toList());

    }

    public List<Ingredients> getAllIngredients() {
        return new ArrayList<>(ingredientsRepository
                .getAllByOrderById());

    }

    public List<Category> getAllCategories() {
        return new ArrayList<>(categoriesRepository
                .getAllByOrderById());

    }

    public List<Recipe> getAllRecipes() {
        return new ArrayList<>(recipesRepository
                .getAllByOrderById());
    }

//    public Dish getDishById(long id) {
//        return dishesRepository.findById(id).orElseThrow(() -> new NotFoundException("Greeting Not Found"));
//    }

    public Dish getRandomDish() {
        return dishesRepository.getRandomDish();
    }


//    public List<Option> getRecipes() {
//        return getFormOptions(recipesRepository.findAll());
//    }


//    public List<Long> getDishIds() {
//    }

//    public List<Option> getDishesIngredients() {
//        return getFormOptions(ingredientsRepository.findAll());
//    }
//
//    public List<Option> getDishesRecipes() {
//        return getFormOptions(recipesRepository.findAll());
//    }

//    public Dish getRandomGreeting() {
//        return dishesRepository.getRandomDish();
//    }


    public Dish getDishById(long id) {
        return dishesRepository.findById(id).orElseThrow(() -> new NotFoundException("Dish Not Found"));
    }

//    public Dish updateDish(Dish newDish, long id) {
//    }
//
//    public void deleteDishById(long id) {
//    }


    private List<Option> getFormOptions(List<? extends OptionContract> options) {
        return options
                .stream()
                .distinct()
                .map(option -> new Option(option.getId(), option.dish()))
                .collect(Collectors.toList());
    }

    //DELETE
    @Transactional
    public void deleteDishById(long id) {
        if (!dishesRepository.existsById(id)) {
            throw new NotFoundException("Dish Not Found");
        }
        recipesRepository.deleteRecipeById(id);
        dishesRepository.deleteDishById(id);
    }
}
