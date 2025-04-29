package util;

import model.Like;
import model.Craft;

public class CraftPostUtil {

    public final static boolean isLikedByReqUser(User reqUser, Craft craft) {
        for(Like like: craft.getLikes()) {
            if(like.getUser().getId().equals(reqUser.getId())) {
                return true;
            }
        }
        return false;
    }

    public final static boolean isRetwitedByReqUser(User reqUser, Craft craft) {
        for(User user: craft.getRetwitUser()) {
            if(user.getId().equals(reqUser.getId())) {
                return true;
            }
        }
        return false;
    }
}
