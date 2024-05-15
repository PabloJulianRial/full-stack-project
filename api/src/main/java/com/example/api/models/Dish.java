package com.example.api.models;

import jakarta.persistence.*;

@Entity
@Table(name = "dishes")
public class Dish {

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


    @OneToOne
    @JoinColumn(name = "id", insertable = false, updatable = false)
    private Recipe recipe;

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

//    public Ingredients getIngredient1() {
//        return ingredient1;
//    }
//
//    public void setIngredient1(Ingredients ingredient1) {
//        this.ingredient1 = ingredient1;
//    }
//
//    public Ingredients getIngredient2() {
//        return ingredient2;
//    }
//
//    public void setIngredient2(Ingredients ingredient2) {
//        this.ingredient2 = ingredient2;
//    }
//
//    public Ingredients getIngredient3() {
//        return ingredient3;
//    }
//
//    public void setIngredient3(Ingredients ingredient3) {
//        this.ingredient3 = ingredient3;
//    }
//
//    public Ingredients getIngredient4() {
//        return ingredient4;
//    }
//
//    public void setIngredient4(Ingredients ingredient4) {
//        this.ingredient4 = ingredient4;
//    }
//
//    public Ingredients getIngredient5() {
//        return ingredient5;
//    }
//
//    public void setIngredient5(Ingredients ingredient5) {
//        this.ingredient5 = ingredient5;
//    }

    public Recipe getRecipe() {
        return recipe;
    }

    public void setRecipe(Recipe recipe) {
        this.recipe = recipe;
    }


    @Override
    public String toString() {
        return "Dishes{" +
                "id=" + id +
                ", dish='" + dish + '\'' +
                ", ingredient1Id='" + ingredient1Id + '\'' +
                ", ingredient2Id=" + ingredient2Id +
                ", ingredient3Id=" + ingredient3Id +
                ", ingredient4Id=" + ingredient4Id +
                ", ingredient5Id=" + ingredient5Id +
                ", recipe=" + recipe +
                '}';
    }
}





