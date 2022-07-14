package yavirac.edu.informebackend.feature.opportunity;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface OpportunityRepository extends CrudRepository <Opportunity, Long> {

    List <Opportunity> findAll();
    
}
