package com.enigmacamp.jasperreporting.controller;

import com.enigmacamp.jasperreporting.service.HarbourService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/harbour")
public class HarbourController {
    HarbourService harbourService;

    public HarbourController(@Autowired HarbourService harbourService) {
        this.harbourService = harbourService;
    }

    @GetMapping("/report")
    public ResponseEntity<byte[]> getHarbourReport() {
        byte[] report = harbourService.doGetReport();
        if (report != null) {
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.parseMediaType("application/pdf"));
            headers.setContentDispositionFormData("inline", "harbour.pdf");
            headers.add("reportName", "harbour.pdf");
            return ResponseEntity
                    .ok()
                    .contentLength(report.length)
                    .headers(headers)
                    .body(report);
        } else {
            return ResponseEntity.badRequest().body(null);
        }
    }
}
