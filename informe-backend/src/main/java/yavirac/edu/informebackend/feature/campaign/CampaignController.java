package yavirac.edu.informebackend.feature.campaign;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin({"*"})
@RequestMapping("/api/campaign")
public class CampaignController {

    @Autowired
    CampaignService campaignService;

    @PostMapping("/save")
    public Campaign save(@RequestBody Campaign campaign){
        return campaignService.save(campaign);
    }

    @GetMapping("/{campaignId}")
    public Campaign findById(@PathVariable long campaignId) {
        return campaignService.findById(campaignId);
    }

    @PutMapping("/update")
    public Campaign update(@RequestBody Campaign campaign){
        return campaignService.save(campaign);
    }

    @DeleteMapping("/deleteById/{campaignId}")
    public void deleteById(@PathVariable long campaignId){
        campaignService.deleteById(campaignId);
    }

    @GetMapping("/all")
    public List<Campaign>findAll(){
        return campaignService.findAll();
    }
}
