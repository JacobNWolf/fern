# This file was auto-generated by Fern from our API Definition.

from seed.client import AsyncSeedExamples, SeedExamples

from .utilities import validate_response


async def test_echo(client: SeedExamples, async_client: AsyncSeedExamples) -> None:
    expected_response = "Hello world!\\n\\nwith\\n\\tnewlines"
    response = client.echo(request="Hello world!\\n\\nwith\\n\\tnewlines")
    validate_response(response, expected_response, expected_types)

    async_response = await async_client.echo(request="Hello world!\\n\\nwith\\n\\tnewlines")
    validate_response(async_response, expected_response, expected_types)
