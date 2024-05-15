package com.example.api.models;

import com.example.api.responses.OptionContract;
import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "ingredients")
public class Ingredients implements OptionContract {

    @ManyToMany(mappedBy = "dishIngredients")
    Set<Dish> containingDish;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String ingredient_name;
    private int category_id;

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

    public String getIngredient_name() {
        return ingredient_name;
    }

    public void setIngredient_name(String ingredient_name) {
        this.ingredient_name = ingredient_name;
    }

    public int getCategory_id() {
        return category_id;
    }

    public void setCategory_id(int category_id) {
        this.category_id = category_id;
    }
}
