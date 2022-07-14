package yavirac.edu.informebackend.feature.opportunity;

import java.sql.Timestamp;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("opportunities")
public class Opportunity {

    @Id
    @Column("opportunity_id")
    private long opportunityId;
    @Column("prospect_id")
    private Integer prospectId;
    @Column("stage_id")
    private Integer stageId;
    @Column("vendor_id")
    private Integer vendorId;
    @Column("campaign_id")
    private Integer campaignId;
    private Integer amount;
    private Timestamp created;
    private Timestamp updated;
    private Boolean enable;
    
}
