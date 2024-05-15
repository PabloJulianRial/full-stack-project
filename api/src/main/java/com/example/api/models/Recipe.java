package com.example.api.models;

import com.example.api.responses.OptionContract;
import jakarta.persistence.*;


@Entity
@Table(name = "recipes")
public class Recipe implements OptionContract {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String recipe;

    public String getRecipe() {
        return recipe;
    }

    public void setRecipe(String recipe) {
        this.recipe = recipe;
    }

    @Override
    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String dish() {
        return null;
    }
}
