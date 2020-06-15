package com.enigmacamp.jasperreporting.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "t_harbour")
public class HarbourTransaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "harbour_id")
    private Long id;

    @Temporal(TemporalType.DATE)
    Date transDate;

    String status;

    String ship;

    String captain;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getTransDate() {
        return transDate;
    }

    public void setTransDate(Date transDate) {
        this.transDate = transDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getShip() {
        return ship;
    }

    public void setShip(String ship) {
        this.ship = ship;
    }

    public String getCaptain() {
        return captain;
    }

    public void setCaptain(String captain) {
        this.captain = captain;
    }
}
