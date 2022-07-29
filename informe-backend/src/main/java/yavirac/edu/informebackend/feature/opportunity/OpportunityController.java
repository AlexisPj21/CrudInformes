package yavirac.edu.informebackend.feature.opportunity;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@CrossOrigin({"*"})
@RequestMapping("/api/opportunity")
public class OpportunityController {

    @Autowired
    OpportunityService opportunityService;

    @PostMapping("/save")
    public Opportunity save(@RequestBody Opportunity opportunity){
        return opportunityService.save(opportunity);
    }

    @GetMapping("/{id}")
    public Opportunity findById(@PathVariable long id){
        return opportunityService.findById(id);
    }

    @PutMapping("/update")
    public Opportunity update(@RequestBody Opportunity opportunity){
        return opportunityService.save(opportunity);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteByID(@PathVariable long id){
        opportunityService.deleteByID(id);
    }

    @GetMapping("/findAll")
    public List <Opportunity> findAll(){
        return opportunityService.findAll();
    }

    @GetMapping("/findByDescription/{term}")
    public List<Opportunity> findByDescription(@PathVariable String term) {
        return opportunityService.findByDescription(term+"%");
    }
    
}
