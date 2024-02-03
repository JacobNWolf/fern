/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.svc;

import java.lang.String;
import java.util.Optional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import resources.svc.types.MyEnum;

@RequestMapping(
    path = "/"
)
public interface SvcService {
  @GetMapping(
      value = "/test",
      produces = "application/json"
  )
  String test(@RequestParam("some-enum") Optional<MyEnum> someEnum);
}
