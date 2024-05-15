package com.example.api.responses;

import org.springframework.stereotype.Component;

@Component
public class Option implements OptionContract {
    private long id;
    private String dish;

    public Option() {
    }

    public Option(long id, String dish) {
        this.id = id;
        this.dish = dish;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Override
    public String dish() {
        return null;
    }

    public String getDish() {
        return dish;
    }

    public void setDish(String dish) {
        this.dish = dish;
    }
}
