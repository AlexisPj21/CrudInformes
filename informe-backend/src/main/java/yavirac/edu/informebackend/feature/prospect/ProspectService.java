package yavirac.edu.informebackend.feature.prospect;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProspectService {

    @Autowired
    ProspectRepository prospectRepository;

    public Prospect save(Prospect prospect){
        return prospectRepository.save(prospect);
    }

    public Prospect findById(long id){
        return prospectRepository.findById(id).orElse(new Prospect());

    }
    public List<Prospect>findAll(){
        return prospectRepository.findAll();
    }
    
}
