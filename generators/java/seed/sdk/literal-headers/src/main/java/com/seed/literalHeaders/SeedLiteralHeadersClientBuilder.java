/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.literalHeaders;

import com.seed.literalHeaders.core.ClientOptions;
import com.seed.literalHeaders.core.Environment;

public final class SeedLiteralHeadersClientBuilder {
    private ClientOptions.Builder clientOptionsBuilder = ClientOptions.builder();

    private Environment environment;

    public SeedLiteralHeadersClientBuilder apiHeader(String apiHeader) {
        this.clientOptionsBuilder.addHeader("X-API-Header", apiHeader);
        return this;
    }

    public SeedLiteralHeadersClientBuilder apiTest(String apiTest) {
        this.clientOptionsBuilder.addHeader("X-API-Test", apiTest);
        return this;
    }

    public SeedLiteralHeadersClientBuilder url(String url) {
        this.environment = Environment.custom(url);
        return this;
    }

    public SeedLiteralHeadersClient build() {
        clientOptionsBuilder.environment(this.environment);
        return new SeedLiteralHeadersClient(clientOptionsBuilder.build());
    }
}
