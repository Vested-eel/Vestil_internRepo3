 CI/CD Reflection

What is the purpose of CI/CD?  
  - CI/CD (Continuous Integration and Continuous Deployment) automates the process of building, testing, and delivering software. Its purpose is to ensure that changes are integrated quickly, tested consistently, and deployed reliably without manual effort.

How does automating style checks improve project quality?  
  - Automated style checks enforce consistency across files, catch errors early, and reduce the need for manual review. This leads to cleaner code and documentation, making collaboration smoother and more professional.

What are some challenges with enforcing checks in CI/CD?  
  - One challenge is developer friction — strict checks can block commits and feel frustrating, especially during setup. Cross‑platform compatibility (like Husky on Windows vs Linux) can also cause issues. Additionally, maintaining rules that balance quality with flexibility can be tricky.

How do CI/CD pipelines differ between small projects and large teams?  
  - Small projects often use simple pipelines focused on linting and basic tests. Large teams require complex pipelines with multiple environments, approvals, and integrations to handle scale, collaboration, and deployment across different systems.
