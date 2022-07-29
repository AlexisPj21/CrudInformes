package yavirac.edu.informebackend.feature.person;

import org.springframework.data.annotation.Id;
import lombok.Data;

@Data

public class Person {

    @Id private long personId;
    private String name;
}