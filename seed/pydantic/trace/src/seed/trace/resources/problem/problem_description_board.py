# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations

import typing

from ...core.pydantic_utilities import UniversalBaseModel


class ProblemDescriptionBoard_Html(UniversalBaseModel):
    value: str
    type: typing.Literal["html"] = "html"


class ProblemDescriptionBoard_Variable(UniversalBaseModel):
    value: VariableValue
    type: typing.Literal["variable"] = "variable"


class ProblemDescriptionBoard_TestCaseId(UniversalBaseModel):
    value: str
    type: typing.Literal["testCaseId"] = "testCaseId"


ProblemDescriptionBoard = typing.Union[
    ProblemDescriptionBoard_Html, ProblemDescriptionBoard_Variable, ProblemDescriptionBoard_TestCaseId
]
from ..commons.variable_value import VariableValue  # noqa: E402
