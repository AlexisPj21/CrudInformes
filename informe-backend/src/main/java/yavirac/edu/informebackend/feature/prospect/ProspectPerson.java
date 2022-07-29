package yavirac.edu.informebackend.feature.prospect;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public class ProspectPerson {

    @Id
    private long id;
    private Long prospectId;
    private Long personId;
    
}
