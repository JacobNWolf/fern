/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.trace.resources.submission.types;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.trace.core.ObjectMappers;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@JsonDeserialize(builder = RecordedResponseNotification.Builder.class)
public final class RecordedResponseNotification {
    private final UUID submissionId;

    private final int traceResponsesSize;

    private final Optional<String> testCaseId;

    private final Map<String, Object> additionalProperties;

    private RecordedResponseNotification(
            UUID submissionId,
            int traceResponsesSize,
            Optional<String> testCaseId,
            Map<String, Object> additionalProperties) {
        this.submissionId = submissionId;
        this.traceResponsesSize = traceResponsesSize;
        this.testCaseId = testCaseId;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("submissionId")
    public UUID getSubmissionId() {
        return submissionId;
    }

    @JsonProperty("traceResponsesSize")
    public int getTraceResponsesSize() {
        return traceResponsesSize;
    }

    @JsonProperty("testCaseId")
    public Optional<String> getTestCaseId() {
        return testCaseId;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof RecordedResponseNotification && equalTo((RecordedResponseNotification) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(RecordedResponseNotification other) {
        return submissionId.equals(other.submissionId)
                && traceResponsesSize == other.traceResponsesSize
                && testCaseId.equals(other.testCaseId);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.submissionId, this.traceResponsesSize, this.testCaseId);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static SubmissionIdStage builder() {
        return new Builder();
    }

    public interface SubmissionIdStage {
        TraceResponsesSizeStage submissionId(UUID submissionId);

        Builder from(RecordedResponseNotification other);
    }

    public interface TraceResponsesSizeStage {
        _FinalStage traceResponsesSize(int traceResponsesSize);
    }

    public interface _FinalStage {
        RecordedResponseNotification build();

        _FinalStage testCaseId(Optional<String> testCaseId);

        _FinalStage testCaseId(String testCaseId);
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements SubmissionIdStage, TraceResponsesSizeStage, _FinalStage {
        private UUID submissionId;

        private int traceResponsesSize;

        private Optional<String> testCaseId = Optional.empty();

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(RecordedResponseNotification other) {
            submissionId(other.getSubmissionId());
            traceResponsesSize(other.getTraceResponsesSize());
            testCaseId(other.getTestCaseId());
            return this;
        }

        @java.lang.Override
        @JsonSetter("submissionId")
        public TraceResponsesSizeStage submissionId(UUID submissionId) {
            this.submissionId = submissionId;
            return this;
        }

        @java.lang.Override
        @JsonSetter("traceResponsesSize")
        public _FinalStage traceResponsesSize(int traceResponsesSize) {
            this.traceResponsesSize = traceResponsesSize;
            return this;
        }

        @java.lang.Override
        public _FinalStage testCaseId(String testCaseId) {
            this.testCaseId = Optional.of(testCaseId);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "testCaseId", nulls = Nulls.SKIP)
        public _FinalStage testCaseId(Optional<String> testCaseId) {
            this.testCaseId = testCaseId;
            return this;
        }

        @java.lang.Override
        public RecordedResponseNotification build() {
            return new RecordedResponseNotification(submissionId, traceResponsesSize, testCaseId, additionalProperties);
        }
    }
}
