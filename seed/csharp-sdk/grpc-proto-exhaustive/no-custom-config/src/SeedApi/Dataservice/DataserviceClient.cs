using System.Threading;
using Data.V1.Grpc;
using Grpc.Core;
using SeedApi.Core;

#nullable enable

namespace SeedApi;

public partial class DataserviceClient
{
    private RawClient _client;

    private RawGrpcClient _grpc;

    private DataService.DataServiceClient _dataService;

    internal DataserviceClient(RawClient client)
    {
        _client = client;
        _grpc = _client.Grpc;
        _dataService = new DataService.DataServiceClient(_grpc.Channel);
    }

    /// <example>
    /// <code>
    /// await client.Dataservice.UploadAsync(
    ///     new UploadRequest
    ///     {
    ///         Columns = new List<Column>()
    ///         {
    ///             new Column
    ///             {
    ///                 Id = "id",
    ///                 Values = new List<float>() { 1.1f },
    ///             },
    ///         },
    ///     }
    /// );
    /// </code>
    /// </example>
    public async Task<UploadResponse> UploadAsync(
        UploadRequest request,
        GrpcRequestOptions? options = null,
        CancellationToken cancellationToken = default
    )
    {
        try
        {
            var callOptions = _grpc.CreateCallOptions(
                options ?? new GrpcRequestOptions(),
                cancellationToken
            );
            var call = _dataService.UploadAsync(request.ToProto(), callOptions);
            var response = await call.ConfigureAwait(false);
            return UploadResponse.FromProto(response);
        }
        catch (RpcException rpc)
        {
            var statusCode = (int)rpc.StatusCode;
            throw new SeedApiApiException(
                $"Error with gRPC status code {statusCode}",
                statusCode,
                rpc.Message
            );
        }
        catch (Exception e)
        {
            throw new SeedApiException("Error", e);
        }
    }

    /// <example>
    /// <code>
    /// await client.Dataservice.DeleteAsync(new DeleteRequest());
    /// </code>
    /// </example>
    public async Task<DeleteResponse> DeleteAsync(
        DeleteRequest request,
        GrpcRequestOptions? options = null,
        CancellationToken cancellationToken = default
    )
    {
        try
        {
            var callOptions = _grpc.CreateCallOptions(
                options ?? new GrpcRequestOptions(),
                cancellationToken
            );
            var call = _dataService.DeleteAsync(request.ToProto(), callOptions);
            var response = await call.ConfigureAwait(false);
            return DeleteResponse.FromProto(response);
        }
        catch (RpcException rpc)
        {
            var statusCode = (int)rpc.StatusCode;
            throw new SeedApiApiException(
                $"Error with gRPC status code {statusCode}",
                statusCode,
                rpc.Message
            );
        }
        catch (Exception e)
        {
            throw new SeedApiException("Error", e);
        }
    }

    /// <example>
    /// <code>
    /// await client.Dataservice.DescribeAsync(new DescribeRequest());
    /// </code>
    /// </example>
    public async Task<DescribeResponse> DescribeAsync(
        DescribeRequest request,
        GrpcRequestOptions? options = null,
        CancellationToken cancellationToken = default
    )
    {
        try
        {
            var callOptions = _grpc.CreateCallOptions(
                options ?? new GrpcRequestOptions(),
                cancellationToken
            );
            var call = _dataService.DescribeAsync(request.ToProto(), callOptions);
            var response = await call.ConfigureAwait(false);
            return DescribeResponse.FromProto(response);
        }
        catch (RpcException rpc)
        {
            var statusCode = (int)rpc.StatusCode;
            throw new SeedApiApiException(
                $"Error with gRPC status code {statusCode}",
                statusCode,
                rpc.Message
            );
        }
        catch (Exception e)
        {
            throw new SeedApiException("Error", e);
        }
    }

    /// <example>
    /// <code>
    /// await client.Dataservice.FetchAsync(new FetchRequest());
    /// </code>
    /// </example>
    public async Task<FetchResponse> FetchAsync(
        FetchRequest request,
        GrpcRequestOptions? options = null,
        CancellationToken cancellationToken = default
    )
    {
        try
        {
            var callOptions = _grpc.CreateCallOptions(
                options ?? new GrpcRequestOptions(),
                cancellationToken
            );
            var call = _dataService.FetchAsync(request.ToProto(), callOptions);
            var response = await call.ConfigureAwait(false);
            return FetchResponse.FromProto(response);
        }
        catch (RpcException rpc)
        {
            var statusCode = (int)rpc.StatusCode;
            throw new SeedApiApiException(
                $"Error with gRPC status code {statusCode}",
                statusCode,
                rpc.Message
            );
        }
        catch (Exception e)
        {
            throw new SeedApiException("Error", e);
        }
    }

    /// <example>
    /// <code>
    /// await client.Dataservice.ListAsync(new ListRequest());
    /// </code>
    /// </example>
    public async Task<ListResponse> ListAsync(
        ListRequest request,
        GrpcRequestOptions? options = null,
        CancellationToken cancellationToken = default
    )
    {
        try
        {
            var callOptions = _grpc.CreateCallOptions(
                options ?? new GrpcRequestOptions(),
                cancellationToken
            );
            var call = _dataService.ListAsync(request.ToProto(), callOptions);
            var response = await call.ConfigureAwait(false);
            return ListResponse.FromProto(response);
        }
        catch (RpcException rpc)
        {
            var statusCode = (int)rpc.StatusCode;
            throw new SeedApiApiException(
                $"Error with gRPC status code {statusCode}",
                statusCode,
                rpc.Message
            );
        }
        catch (Exception e)
        {
            throw new SeedApiException("Error", e);
        }
    }

    /// <example>
    /// <code>
    /// await client.Dataservice.QueryAsync(new QueryRequest { TopK = 1U });
    /// </code>
    /// </example>
    public async Task<QueryResponse> QueryAsync(
        QueryRequest request,
        GrpcRequestOptions? options = null,
        CancellationToken cancellationToken = default
    )
    {
        try
        {
            var callOptions = _grpc.CreateCallOptions(
                options ?? new GrpcRequestOptions(),
                cancellationToken
            );
            var call = _dataService.QueryAsync(request.ToProto(), callOptions);
            var response = await call.ConfigureAwait(false);
            return QueryResponse.FromProto(response);
        }
        catch (RpcException rpc)
        {
            var statusCode = (int)rpc.StatusCode;
            throw new SeedApiApiException(
                $"Error with gRPC status code {statusCode}",
                statusCode,
                rpc.Message
            );
        }
        catch (Exception e)
        {
            throw new SeedApiException("Error", e);
        }
    }

    /// <example>
    /// <code>
    /// await client.Dataservice.UpdateAsync(new UpdateRequest { Id = "id" });
    /// </code>
    /// </example>
    public async Task<UpdateResponse> UpdateAsync(
        UpdateRequest request,
        GrpcRequestOptions? options = null,
        CancellationToken cancellationToken = default
    )
    {
        try
        {
            var callOptions = _grpc.CreateCallOptions(
                options ?? new GrpcRequestOptions(),
                cancellationToken
            );
            var call = _dataService.UpdateAsync(request.ToProto(), callOptions);
            var response = await call.ConfigureAwait(false);
            return UpdateResponse.FromProto(response);
        }
        catch (RpcException rpc)
        {
            var statusCode = (int)rpc.StatusCode;
            throw new SeedApiApiException(
                $"Error with gRPC status code {statusCode}",
                statusCode,
                rpc.Message
            );
        }
        catch (Exception e)
        {
            throw new SeedApiException("Error", e);
        }
    }
}
