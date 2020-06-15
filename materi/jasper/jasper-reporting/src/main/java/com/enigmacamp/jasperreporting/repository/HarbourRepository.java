package com.enigmacamp.jasperreporting.repository;

import com.enigmacamp.jasperreporting.model.HarbourTransaction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HarbourRepository extends JpaRepository<HarbourTransaction, Long> {
}
