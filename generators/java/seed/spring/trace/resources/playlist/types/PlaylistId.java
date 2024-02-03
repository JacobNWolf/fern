/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.playlist.types;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import java.lang.Object;
import java.lang.String;

public final class PlaylistId {
  private final String value;

  private PlaylistId(String value) {
    this.value = value;
  }

  @JsonValue
  public String get() {
    return this.value;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    return this == other || (other instanceof PlaylistId && this.value.equals(((PlaylistId) other).value));
  }

  @java.lang.Override
  public int hashCode() {
    return value.hashCode();
  }

  @java.lang.Override
  public String toString() {
    return value;
  }

  @JsonCreator(
      mode = JsonCreator.Mode.DELEGATING
  )
  public static PlaylistId of(String value) {
    return new PlaylistId(value);
  }

  public static PlaylistId valueOf(String value) {
    return of(value);
  }
}
