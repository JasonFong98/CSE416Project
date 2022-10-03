package com.server.server;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.util.ResourceUtils;

import java.io.File;
import java.io.IOException;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StateMap {
    @GetMapping("{state}")
    public Map<String,Object> getMap(@PathVariable String state) throws IOException{
        ObjectMapper mapper=new ObjectMapper();
        if(state.equals("Ohio")){
            try{
                File ohio_map=ResourceUtils.getFile("classpath:oh_cong_adopted_2022.json");
                Map<String,Object> map_data=mapper.readValue(ohio_map, new TypeReference<Map<String,Object>>(){});
                return map_data; 
            }catch(IOException e){
                System.out.print(e);
            }
        }else if(state.equals("North Carolina")){
            try{
                File ohio_map=ResourceUtils.getFile("classpath:NC_SMmap2_Statewide.json");
                Map<String,Object> map_data=mapper.readValue(ohio_map, new TypeReference<Map<String,Object>>(){});
                return map_data; 
            }catch(IOException e){
                System.out.print(e);
            }
        }else if(state.equals("Florida")){
            try{
                File ohio_map=ResourceUtils.getFile("classpath:P000C0109.json");
                Map<String,Object> map_data=mapper.readValue(ohio_map, new TypeReference<Map<String,Object>>(){});
                return map_data; 
            }catch(IOException e){
                System.out.print(e);
            }
        }
        return null;
    }
}
