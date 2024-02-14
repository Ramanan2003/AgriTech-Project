package com.example.firstexample.Service;

import com.example.firstexample.entity.LoanApplication;
import com.example.firstexample.repository.LoanApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LoanApplicationService {

    @Autowired
    private LoanApplicationRepository loanApplicantRepository;

    // Method to retrieve all loan applicants
    public List<LoanApplication> getAllLoanApplicants() {
        return loanApplicantRepository.findAll();
    }

    // Method to save a new loan applicant
    public LoanApplication saveLoanApplicant(LoanApplication loanApplicant) {
        return loanApplicantRepository.save(loanApplicant);
    }
    public void approveLoanApplication(int loanId) {
        LoanApplication loanApplicant = loanApplicantRepository.findById(loanId).orElse(null);
        if (loanApplicant != null) {
            loanApplicant.setStatus("approved");
            loanApplicantRepository.save(loanApplicant);
        }
    }

    public void rejectLoanApplication(int loanId) {
        LoanApplication loanApplicant = loanApplicantRepository.findById(loanId).orElse(null);
        if (loanApplicant != null) {
            loanApplicant.setStatus("rejected");
            loanApplicantRepository.save(loanApplicant);
        }
    }
    public Optional<LoanApplication> getLoanApplicantById(int loanId) {
        return loanApplicantRepository.findById(loanId);
}
}