// This file was auto-generated by Fern from our API Definition.

package api

import (
	core "github.com/fern-api/fern-go/internal/testdata/sdk/upload/fixtures/core"
	http "net/http"
)

// ClientWithBaseURL sets the client's base URL, overriding the
// default environment, if any.
func ClientWithBaseURL(baseURL string) core.ClientOption {
	return func(opts *core.ClientOptions) {
		opts.BaseURL = baseURL
	}
}

// ClientWithHTTPClient uses the given HTTPClient to issue all HTTP requests.
func ClientWithHTTPClient(httpClient core.HTTPClient) core.ClientOption {
	return func(opts *core.ClientOptions) {
		opts.HTTPClient = httpClient
	}
}

// ClientWithHTTPHeader adds the given http.Header to all requests
// issued by the client. The given headers are added to the final set
// after the standard headers (e.g. Content-Type), but before the
// endpoint-specific headers.
func ClientWithHTTPHeader(httpHeader http.Header) core.ClientOption {
	return func(opts *core.ClientOptions) {
		// Clone the headers so they can't be modified after the option call.
		opts.HTTPHeader = httpHeader.Clone()
	}
}
