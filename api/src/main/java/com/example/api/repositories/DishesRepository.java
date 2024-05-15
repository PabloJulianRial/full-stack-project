package com.example.api.repositories;

import com.example.api.models.Dish;
import jakarta.persistence.Table;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Table(name = "dishes")
@Repository
public interface DishesRepository extends JpaRepository<Dish, Long> {
    // READ

    List<Dish> getAllByOrderById();

  
    List<Dish> findByDish(String dishName);

    @Query(value = "SELECT * FROM dishes ORDER BY RAND() LIMIT 1", nativeQuery = true)
    Dish getRandomDish();


    Dish getDishById(long id);

    // DELETE
    void deleteDishById(long id);
}