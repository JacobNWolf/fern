/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.alias;

import com.seed.alias.core.ClientOptions;
import com.seed.alias.core.Environment;

public final class SeedAliasClientBuilder {
    private ClientOptions.Builder clientOptionsBuilder = ClientOptions.builder();

    private Environment environment;

    public SeedAliasClientBuilder url(String url) {
        this.environment = Environment.custom(url);
        return this;
    }

    public SeedAliasClient build() {
        clientOptionsBuilder.environment(this.environment);
        return new SeedAliasClient(clientOptionsBuilder.build());
    }
}
