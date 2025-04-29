package service;

import exception.CraftPostException;
import model.Like;
import model.Craft;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.LikeRepository;
import repository.CraftPostRepository;

import java.util.List;

@Service
public class LikeServiceImplementation implements LikeService{

    @Autowired
    private LikeRepository likeRepository;

    @Autowired
    private CraftPostService craftPostService;

    @Autowired
    private CraftPostRepository craftPostRepository;

    @Override
    public Like likeTwit(Long twitId, User user) throws UserException, CraftPostException {
        Like isLikeExist = likeRepository.isLikeExist(user.getId(), twitId);

        if(isLikeExist != null) {
            likeRepository.deleteById(isLikeExist.getId());
            return isLikeExist;
        }

        Craft craft = craftPostService.findById(twitId);

        Like like = new Like();
        like.setCraft(craft);
        like.setUser(user);

        Like savedLike = likeRepository.save(like);

        craft.getLikes().add(savedLike);
        craftPostRepository.save(craft);

        return savedLike=likeRepository.save(like);

    }

    @Override
    public List<Like> getAllLikes(Long twitId) throws CraftPostException {
        List<Like> likes = likeRepository.findByTwitId(twitId);
        return likes;
    }
}
