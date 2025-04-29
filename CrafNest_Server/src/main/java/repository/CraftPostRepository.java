package repository;

import model.Craft;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface CraftPostRepository extends JpaRepository<Craft, Long> {
    List<Craft> findAllByIsTwitTrueOrderByCreatedAtDesc();

    List<Craft> findByRetwitUserContainsOrUser_IdAndIsTwitTrueOrderByCreatedAtDesc(User user, Long userId);

    List<Craft> findByLikesContainingOrderByCreatedAtDesc(User user);

    @Query("Select t From Craft t JOIN t.likes l where l.user.id=:userId ")
    List<Craft> findByLikesUser_id(Long userId);
}
