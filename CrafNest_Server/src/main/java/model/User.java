package model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String firstName; // Add firstName
    private String lastName;
    private String location;
    private String website;
    private String birthDate;
    private String email;
    private String mobile;
    private String password;
    private String image;
    private String backgroundImage;
    private String bio;
    private boolean req_user;
    private boolean login_with_google;

    public String getFullName() {
        return firstName + " " + lastName; // Combine firstName and lastName for fullName
    }

    public void setFullName(String fullName) {
        // Optional: If fullName is provided, split it into firstName and lastName
        String[] names = fullName.split(" ", 2);
        this.firstName = names[0];
        this.lastName = names.length > 1 ? names[1] : "";
    }

    @JsonIgnore
    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    private  List<Twit>twit=new ArrayList<>();

    @OneToMany(mappedBy = "user" , cascade = CascadeType.ALL)
    private List<Like>likes=new ArrayList<>();

    @Embedded
    private Varification verification;

    @JsonIgnore
    @ManyToMany
    private List<User>followers=new ArrayList<>();

    @JsonIgnore
    @ManyToMany
    private List<User>following=new ArrayList<>();
}
