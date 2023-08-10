package com.seed.api.resources.types.enum_.types;

import com.fasterxml.jackson.annotation.JsonValue;

public enum WeatherReport {
    SUNNY("SUNNY"),

    CLOUDY("CLOUDY"),

    RAINING("RAINING"),

    SNOWING("SNOWING");

    private final String value;

    WeatherReport(String value) {
        this.value = value;
    }

    @JsonValue
    @Override
    public String toString() {
        return this.value;
    }
}
