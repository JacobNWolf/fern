// This file was auto-generated by Fern from our API Definition.

package client

import (
	core "github.com/file-upload/fern/core"
	service "github.com/file-upload/fern/service"
	http "net/http"
)

type Client struct {
	baseURL string
	caller  *core.Caller
	header  http.Header

	Service *service.Client
}

func NewClient(opts ...core.ClientOption) *Client {
	options := core.NewClientOptions()
	for _, opt := range opts {
		opt(options)
	}
	return &Client{
		baseURL: options.BaseURL,
		caller:  core.NewCaller(options.HTTPClient),
		header:  options.ToHeader(),
		Service: service.NewClient(opts...),
	}
}
