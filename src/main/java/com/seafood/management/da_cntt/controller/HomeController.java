package com.seafood.management.da_cntt.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping({"/", "/app"})
    public String home() {
        return "forward:/index.html";
    }
}