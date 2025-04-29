package model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
public class ProgressUpdate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private Date completedDate;

    // Getters
    public Long getId() {  // Add this getter for ID
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public Date getCompletedDate() {
        return completedDate;
    }

    // Setters
    public void setId(Long id) {  // Add this setter for ID
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setCompletedDate(Date completedDate) {
        this.completedDate = completedDate;
    }
}