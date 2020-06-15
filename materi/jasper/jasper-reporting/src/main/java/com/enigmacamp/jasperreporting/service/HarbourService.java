package com.enigmacamp.jasperreporting.service;

import com.enigmacamp.jasperreporting.model.HarbourTransaction;
import com.enigmacamp.jasperreporting.repository.HarbourRepository;
import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.List;

@Service
public class HarbourService {
    HarbourRepository harbourRepository;

    public HarbourService(@Autowired HarbourRepository harbourRepository) {
        this.harbourRepository = harbourRepository;
    }

    public byte[] doGetReport() {
        List<HarbourTransaction> reportData = harbourRepository.findAll();
        HashMap<String, Object> parameters = new HashMap<>();
        InputStream jrxmlInput = null;
        try {
            jrxmlInput = this.getClass().getClassLoader().getResource("report/harbour.jrxml").openStream();
            JasperReport report = JasperCompileManager.compileReport(jrxmlInput);
            JRDataSource datasource = new JRBeanCollectionDataSource(reportData, true);
            
            JasperPrint print = JasperFillManager.fillReport(report, parameters, datasource);
            return JasperExportManager.exportReportToPdf(print);
        } catch (FileNotFoundException e) {
            System.out.println(e);
            return null;
        } catch (JRException e) {
            System.out.println(e);
            return null;
        } catch (IOException e) {
            System.out.println(e);
            return null;
        }
    }
}
