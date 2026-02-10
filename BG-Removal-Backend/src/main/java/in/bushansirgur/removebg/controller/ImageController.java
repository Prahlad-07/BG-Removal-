package in.bushansirgur.removebg.controller;

import in.bushansirgur.removebg.dto.UserDTO;
import in.bushansirgur.removebg.response.RemoveBgResponse;
import in.bushansirgur.removebg.service.RemoveBackgroundService;
import in.bushansirgur.removebg.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/images")
@RequiredArgsConstructor
public class ImageController {

    private final RemoveBackgroundService removeBackgroundService;
    private final UserService userService;

    @PostMapping("/remove-background")
    public ResponseEntity<?> removeBackground(@RequestParam("file") MultipartFile file,
                                              Authentication authentication) {

        RemoveBgResponse response = null;
        Map<String, Object> responseMap = new HashMap<>();
        try {
            //validation
            if (authentication == null || authentication.getName() == null || authentication.getName().isEmpty()) {
                response = RemoveBgResponse.builder()
                        .statusCode(HttpStatus.FORBIDDEN)
                        .success(false)
                        .data("User does not have permission/access to this resource")
                        .build();
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body(response);
            }

            UserDTO userDTO = userService.getUserByClerkId(authentication.getName());

            //validation
            if (userDTO.getCredits() <= 0) {
                responseMap.put("message", "No credit balance");
                responseMap.put("creditBalance", userDTO.getCredits());
                response = RemoveBgResponse.builder()
                        .success(false)
                        .data(responseMap)
                        .statusCode(HttpStatus.BAD_REQUEST)
                        .build();
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
            }

            byte[] imageBytes = removeBackgroundService.removeBackground(file);
            String base64Image = Base64.getEncoder().encodeToString(imageBytes);

            userDTO.setCredits(userDTO.getCredits() - 1);

            userService.saveUser(userDTO);

            responseMap.put("success", true);
            responseMap.put("image", base64Image);
            responseMap.put("creditsRemaining", userDTO.getCredits());
            response = RemoveBgResponse.builder()
                    .statusCode(HttpStatus.OK)
                    .success(true)
                    .data(responseMap)
                    .build();
            return ResponseEntity.ok(response);
        }catch (Exception e) {
            response = RemoveBgResponse.builder()
                    .statusCode(HttpStatus.INTERNAL_SERVER_ERROR)
                    .success(false)
                    .data(e.getMessage() != null ? e.getMessage() : "Something went wrong.")
                    .build();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
}
