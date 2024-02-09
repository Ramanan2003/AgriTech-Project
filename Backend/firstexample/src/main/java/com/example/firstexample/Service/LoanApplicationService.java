package com.example.firstexample.Service;

import com.example.firstexample.entity.LoanApplication;
import com.example.firstexample.repository.LoanApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoanApplicationService {

    @Autowired
    private LoanApplicationRepository loanApplicationRepository;

    // Method to retrieve all loan applicants
    public List<LoanApplication> getAllLoanApplicants() {
        return loanApplicationRepository.findAll();
    }

    // Method to save a new loan applicant
    public LoanApplication saveLoanApplicant(LoanApplication loanApplicant) {
        return loanApplicationRepository.save(loanApplicant);
    }
}
