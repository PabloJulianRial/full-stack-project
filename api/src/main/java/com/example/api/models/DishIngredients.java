package com.example.api.models;

import jakarta.persistence.*;

@Entity
@Table(name = "dish_ingredients")
public class DishIngredients {
    long dish_id;
    long ingredient_id;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    public long getDish_id() {
        return dish_id;
    }

    public void setDish_id(long dish_id) {
        this.dish_id = dish_id;
    }

    public long getIngredient_id() {
        return ingredient_id;
    }

    public void setIngredient_id(long ingredient) {
        this.ingredient_id = ingredient;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
