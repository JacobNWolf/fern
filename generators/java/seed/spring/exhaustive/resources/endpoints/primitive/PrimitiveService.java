/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.endpoints.primitive;

import core.BearerAuth;
import java.lang.String;
import java.security.Principal;
import java.time.OffsetDateTime;
import java.util.UUID;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping(
    path = "/primitive"
)
public interface PrimitiveService {
  @PostMapping(
      value = "/string",
      produces = "application/json",
      consumes = "application/json"
  )
  String getAndReturnString(@RequestHeader("Authorization") BearerAuth auth, Principal principal,
      @RequestBody String body);

  @PostMapping(
      value = "/integer",
      produces = "application/json",
      consumes = "application/json"
  )
  int getAndReturnInt(@RequestHeader("Authorization") BearerAuth auth, Principal principal,
      @RequestBody int body);

  @PostMapping(
      value = "/long",
      produces = "application/json",
      consumes = "application/json"
  )
  long getAndReturnLong(@RequestHeader("Authorization") BearerAuth auth, Principal principal,
      @RequestBody long body);

  @PostMapping(
      value = "/double",
      produces = "application/json",
      consumes = "application/json"
  )
  double getAndReturnDouble(@RequestHeader("Authorization") BearerAuth auth, Principal principal,
      @RequestBody double body);

  @PostMapping(
      value = "/boolean",
      produces = "application/json",
      consumes = "application/json"
  )
  boolean getAndReturnBool(@RequestHeader("Authorization") BearerAuth auth, Principal principal,
      @RequestBody boolean body);

  @PostMapping(
      value = "/datetime",
      produces = "application/json",
      consumes = "application/json"
  )
  OffsetDateTime getAndReturnDatetime(@RequestHeader("Authorization") BearerAuth auth,
      Principal principal, @RequestBody OffsetDateTime body);

  @PostMapping(
      value = "/date",
      produces = "application/json",
      consumes = "application/json"
  )
  String getAndReturnDate(@RequestHeader("Authorization") BearerAuth auth, Principal principal,
      @RequestBody String body);

  @PostMapping(
      value = "/uuid",
      produces = "application/json",
      consumes = "application/json"
  )
  UUID getAndReturnUuid(@RequestHeader("Authorization") BearerAuth auth, Principal principal,
      @RequestBody UUID body);

  @PostMapping(
      value = "/base64",
      produces = "application/json",
      consumes = "application/json"
  )
  byte[] getAndReturnBase64(@RequestHeader("Authorization") BearerAuth auth, Principal principal,
      @RequestBody byte[] body);
}
