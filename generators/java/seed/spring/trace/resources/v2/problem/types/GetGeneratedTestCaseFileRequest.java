/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.v2.problem.types;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import core.ObjectMappers;
import java.lang.Object;
import java.lang.String;
import java.util.Objects;
import java.util.Optional;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@JsonDeserialize(
    builder = GetGeneratedTestCaseFileRequest.Builder.class
)
public final class GetGeneratedTestCaseFileRequest {
  private final Optional<TestCaseTemplate> template;

  private final TestCaseV2 testCase;

  private GetGeneratedTestCaseFileRequest(Optional<TestCaseTemplate> template,
      TestCaseV2 testCase) {
    this.template = template;
    this.testCase = testCase;
  }

  @JsonProperty("template")
  public Optional<TestCaseTemplate> getTemplate() {
    return template;
  }

  @JsonProperty("testCase")
  public TestCaseV2 getTestCase() {
    return testCase;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof GetGeneratedTestCaseFileRequest && equalTo((GetGeneratedTestCaseFileRequest) other);
  }

  private boolean equalTo(GetGeneratedTestCaseFileRequest other) {
    return template.equals(other.template) && testCase.equals(other.testCase);
  }

  @java.lang.Override
  public int hashCode() {
    return Objects.hash(this.template, this.testCase);
  }

  @java.lang.Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }

  public static TestCaseStage builder() {
    return new Builder();
  }

  public interface TestCaseStage {
    _FinalStage testCase(TestCaseV2 testCase);

    Builder from(GetGeneratedTestCaseFileRequest other);
  }

  public interface _FinalStage {
    GetGeneratedTestCaseFileRequest build();

    _FinalStage template(Optional<TestCaseTemplate> template);

    _FinalStage template(TestCaseTemplate template);
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder implements TestCaseStage, _FinalStage {
    private TestCaseV2 testCase;

    private Optional<TestCaseTemplate> template = Optional.empty();

    private Builder() {
    }

    @java.lang.Override
    public Builder from(GetGeneratedTestCaseFileRequest other) {
      template(other.getTemplate());
      testCase(other.getTestCase());
      return this;
    }

    @java.lang.Override
    @JsonSetter("testCase")
    public _FinalStage testCase(TestCaseV2 testCase) {
      this.testCase = testCase;
      return this;
    }

    @java.lang.Override
    public _FinalStage template(TestCaseTemplate template) {
      this.template = Optional.of(template);
      return this;
    }

    @java.lang.Override
    @JsonSetter(
        value = "template",
        nulls = Nulls.SKIP
    )
    public _FinalStage template(Optional<TestCaseTemplate> template) {
      this.template = template;
      return this;
    }

    @java.lang.Override
    public GetGeneratedTestCaseFileRequest build() {
      return new GetGeneratedTestCaseFileRequest(template, testCase);
    }
  }
}
