package com.example.firstexample.Controller;

import com.example.firstexample.entity.LoanApplication;
import com.example.firstexample.Service.LoanApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin
@RestController
@RequestMapping("/loanApplicants")
public class LoanApplicationController {

    @Autowired
    private LoanApplicationService loanApplicantService;

    // GET method to retrieve all loan applicants
    @GetMapping
    public List<LoanApplication> getAllLoanApplicants() {
        return loanApplicantService.getAllLoanApplicants();
    }

    // POST method to create a new loan applicant
    @PostMapping
    public LoanApplication createLoanApplicant(@RequestBody LoanApplication loanApplicant) {
        return loanApplicantService.saveLoanApplicant(loanApplicant);
    }
    @PostMapping("/{loanId}/approve")
    public void approveLoanApplication(@PathVariable int loanId) {
        loanApplicantService.approveLoanApplication(loanId);
    }

    @PostMapping("/{loanId}/reject")
    public void rejectLoanApplication(@PathVariable int loanId) {
        loanApplicantService.rejectLoanApplication(loanId);
    }
    @GetMapping("/{loanId}")
    public Optional<LoanApplication> getLoanApplicantById(@PathVariable int loanId) {
        return loanApplicantService.getLoanApplicantById(loanId);
}
}