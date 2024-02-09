package com.example.firstexample.Controller;

import com.example.firstexample.entity.LoanApplication;
import com.example.firstexample.Service.LoanApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/loanApplicants")
public class LoanApplicationController {

    @Autowired
    private LoanApplicationService loanApplicationService;

    // GET method to retrieve all loan applicants
    @GetMapping
    public List<LoanApplication> getAllLoanApplicants() {
        return loanApplicationService.getAllLoanApplicants();
    }

    // POST method to create a new loan applicant
    @PostMapping
    public LoanApplication createLoanApplicant(@RequestBody LoanApplication loanApplicant) {
        return loanApplicationService.saveLoanApplicant(loanApplicant);
    }
}
