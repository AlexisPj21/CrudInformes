package yavirac.edu.informebackend.feature.product;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    // Crear
    public Product save(Product product) {
        return productRepository.save(product);
    }

    // Read
    public Product findById(long id) {
        return productRepository.findById(id).orElse(new Product());
    }



    // registros de permiso en una sola a traves de una lista
    public List<Product> findAll() {
        return productRepository.findAll();
    }

    public List<Product> findByName(String term) {
        return productRepository.findByNameLikeIgnoreCase(term);
    }

}