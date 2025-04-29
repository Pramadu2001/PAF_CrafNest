package service;

import exception.CraftPostException;
import model.Craft;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.CraftPostRepository;
import request.CraftPostReplyRequest;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class CraftPostServiceImplementation implements CraftPostService {

    @Autowired
    private CraftPostRepository craftPostRepository;

    @Override
    public Craft createTwit(Craft req, User user) throws UserException {

        Craft craft = new Craft();
        craft.setContent(req.getContent());
        craft.setCreatedAt(LocalDateTime.now());
        craft.setImage(req.getImage());
        craft.setUser(user);
        craft.setReply(false);
        craft.setTwit(true);
        craft.setVideo(req.getVideo());

        return craftPostRepository.save(craft);
    }

    @Override
    public List<Craft> findAllTwit() {
        return craftPostRepository.findAllByIsTwitTrueOrderByCreatedAtDesc();
    }

    @Override
    public Craft retwit(Long twitId, User user) throws UserException, CraftPostException {
        Craft craft = findById(twitId);
        if (craft.getRetwitUser().contains(user)) {
            craft.getRetwitUser().remove(user);
        } else {
            craft.getRetwitUser().add(user);
        }
        return craftPostRepository.save(craft);
    }

    public Craft findById(Long twitId) throws CraftPostException {
        Craft craft = craftPostRepository.findById(twitId)
                .orElseThrow(() -> new CraftPostException("Twit not found with id " + twitId));
        return craft;
    }

    @Override
    public void deleteTwitById(Long twitId, Long userId) throws CraftPostException, UserException {

        Craft craft = findById(twitId);

        if (!userId.equals(craft.getUser().getId())) {
            throw new UserException("you can't delete another user's twit");
        }

        craftPostRepository.deleteById(craft.getId());

    }

    @Override
    public Craft removeFromRetwit(Long twitId, User user) throws CraftPostException, UserException {
        return null;
    }

    @Override
    public Craft createReply(CraftPostReplyRequest req, User user) throws CraftPostException {
        Craft replyFor = findById(req.getTwitId());

        Craft craft = new Craft();
        craft.setContent(req.getContent());
        craft.setCreatedAt(LocalDateTime.now());
        craft.setImage(req.getImage());
        craft.setUser(user);
        craft.setReply(true);
        craft.setTwit(false);
        craft.setReplyFor(replyFor);

        Craft savedReply = craftPostRepository.save(craft);

        craft.getReplyCrafts().add(savedReply);
        craftPostRepository.save(replyFor);

        return replyFor;
    }

    @Override
    public List<Craft> getUserTwits(User user) {
        return craftPostRepository.findByRetwitUserContainsOrUser_IdAndIsTwitTrueOrderByCreatedAtDesc(user,user.getId());
    }

    @Override
    public List<Craft> findByLikesContainsUser(User user) {
        return craftPostRepository.findByLikesUser_id(user.getId());
    }
}
