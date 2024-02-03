/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.types.types;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonUnwrapped;
import com.fasterxml.jackson.annotation.JsonValue;
import java.lang.Object;
import java.lang.String;
import java.util.Objects;
import java.util.Optional;

public final class Exception {
  private final Value value;

  @JsonCreator(
      mode = JsonCreator.Mode.DELEGATING
  )
  private Exception(Value value) {
    this.value = value;
  }

  public <T> T visit(Visitor<T> visitor) {
    return value.visit(visitor);
  }

  public static Exception generic(ExceptionInfo value) {
    return new Exception(new GenericValue(value));
  }

  public static Exception timeout() {
    return new Exception(new TimeoutValue());
  }

  public boolean isGeneric() {
    return value instanceof GenericValue;
  }

  public boolean isTimeout() {
    return value instanceof TimeoutValue;
  }

  public boolean _isUnknown() {
    return value instanceof _UnknownValue;
  }

  public Optional<ExceptionInfo> getGeneric() {
    if (isGeneric()) {
      return Optional.of(((GenericValue) value).value);
    }
    return Optional.empty();
  }

  public Optional<Object> _getUnknown() {
    if (_isUnknown()) {
      return Optional.of(((_UnknownValue) value).value);
    }
    return Optional.empty();
  }

  @JsonValue
  private Value getValue() {
    return this.value;
  }

  public interface Visitor<T> {
    T visitGeneric(ExceptionInfo generic);

    T visitTimeout();

    T _visitUnknown(Object unknownType);
  }

  @JsonTypeInfo(
      use = JsonTypeInfo.Id.NAME,
      property = "type",
      visible = true,
      defaultImpl = _UnknownValue.class
  )
  @JsonSubTypes({
      @JsonSubTypes.Type(GenericValue.class),
      @JsonSubTypes.Type(TimeoutValue.class)
  })
  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  private interface Value {
    <T> T visit(Visitor<T> visitor);
  }

  @JsonTypeName("generic")
  private static final class GenericValue implements Value {
    @JsonUnwrapped
    private ExceptionInfo value;

    @JsonCreator(
        mode = JsonCreator.Mode.PROPERTIES
    )
    private GenericValue() {
    }

    private GenericValue(ExceptionInfo value) {
      this.value = value;
    }

    @java.lang.Override
    public <T> T visit(Visitor<T> visitor) {
      return visitor.visitGeneric(value);
    }

    @java.lang.Override
    public boolean equals(Object other) {
      if (this == other) return true;
      return other instanceof GenericValue && equalTo((GenericValue) other);
    }

    private boolean equalTo(GenericValue other) {
      return value.equals(other.value);
    }

    @java.lang.Override
    public int hashCode() {
      return Objects.hash(this.value);
    }

    @java.lang.Override
    public String toString() {
      return "Exception{" + "value: " + value + "}";
    }
  }

  @JsonTypeName("timeout")
  private static final class TimeoutValue implements Value {
    @JsonCreator(
        mode = JsonCreator.Mode.PROPERTIES
    )
    private TimeoutValue() {
    }

    @java.lang.Override
    public <T> T visit(Visitor<T> visitor) {
      return visitor.visitTimeout();
    }

    @java.lang.Override
    public boolean equals(Object other) {
      if (this == other) return true;
      return other instanceof TimeoutValue;
    }

    @java.lang.Override
    public String toString() {
      return "Exception{" + "}";
    }
  }

  private static final class _UnknownValue implements Value {
    private String type;

    @JsonValue
    private Object value;

    @JsonCreator(
        mode = JsonCreator.Mode.PROPERTIES
    )
    private _UnknownValue(@JsonProperty("value") Object value) {
    }

    @java.lang.Override
    public <T> T visit(Visitor<T> visitor) {
      return visitor._visitUnknown(value);
    }

    @java.lang.Override
    public boolean equals(Object other) {
      if (this == other) return true;
      return other instanceof _UnknownValue && equalTo((_UnknownValue) other);
    }

    private boolean equalTo(_UnknownValue other) {
      return type.equals(other.type) && value.equals(other.value);
    }

    @java.lang.Override
    public int hashCode() {
      return Objects.hash(this.type, this.value);
    }

    @java.lang.Override
    public String toString() {
      return "Exception{" + "type: " + type + ", value: " + value + "}";
    }
  }
}
