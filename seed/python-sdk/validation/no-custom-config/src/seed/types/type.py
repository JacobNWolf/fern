# This file was auto-generated by Fern from our API Definition.

import typing

import pydantic

from ..core.pydantic_utilities import IS_PYDANTIC_V2, UniversalBaseModel


class Type(UniversalBaseModel):
    """
    Defines properties with default values and validation rules.

    Examples
    --------
    from seed import Type

    Type(
        decimal=1.1,
        even=2,
        name="rules",
    )
    """

    decimal: float
    even: int
    name: str

    if IS_PYDANTIC_V2:
        model_config: typing.ClassVar[pydantic.ConfigDict] = pydantic.ConfigDict(extra="allow", frozen=True)  # type: ignore # Pydantic v2
    else:

        class Config:
            frozen = True
            smart_union = True
            extra = pydantic.Extra.allow
