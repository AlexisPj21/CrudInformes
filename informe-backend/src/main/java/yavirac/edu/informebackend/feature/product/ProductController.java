package yavirac.edu.informebackend.feature.product;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import yavirac.edu.informebackend.feature.opportunity.OpportunityService;

@RestController
@CrossOrigin({"*"})
@RequestMapping("/api/product")

public class ProductController {

    @Autowired
    ProductService productService;

    @PostMapping("/save")
    public Product save(@RequestBody Product product){
        return productService.save(product);
    }

    @GetMapping({"/findById/{id}"})
    public Product findById(@PathVariable long id) {
        return productService.findById(id);
    }

    @PutMapping("/update")
    public Product update(@RequestBody Product product){
        return productService.save(product);
    }

    @GetMapping("/findAll")
    public List findAll(){
        return productService.findAll();
    }   

    @GetMapping("/findByName/{term}")
    public List<Product>findByName(@PathVariable String term){
       return productService.findByName(term+"%");
    }
}
