package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entities.Zone;

public interface ZoneRepository extends JpaRepository <Zone,Integer> {
 Zone findById (int id);
}
