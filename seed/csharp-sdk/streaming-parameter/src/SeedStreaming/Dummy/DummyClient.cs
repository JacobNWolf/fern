using System.Net.Http;
using SeedStreaming.Core;

#nullable enable

namespace SeedStreaming;

public partial class DummyClient
{
    private RawClient _client;

    internal DummyClient(RawClient client)
    {
        _client = client;
    }

    public async Task GenerateAsync(GenerateRequest request, RequestOptions? options = null)
    {
        var response = await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                BaseUrl = _client.Options.BaseUrl,
                Method = HttpMethod.Post,
                Path = "generate",
                Body = request,
                Options = options
            }
        );
        var responseBody = await response.Raw.Content.ReadAsStringAsync();
        throw new SeedStreamingApiException(
            $"Error with status code {response.StatusCode}",
            response.StatusCode,
            responseBody
        );
    }
}
