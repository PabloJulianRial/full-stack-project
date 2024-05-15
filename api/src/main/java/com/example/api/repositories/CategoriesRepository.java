package com.example.api.repositories;

import com.example.api.models.Category;
import jakarta.persistence.Table;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Table(name = "categories")
@Repository
public interface CategoriesRepository extends JpaRepository<Category, Long> {

    //READ

    List<Category> getAllByOrderById();
}
