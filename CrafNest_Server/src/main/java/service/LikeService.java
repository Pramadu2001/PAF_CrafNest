package service;

import exception.CraftPostException;
import exception.UserException;
import model.Like;
import model.User;

import java.util.List;

public interface LikeService {

    public Like likeTwit(Long twitId, User user) throws UserException, CraftPostException;

    public List<Like> getAllLikes(Long twitId) throws CraftPostException;
}
