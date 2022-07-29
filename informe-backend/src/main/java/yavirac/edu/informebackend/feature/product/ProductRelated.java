package yavirac.edu.informebackend.feature.product;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("product_related")
public class ProductRelated {
    @Id
    private long id;
    private Long productId;
    private Long relatedId;
    


    
}
