package yavirac.edu.informebackend.feature.campaign;

import java.sql.Timestamp;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;
import lombok.Data;

@Data
@Table("campaigns")
public class Campaign {
    @Id
    @Column("campaign_id")
    private long campaignId;
    @Column("promotion_id")
    private Integer promotionId;
    private String advertisingMedia;
    private Timestamp startDate;
    private Timestamp finalDate;
    private Timestamp created;
    private Timestamp updated;
    private boolean enable;

}
