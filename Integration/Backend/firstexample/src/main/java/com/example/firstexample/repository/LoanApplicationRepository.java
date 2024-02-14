package com.example.firstexample.repository;

import com.example.firstexample.entity.LoanApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoanApplicationRepository extends JpaRepository<LoanApplication, Integer> {
    // You can add custom query methods if needed
}
