package com.example.api.repositories;

import com.example.api.models.Recipe;
import jakarta.persistence.Table;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Table(name = "recipes")
@Repository
public interface RecipesRepository extends JpaRepository<Recipe, Long> {

    List<Recipe> getAllByOrderById();

    //delete
    void deleteRecipeById(long id);
}