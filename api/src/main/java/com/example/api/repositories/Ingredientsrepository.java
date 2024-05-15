package com.example.api.repositories;

import com.example.api.models.Ingredients;
import jakarta.persistence.Table;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Table(name = "ingredients")
@Repository
public interface IngredientsRepository extends JpaRepository<Ingredients, Long> {

    List<Ingredients> getAllByOrderById();


}