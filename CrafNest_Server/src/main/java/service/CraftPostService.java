package service;


import exception.CraftPostException;
import exception.UserException;
import model.Craft;
import model.User;
import request.CraftPostReplyRequest;

import java.util.List;



public interface CraftPostService {

    public Craft createTwit(Craft req, User user) throws UserException;
    public List<Craft> findAllTwit();
    public Craft retwit(Long twitId, User user) throws UserException, CraftPostException;

    public void deleteTwitById(Long twitId, Long userId) throws CraftPostException, UserException;

    public Craft removeFromRetwit(Long twitId, User user) throws CraftPostException, UserException;

    public Craft createReply(CraftPostReplyRequest req, User user) throws CraftPostException;

    public List<Craft> getUserTwits(User user);
    public List<Craft> findByLikesContainsUser(User user);
}