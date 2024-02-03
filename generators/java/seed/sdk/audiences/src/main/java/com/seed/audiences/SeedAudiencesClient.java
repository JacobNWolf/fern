/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.audiences;

import com.seed.audiences.core.ClientOptions;
import com.seed.audiences.core.Suppliers;
import com.seed.audiences.resources.foldera.FolderAClient;
import com.seed.audiences.resources.foo.FooClient;
import java.util.function.Supplier;

public class SeedAudiencesClient {
    protected final ClientOptions clientOptions;

    protected final Supplier<FolderAClient> folderAClient;

    protected final Supplier<FooClient> fooClient;

    public SeedAudiencesClient(ClientOptions clientOptions) {
        this.clientOptions = clientOptions;
        this.folderAClient = Suppliers.memoize(() -> new FolderAClient(clientOptions));
        this.fooClient = Suppliers.memoize(() -> new FooClient(clientOptions));
    }

    public FolderAClient folderA() {
        return this.folderAClient.get();
    }

    public FooClient foo() {
        return this.fooClient.get();
    }

    public static SeedAudiencesClientBuilder builder() {
        return new SeedAudiencesClientBuilder();
    }
}
