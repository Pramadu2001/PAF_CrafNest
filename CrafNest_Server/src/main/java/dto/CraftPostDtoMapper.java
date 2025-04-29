package dto;

import model.Craft;
import util.CraftPostUtil;

import java.util.ArrayList;
import java.util.List;

public class CraftPostDtoMapper {

    public static CraftPostDto toTwitDto(Craft craft, User reqUser) {

        UserDto user = UserDtoMapper.toUserDto(craft.getUser());

        boolean isLiked = CraftPostUtil.isLikedByReqUser(reqUser, craft);
        boolean isRetwitwd = CraftPostUtil.isRetwitedByReqUser(reqUser, craft);

        List<Long> retwitUserId = new ArrayList<>();

        for (User user1 : craft.getRetwitUser()) {
            retwitUserId.add(user1.getId());
        }

        CraftPostDto craftPostDto = new CraftPostDto();
        craftPostDto.setId(craft.getId());
        craftPostDto.setContent(craft.getContent());
        craftPostDto.setCreatedAt(craft.getCreatedAt());
        craftPostDto.setImage(craft.getImage());
        craftPostDto.setTotalLikes(craft.getLikes().size());
        craftPostDto.setTotalReplies(craft.getReplyCrafts().size());
        craftPostDto.setTotalRetweets(craft.getRetwitUser().size());
        craftPostDto.setUser(user);
        craftPostDto.setLiked(isLiked);
        craftPostDto.setRetwit(isRetwited);
        craftPostDto.setRetwitUsersId(retwitUserId);
        craftPostDto.setReplyTwits(toTwitDtos((craft.getReplyCrafts(),reqUser));
        craftPostDto.setVideo(craft.getVideo());

        return craftPostDto;
    }

    public static List<CraftPostDto> toTwitDtos(List<Craft> crafts, User reqUser) {
        List<CraftPostDto> craftPostDtos = new ArrayList<>();

        for (Craft craft : crafts) {
            CraftPostDto craftPostDto = toReplyTwitDto(craft, reqUser);
            craftPostDtos.add(craftPostDto);
        }
        return craftPostDtos;
    }

    private static CraftPostDto toReplyTwitDto(Craft craft, User reqUser) {

        UserDto user = UserDtoMapper.toUserDto(craft.getUser());

        boolean isLiked = CraftPostUtil.isLikedByReqUser(reqUser, craft);
        boolean isRetwitwd = CraftPostUtil.isRetwitedByReqUser(reqUser, craft);

        List<Long> retwitUserId = new ArrayList<>();

        for (User user1 : craft.getRetwitUser()) {
            retwitUserId.add(user1.getId());
        }

        CraftPostDto craftPostDto = new CraftPostDto();
        craftPostDto.setId(craft.getId());
        craftPostDto.setContent(craft.getContent());
        craftPostDto.setCreatedAt(craft.getCreatedAt());
        craftPostDto.setImage(craft.getImage());
        craftPostDto.setTotalLikes(craft.getLikes().size());
        craftPostDto.setTotalReplies(craft.getReplyCrafts().size());
        craftPostDto.setTotalRetweets(craft.getRetwitUser().size());
        craftPostDto.setUser(user);
        craftPostDto.setLiked(isLiked);
        craftPostDto.setRetwit(isRetwited);
        craftPostDto.setRetwitUsersId(retwitUserId);
        craftPostDto.setVideo(craft.getVideo());

        return craftPostDto;
    }
}



