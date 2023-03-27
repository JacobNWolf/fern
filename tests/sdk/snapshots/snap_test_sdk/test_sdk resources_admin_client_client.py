# This file was auto-generated by Fern from our API Definition.

import typing
import urllib

import httpx

from ....core.api_error import ApiError
from ....core.jsonable_encoder import jsonable_encoder
from ....core.remove_none_from_headers import remove_none_from_headers
from ...submission.types.submission_id import SubmissionId
from ...submission.types.test_case_result_with_stdout import TestCaseResultWithStdout
from ...submission.types.test_submission_status import TestSubmissionStatus
from ...submission.types.test_submission_update import TestSubmissionUpdate
from ...submission.types.trace_response import TraceResponse
from ...submission.types.trace_response_v_2 import TraceResponseV2
from ...submission.types.workspace_run_details import WorkspaceRunDetails
from ...submission.types.workspace_submission_status import WorkspaceSubmissionStatus
from ...submission.types.workspace_submission_update import WorkspaceSubmissionUpdate
from ...v_2.resources.problem.types.test_case_id import TestCaseId


class AdminClient:
    def __init__(
        self, *, environment: str, x_random_header: typing.Optional[str] = None, token: typing.Optional[str] = None
    ):
        self._environment = environment
        self.x_random_header = x_random_header
        self._token = token

    def update_test_submission_status(self, submission_id: SubmissionId, *, request: TestSubmissionStatus) -> None:
        _response = httpx.request(
            "POST",
            urllib.parse.urljoin(f"{self._environment}/", f"admin/store-test-submission-status/{submission_id}"),
            json=jsonable_encoder(request),
            headers=remove_none_from_headers(
                {
                    "X-Random-Header": self.x_random_header,
                    "Authorization": f"Bearer {self._token}" if self._token is not None else None,
                }
            ),
        )
        _response_json = _response.json()
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def send_test_submission_update(self, submission_id: SubmissionId, *, request: TestSubmissionUpdate) -> None:
        _response = httpx.request(
            "POST",
            urllib.parse.urljoin(f"{self._environment}/", f"admin/store-test-submission-status-v2/{submission_id}"),
            json=jsonable_encoder(request),
            headers=remove_none_from_headers(
                {
                    "X-Random-Header": self.x_random_header,
                    "Authorization": f"Bearer {self._token}" if self._token is not None else None,
                }
            ),
        )
        _response_json = _response.json()
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def update_workspace_submission_status(
        self, submission_id: SubmissionId, *, request: WorkspaceSubmissionStatus
    ) -> None:
        _response = httpx.request(
            "POST",
            urllib.parse.urljoin(f"{self._environment}/", f"admin/store-workspace-submission-status/{submission_id}"),
            json=jsonable_encoder(request),
            headers=remove_none_from_headers(
                {
                    "X-Random-Header": self.x_random_header,
                    "Authorization": f"Bearer {self._token}" if self._token is not None else None,
                }
            ),
        )
        _response_json = _response.json()
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def send_workspace_submission_update(
        self, submission_id: SubmissionId, *, request: WorkspaceSubmissionUpdate
    ) -> None:
        _response = httpx.request(
            "POST",
            urllib.parse.urljoin(
                f"{self._environment}/", f"admin/store-workspace-submission-status-v2/{submission_id}"
            ),
            json=jsonable_encoder(request),
            headers=remove_none_from_headers(
                {
                    "X-Random-Header": self.x_random_header,
                    "Authorization": f"Bearer {self._token}" if self._token is not None else None,
                }
            ),
        )
        _response_json = _response.json()
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def store_traced_test_case(
        self,
        submission_id: SubmissionId,
        test_case_id: str,
        *,
        result: TestCaseResultWithStdout,
        trace_responses: typing.List[TraceResponse],
    ) -> None:
        _response = httpx.request(
            "POST",
            urllib.parse.urljoin(
                f"{self._environment}/", f"admin/store-test-trace/submission/{submission_id}/testCase/{test_case_id}"
            ),
            json=jsonable_encoder({"result": result, "traceResponses": trace_responses}),
            headers=remove_none_from_headers(
                {
                    "X-Random-Header": self.x_random_header,
                    "Authorization": f"Bearer {self._token}" if self._token is not None else None,
                }
            ),
        )
        _response_json = _response.json()
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def store_traced_test_case_v_2(
        self, submission_id: SubmissionId, test_case_id: TestCaseId, *, request: typing.List[TraceResponseV2]
    ) -> None:
        _response = httpx.request(
            "POST",
            urllib.parse.urljoin(
                f"{self._environment}/", f"admin/store-test-trace-v2/submission/{submission_id}/testCase/{test_case_id}"
            ),
            json=jsonable_encoder(request),
            headers=remove_none_from_headers(
                {
                    "X-Random-Header": self.x_random_header,
                    "Authorization": f"Bearer {self._token}" if self._token is not None else None,
                }
            ),
        )
        _response_json = _response.json()
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def store_traced_workspace(
        self,
        submission_id: SubmissionId,
        *,
        workspace_run_details: WorkspaceRunDetails,
        trace_responses: typing.List[TraceResponse],
    ) -> None:
        _response = httpx.request(
            "POST",
            urllib.parse.urljoin(f"{self._environment}/", f"admin/store-workspace-trace/submission/{submission_id}"),
            json=jsonable_encoder({"workspaceRunDetails": workspace_run_details, "traceResponses": trace_responses}),
            headers=remove_none_from_headers(
                {
                    "X-Random-Header": self.x_random_header,
                    "Authorization": f"Bearer {self._token}" if self._token is not None else None,
                }
            ),
        )
        _response_json = _response.json()
        raise ApiError(status_code=_response.status_code, body=_response_json)

    def store_traced_workspace_v_2(self, submission_id: SubmissionId, *, request: typing.List[TraceResponseV2]) -> None:
        _response = httpx.request(
            "POST",
            urllib.parse.urljoin(f"{self._environment}/", f"admin/store-workspace-trace-v2/submission/{submission_id}"),
            json=jsonable_encoder(request),
            headers=remove_none_from_headers(
                {
                    "X-Random-Header": self.x_random_header,
                    "Authorization": f"Bearer {self._token}" if self._token is not None else None,
                }
            ),
        )
        _response_json = _response.json()
        raise ApiError(status_code=_response.status_code, body=_response_json)
