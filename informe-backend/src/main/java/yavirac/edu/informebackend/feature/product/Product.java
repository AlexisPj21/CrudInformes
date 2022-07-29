package yavirac.edu.informebackend.feature.product;
import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;
import lombok.Data;
@Data
@Table("products")
public class Product {

    @Id
    @Column("product_id")
    private long productId;
    private String name;
    private String description;
    private String brand;
    private String model;
    private Timestamp created;
    private Timestamp updated;
    private boolean enable;
    private String image;
    private Long personId;

    @MappedCollection(idColumn = "product_id")
    private Set<ProductRelated>person = new HashSet<>();
    
}
