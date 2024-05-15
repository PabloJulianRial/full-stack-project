package com.example.api.models;

import com.example.api.responses.OptionContract;
import jakarta.persistence.*;

@Entity
@Table(name = "categories")
public class Category implements OptionContract {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String categoryName;

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    @Override
    public long getId() {
        return 0;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Override
    public String dish() {
        return null;
    }
}