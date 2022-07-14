package yavirac.edu.informebackend.feature.opportunity;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OpportunityService {

    @Autowired
    OpportunityRepository opportunityRepository;

    public Opportunity save(Opportunity opportunity){
        return opportunityRepository.save(opportunity);
    }

    public Opportunity findById(long id){
        return opportunityRepository.findById(id).orElse(new Opportunity());
    }

    public List <Opportunity> findAll(){
        return opportunityRepository.findAll();
    }
    
}
