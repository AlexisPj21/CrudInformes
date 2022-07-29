package yavirac.edu.informebackend.feature.opportunity;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public class OpportunityProduct {
    
    @Id
    private long id;
    private Long opportunityId;
    private Long productId;

}
