package dto;

import model.Like;

import java.util.ArrayList;
import java.util.List;

public class LikeDtoMapper {

    public static LikeDto toLikeDto(Like like, User reqUser) {
        UserDto user = UserDtoMapper.toUserDto(like.getUser());
        UserDto reqUserDto = UserDtoMapper.toUserDto(reqUser);
        CraftPostDto twit = CraftPostDtoMapper.toTwitDto(like.getCraft(), reqUser);

        LikeDto likeDto = new LikeDto();
        likeDto.setId(like.getId());
        likeDto.setTwit(twit);
        likeDto.setUser(user);

        return likeDto;
    }

    public static List<LikeDto> toLikeDtos(List<Like> likes, User reqUser){
        List<LikeDto> likeDtos = new ArrayList<>();

        for(Like like: likes) {
            UserDto user = UserDtoMapper.toUserDto(like.getUser());
            CraftPostDto twit = CraftPostDtoMapper.toTwitDto(like.getCraft(), reqUser);

            LikeDto likeDto = new LikeDto();
            likeDto.setId(like.getId());
            likeDto.setTwit(twit);
            likeDto.setUser(user);
            likeDtos.add(likeDto);
        }

        return likeDtos;
    }


}

