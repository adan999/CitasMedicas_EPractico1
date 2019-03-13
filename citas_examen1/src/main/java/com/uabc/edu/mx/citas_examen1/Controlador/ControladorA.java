package com.uabc.edu.mx.citas_examen1.Controlador;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Controller
public class ControladorA {
private List<String> valores = new ArrayList<>();

    @RequestMapping(path="/agendar")
    public String lista (Model model){

        model.addAttribute("lista", valores);
        return "Agendar";
    }

    @PostMapping("/add")
    public String add(String asunto){
        valores.add(asunto);
        return "redirect:/agendar";
    }

    @RequestMapping(path="/consultar")
    public String consultar (Model model){

        return "Consultar";
    }
}
