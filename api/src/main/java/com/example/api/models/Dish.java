package com.example.api.models;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "dishes")
public class Dish {

    @ManyToMany
    @JoinTable(
            name = "dish_ingredients",
            joinColumns = @JoinColumn(name = "dish_id", insertable = false, updatable = false),
            inverseJoinColumns = @JoinColumn(name = "ingredient_id", insertable = false, updatable = false))


    Set<Ingredients> dishIngredients;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String dish;
    @Column(name = "ingredient1_id")
    private int ingredient1Id;
    @Column(name = "ingredient2_id")
    private int ingredient2Id;
    @Column(name = "ingredient3_id")
    private int ingredient3Id;
    @Column(name = "ingredient4_id")
    private int ingredient4Id;
    @Column(name = "ingredient5_id")
    private int ingredient5Id;
    @Column(name = "img_url")
    private String img_url;
    @OneToOne
    @JoinColumn(name = "id", insertable = false, updatable = false)
    private Recipe recipe;

    public String getImg_url() {
        return img_url;
    }

    public void setImg_url(String img_url) {
        this.img_url = img_url;
    }

    public Set<Ingredients> getDishIngredients() {
        return dishIngredients;
    }

    public void setDishIngredients(Set<Ingredients> dishIngredients) {
        this.dishIngredients = dishIngredients;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDish() {
        return dish;
    }

    public void setDish(String dish) {
        this.dish = dish;
    }

    public int getIngredient1Id() {
        return ingredient1Id;
    }

    public void setIngredient1Id(int ingredient1Id) {
        this.ingredient1Id = ingredient1Id;
    }

    public int getIngredient2Id() {
        return ingredient2Id;
    }

    public void setIngredient2Id(int ingredient2Id) {
        this.ingredient2Id = ingredient2Id;
    }

    public int getIngredient3Id() {
        return ingredient3Id;
    }

    public void setIngredient3Id(int ingredient3Id) {
        this.ingredient3Id = ingredient3Id;
    }

    public int getIngredient4Id() {
        return ingredient4Id;
    }

    public void setIngredient4Id(int ingredient4Id) {
        this.ingredient4Id = ingredient4Id;
    }

    public int getIngredient5Id() {
        return ingredient5Id;
    }

    public void setIngredient5Id(int ingredient5Id) {
        this.ingredient5Id = ingredient5Id;
    }

    public Recipe getRecipe() {
        return recipe;
    }

    public void setRecipe(Recipe recipe) {
        this.recipe = recipe;
    }


//    @Override
//    public String toString() {
//        return "Dishes{" +
//                "id=" + id +
//                ", dish='" + dish + '\'' +
//                ", ingredient1Id='" + ingredient1Id + '\'' +
//                ", ingredient2Id=" + ingredient2Id +
//                ", ingredient3Id=" + ingredient3Id +
//                ", ingredient4Id=" + ingredient4Id +
//                ", ingredient5Id=" + ingredient5Id +
//                ", recipe=" + recipe +
//                '}';
//    }
}





