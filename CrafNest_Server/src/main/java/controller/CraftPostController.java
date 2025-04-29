package controller;

import dto.CraftPostDto;
import dto.CraftPostDtoMapper;
import exception.CraftPostException;
import jdk.jshell.spi.ExecutionControl;
import model.Craft;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import request.CraftPostReplyRequest;
import response.ApiResponse;
import service.CraftPostService;

import java.util.List;

@RestController
@RequestMapping("/api/twits")
public class CraftPostController {

    @Autowired
    private CraftPostService craftPostService;

    @Autowired
    private UserService userService;

    @PostMapping("/create")
    public ResponseEntity<CraftPostDto> createTwit(@RequestBody Craft req,
                                                   @RequestHeader("Authorization") String jwt) throws UserException, CraftPostException {

        User user = userService.findUserProfileByJwt(jwt);

        Craft craft = craftPostService.createTwit(req, user);

        CraftPostDto craftPostDto = CraftPostDtoMapper.toTwitDto(craft, user);
        return new ResponseEntity<>(craftPostDto, HttpStatus.CREATED);
    }
    @PostMapping("/reply")
    public ResponseEntity<CraftPostDto> replyTwit(@RequestBody CraftPostReplyRequest req,
                                                  @RequestHeader("Authorization") String jwt) throws UserException, CraftPostException {

        User user = userService.findUserProfileByJwt(jwt);

        Craft craft = craftPostService.createdReply(req, user);

        CraftPostDto craftPostDto = CraftPostDtoMapper.toTwitDto(craft, user);
        return new ResponseEntity<>(craftPostDto, HttpStatus.CREATED);
    }
    @PutMapping("/{twitId}/retwit")
    public ResponseEntity<CraftPostDto> retwit(@PathVariable Long twitId,
                                               @RequestHeader("Authorization") String jwt) throws UserException, CraftPostException {
        User user = userService.findUserProfileByJwt(jwt);
        Craft craft = craftPostService.retwit(twitId, user);
        CraftPostDto craftPostDto = CraftPostDtoMapper.toTwitDto(craft, user);
        return new ResponseEntity<>(craftPostDto, HttpStatus.OK);
    }
    @GetMapping("/{twitId}")
    public ResponseEntity<CraftPostDto> findTwitById(@PathVariable Long twitId,
                                                     @RequestHeader("Authorization") String jwt) throws UserException, CraftPostException {

        User user = userService.findUserProfileByJwt(jwt);

        Craft craft = craftPostService.findById(twitId);

        CraftPostDto craftPostDto = CraftPostDtoMapper.toTwitDto(craft, user);

        return new ResponseEntity<>(craftPostDto, HttpStatus.OK);
    }
    @DeleteMapping("/{twitId}")
    public ResponseEntity<ApiResponse> deleteTwit(@PathVariable Long twitId,
                                                  @RequestHeader("Authorization") String jwt) throws UserException, CraftPostException {

        User user = userService.findUserProfileByJwt(jwt);

        craftPostService.deleteTwitById(twitId, user.getId());

        ApiResponse res = new ApiResponse();
        res.setMessage("Twit deleted Successfully");
        res.setStatus(true);


        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<CraftPostDto>>findTwitByLikesContainesUser(@PathVariable Long userId,
                                                                          @RequestHeader("Authorization") String jwt) throws ExecutionControl.UserException, CraftPostException {

        User user = userService.findUserProfileByJwt(jwt);

        List<Craft> crafts = craftPostService.findByLikesContainsUser(user);

        List<CraftPostDto> craftPostDtos = CraftPostDtoMapper.toTwitDtos(crafts, user);

        return new ResponseEntity<>(craftPostDtos, HttpStatus.OK);
    }



}
