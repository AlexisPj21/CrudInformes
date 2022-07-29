package yavirac.edu.informebackend.feature.prospect;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("prospects")
public class Prospect {
    @Id
    @Column("prospect_id")
    private long prospectId;
    private String name;
    private String dni;
    private String source;
    private String phone;
    private String address;
    private String mail;
    private Timestamp created;
    private Timestamp updated;
    private Boolean enable;
    @Column("person_id")
    private Long personId;

 @MappedCollection(idColumn = "prospect_id")
    private Set<ProspectPerson>person = new HashSet<>();
    
    
}
