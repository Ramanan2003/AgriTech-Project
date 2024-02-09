package com.example.firstexample.repository;

import com.example.firstexample.entity.AdminModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepo extends JpaRepository<AdminModel, Long> {
    // You can add custom queries or methods if needed
}
