package yavirac.edu.informebackend.feature.prospect;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin({"*"})
@RequestMapping("/api/prospect")
public class ProspectController {

    @Autowired
    ProspectService prospectService;

    @PostMapping("/save")
    public Prospect save(@RequestBody Prospect prospect){
        return prospectService.save(prospect);

    }
    @GetMapping("/{id}")
    public Prospect findById(@PathVariable long id){
        return prospectService.findById(id);
    }

    @PutMapping("/update")
    public Prospect update(@RequestBody Prospect prospect){
        return prospectService.save(prospect);
    }

    @GetMapping("/findAll")
    public List<Prospect> findAll(){
        return prospectService.findAll();
    }
    
    
}
